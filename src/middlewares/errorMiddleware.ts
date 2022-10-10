import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../exceptions';

const hash = {
  conflict: 409,
  unprocessable_entity: 422,
};

export function errorHandler(
  error: CustomError | Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  console.log(error);
  if ('type' in error) {
    const statusCode: number = hash[error.type] || 400;
    return res.status(statusCode).send(error.message);
  }
  return res.status(500).send('Unexpected error.');
}
