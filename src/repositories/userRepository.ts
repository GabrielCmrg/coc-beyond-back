import client from '../config/database';
import { User, UserCreationData } from '../types/userTypes';

export async function create(data: UserCreationData): Promise<User> {
  const user: User = await client.user.create({ data });
  return user;
}

export async function getById(id: number): Promise<User | null> {
  const user: User | null = await client.user.findUnique({ where: { id } });
  return user;
}

export async function getByEmail(email: string): Promise<User | null> {
  const user: User | null = await client.user.findUnique({ where: { email } });
  return user;
}
