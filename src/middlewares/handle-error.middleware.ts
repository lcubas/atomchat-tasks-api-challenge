import { NextFunction, Request, Response } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const message =
      error.message || getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);

    res.status(statusCode).json({ statusCode, message });
  } catch (err) {
    next(err);
  }
};

export default errorHandler;
