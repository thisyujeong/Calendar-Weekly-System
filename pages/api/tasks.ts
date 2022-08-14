import { UpdateQuery } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import Task from '../../models/Task';

interface TaskQuery {
  text: string;
  checked: boolean;
}
interface TasksQuery {
  date: string;
  task: TaskQuery[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const { tasks } = await Task.findOne({ uid: req.query.uid });
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    case 'POST':
      try {
        const { uid, date, text, checked } = req.body;
        const query = await Task.findOne({ uid: req.body.uid });

        // uid 가 존재하지 않을 시 DB 생성
        if (!query) {
          const tasks = await Task.create({
            uid,
            tasks: [
              {
                date,
                task: [{ text, checked }],
              },
            ],
          });
          return res.status(201).json({ success: true, data: tasks });
        }

        // uid 가 존재하나 해당 날짜의 데이터가 존재하지 않을 시 데이터 추가
        const thisDate = query.tasks.filter((task: TasksQuery) => task.date === date);
        if (thisDate.length < 1) {
          const tasks = await Task.findOneAndUpdate({ uid: req.body.uid }, {
            $push: {
              tasks: { date: date, task: { text, checked } },
            },
          } as UpdateQuery<TasksQuery>);
          return res.status(201).json({ success: true, data: tasks });
        }

        // uid 와 해당 날짜가 모두 존재할 시 태스크 데이터 추가
        const tasks = await Task.findOneAndUpdate(
          { uid: req.body.uid },
          {
            $push: {
              'tasks.$[inner].task': { text, checked },
            },
          } as UpdateQuery<TaskQuery>,
          { arrayFilters: [{ 'inner.date': date }] }
        );

        res.status(201).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
