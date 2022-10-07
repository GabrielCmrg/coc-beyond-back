import { User as UserModel } from '@prisma/client';

export type User = UserModel;
export type UserCreationData = Omit<UserModel, 'id'>;
export type UserView = Omit<User, 'password'>;
export type UserRequest = UserCreationData & {
  confirmPassword: string;
};

export function userToView(user: User): UserView {
  return {
    id: user.id,
    email: user.email,
  };
}
