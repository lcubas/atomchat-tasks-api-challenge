import HttpException from 'exceptions/HttpException';
import type { NextFunction, Request, Response } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export const errorHandler = (
  error: Error | HttpException,
  _: Request,
  res: Response,
  __: NextFunction,
): void => {
  let status, message;

  if (error instanceof HttpException) {
    status = error.status;
    message = error.message;
  } else {
    status = StatusCodes.INTERNAL_SERVER_ERROR;
    message = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  res.status(status).json({ status, message });
};
