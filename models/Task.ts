import mongoose, { InferSchemaType } from 'mongoose';

const TaskSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [
    {
      date: { type: String, required: true },
      task: [
        {
          text: { type: String, required: true },
          checked: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

export type Task = InferSchemaType<typeof TaskSchema>;
export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
