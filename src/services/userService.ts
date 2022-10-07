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

  const createdUser: User = await userRepository.create(userCandidate);
  const returnUser: UserView = userToView(createdUser);
  return returnUser;
}
