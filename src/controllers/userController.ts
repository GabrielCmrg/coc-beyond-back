import { Request, Response } from 'express';

import { userService } from '../services';
import {
  UserCreationData,
  UserRequest,
  userRequestToCreationData,
  UserView,
} from '../types/userTypes';

export async function registerNewUser(
  req: Request,
  res: Response<UserView, { reqBody: UserRequest }>,
): Promise<Response<UserView>> {
  const requestBody: UserRequest = res.locals.reqBody;
  const user: UserCreationData = userRequestToCreationData(requestBody);
  const createdUser: UserView = await userService.createNewUser(user);
  return res.status(201).json(createdUser);
}
