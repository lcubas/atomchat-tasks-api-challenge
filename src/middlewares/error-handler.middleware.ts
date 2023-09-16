import type { NextFunction, Request, Response } from 'express';
import { type ValidationError } from 'express-validator';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import HttpException from '../exceptions/HttpException';
import UnprocessableEntity from '../exceptions/UnprocessableEntity';

interface IResponseError {
  code: number;
  message: string;
  errors?: ValidationError[];
}

export const errorHandler = (
  error: Error | HttpException,
  _: Request,
  res: Response,
  __: NextFunction,
): void => {
  let response: IResponseError;

  if (error instanceof HttpException) {
    response = {
      code: error.status,
      message: error.message,
    };

    if (
      error instanceof UnprocessableEntity &&
      response.code === StatusCodes.UNPROCESSABLE_ENTITY
    ) {
      response.errors = error.errors;
    }
  } else {
    response = {
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    };
  }

  res.status(response.code).json(response);
};
