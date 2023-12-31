import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const index = (_: Request, res: Response): void => {
  res.status(StatusCodes.OK).send({
    message: 'OK',
    data: new Date().toJSON(),
  });
};

export default index;
