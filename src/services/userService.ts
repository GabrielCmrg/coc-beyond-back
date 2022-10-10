import bcrypt from 'bcrypt';

import { conflictError } from '../exceptions';
import { userRepository } from '../repositories';
import {
  User,
  UserCreationData,
  userToView,
  UserView,
} from '../types/userTypes';

export async function createNewUser(
  userCandidate: UserCreationData,
): Promise<UserView> {
  const existingUser: User = await userRepository.getByEmail(
    userCandidate.email,
  );
  if (existingUser) {
    throw conflictError('This e-mail is in use.');
  }

  const hashPassword: string = bcrypt.hashSync(userCandidate.password, 10);
  const userToCreate: UserCreationData = {
    email: userCandidate.email,
    password: hashPassword,
  };
  const createdUser: User = await userRepository.create(userToCreate);
  const returnUser: UserView = userToView(createdUser);
  return returnUser;
}
