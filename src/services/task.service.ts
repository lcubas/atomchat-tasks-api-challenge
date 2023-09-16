import { firestoreDb } from '../services/firestore';

export interface TaskItem {
  title: string;
  description: string;
  is_completed: boolean;
}

const getAll = async (): Promise<TaskItem[]> => {
  const tasks: TaskItem[] = [];
  const tasksSnapshot = await firestoreDb.collection('tasks').get();

  tasksSnapshot.forEach((doc) => {
    const { title, description, isCompleted } = doc.data();

    tasks.push({
      title,
      description,
      is_completed: isCompleted,
    });
  });

  return tasks;
};

export default { getAll };
