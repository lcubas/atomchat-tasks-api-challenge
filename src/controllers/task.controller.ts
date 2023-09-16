import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { firestoreDb } from '../services/firestore';

interface TaskItem {
  title: string;
  description: string;
  is_completed: boolean;
}

const index = async (_: Request, res: Response): Promise<void> => {
  const tasksSnapshot = await firestoreDb.collection('tasks').get();

  const tasks: TaskItem[] = [];
  tasksSnapshot.forEach((doc) => {
    const { title, description, isCompleted } = doc.data();

    tasks.push({
      title,
      description,
      is_completed: isCompleted,
    });
  });

  res.status(StatusCodes.OK).send({ tasks });
};

export default index;
