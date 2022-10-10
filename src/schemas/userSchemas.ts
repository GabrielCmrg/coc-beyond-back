import joi from 'joi';

import { UserRequest } from '../types/userTypes';

export const signupSchema: joi.ObjectSchema<UserRequest> = joi.object<
  UserRequest,
  true
>({
  email: joi.string().trim().email().required(),
  password: joi.string().trim().required(),
  confirmPassword: joi.string().equal(joi.ref('password')),
});
