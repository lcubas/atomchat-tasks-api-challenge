import NotFoundException from 'exceptions/NotFoundException';
import { firestoreDb } from '../services/firestore';
import removeUndefinedValues from 'utils/removeUndefinedVales';

export interface ITaskItem {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface ICreateTaskDTO {
  title: string;
  description: string;
}

export interface IUpdateTaskDTO {
  title: string;
  description: string;
  isCompleted?: boolean;
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
      isCompleted,
    });
  });

  return tasks;
};

const create = async (data: ICreateTaskDTO): Promise<ITaskItem> => {
  const newTaskData = {
    ...data,
    isCompleted: false,
  };

  const taskRef = await firestoreDb.collection('tasks').add(newTaskData);

  return {
    ...data,
    id: taskRef.id,
    isCompleted: false,
  };
};

const update = async (taskId: string, data: IUpdateTaskDTO): Promise<ITaskItem> => {
  const taskRef = firestoreDb.collection('tasks').doc(taskId);
  const taskSnapshot = await taskRef.get();

  if (!taskSnapshot.exists) {
    throw new NotFoundException('Task not found');
  }

  const updateTaskData = removeUndefinedValues(data);

  await taskRef.update(updateTaskData);

  const updatedTasksnapshot = await taskRef.get();
  const { title, description, isCompleted } = updatedTasksnapshot.data() as ITaskItem;

  return {
    title,
    description,
    isCompleted,
    id: taskId,
  };
};

export default { getAll, create, update };
