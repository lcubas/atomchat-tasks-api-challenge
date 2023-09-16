import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import taskService from '../services/task.service';

const index = async (_: Request, res: Response): Promise<void> => {
  const tasks = await taskService.getAll();

  res.status(StatusCodes.OK).send({
    data: [...tasks],
  });
};

const create = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;
  const task = await taskService.create({ title, description });

  res.status(StatusCodes.CREATED).send({
    data: task,
  });
};

export default { index, create };
