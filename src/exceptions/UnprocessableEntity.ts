import { StatusCodes } from 'http-status-codes';
import HttpException from './HttpException';
import { type ValidationError } from 'express-validator';

export default class UnprocessableEntity extends HttpException {
  constructor(message = 'Unprocessable entity', public errors: ValidationError[]) {
    super(StatusCodes.UNPROCESSABLE_ENTITY, message);
  }
}
