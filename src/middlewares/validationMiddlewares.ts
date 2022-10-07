import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

import { unprocessableError } from '../exceptions';

export function validateBody<Type>(schema: joi.ObjectSchema<Type>) {
  return function validator(
    req: Request,
    res: Response<any, { reqBody: Type }>,
    next: NextFunction,
  ): void {
    const validation: joi.ValidationResult<Type> = schema.validate(req.body);
    if (validation.error) {
      throw unprocessableError(validation.error.message);
    }

    res.locals.reqBody = validation.value;
    return next();
  };
}
