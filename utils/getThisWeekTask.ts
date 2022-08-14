/**
 * @param tasks All tasks
 * @param thisWeek Current week
 * @returns Tasks of this week
 */
export default function getThisWeekTask(tasks: Tasks[], thisWeek: Days[]): Tasks[] {
  const firstDayOfThisWeek = new Date(thisWeek[0].fullDate).getTime();
  const lastDayOfThisWeek = new Date(thisWeek[6].fullDate).getTime();

  const taskOfWeek = tasks.filter((t) => {
    const date = new Date(t.date).getTime();
    return firstDayOfThisWeek <= date && date <= lastDayOfThisWeek;
  });

  let tasksOfThisWeek = new Array(thisWeek.length).fill(null);

  thisWeek.map((day, i) => {
    taskOfWeek.map((tasks) => {
      if (day.fullDate === tasks.date) {
        tasksOfThisWeek[i] = tasks.task;
      }
    });
  });

  return tasksOfThisWeek;
}

// /**
//  * @param tasks All tasks
//  * @param firstDate First day of current month
//  * @param lastDate Last day of current month
//  */
// export default function getTaskOfThisMonth(
//   firstDate: Date,
//   lastDate: Date,
//   tasks: Tasks[]
// ) {
//   const firstDayTime = firstDate.getTime();
//   const lastDayTime = lastDate.getTime();

//   const tasksOfThisMonth = tasks.filter((t) => {
//     const dateTime = new Date(t.date).getTime();
//     return firstDayTime <= dateTime && dateTime <= lastDayTime;
//   });

//   return tasksOfThisMonth;
// }
