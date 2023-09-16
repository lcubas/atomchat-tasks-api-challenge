import { firestoreDb } from '../services/firestore';

export interface ITaskItem {
  id: string;
  title: string;
  description: string;
  is_completed: boolean;
}

export interface ICreateTaskDTO {
  title: string;
  description: string;
}

const getAll = async (): Promise<ITaskItem[]> => {
  const tasks: ITaskItem[] = [];
  const tasksSnapshot = await firestoreDb.collection('tasks').get();

  tasksSnapshot.forEach((doc) => {
    const { title, description, isCompleted } = doc.data();

    tasks.push({
      title,
      id: doc.id,
      description,
      is_completed: isCompleted,
    });
  });

  return tasks;
};

const create = async (data: ICreateTaskDTO): Promise<ITaskItem> => {
  const newTaskData = {
    ...data,
    isCompleted: false,
  };

  const doc = await firestoreDb.collection('tasks').add(newTaskData);

  return {
    ...data,
    id: doc.id,
    is_completed: false,
  };
};

export default { getAll, create };
