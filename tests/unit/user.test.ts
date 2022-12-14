import bcrypt from 'bcrypt';

import { userService } from '../../src/services';
import { userRepository } from '../../src/repositories';
import * as user from '../factories/userFactory';

describe('Create user', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should check if the email is in use', async () => {
    // arrange
    const userToCreate = user.createInfo();
    jest.spyOn(userRepository, 'getByEmail').mockResolvedValue(null);
    jest
      .spyOn(userRepository, 'create')
      .mockResolvedValue({ ...userToCreate, id: 1 });

    // act
    await userService.createNewUser(userToCreate);

    // assert
    expect(userRepository.getByEmail).toBeCalled();
  });

  it('Should throw if the email is in use', async () => {
    // arrange
    const userToCreate = user.createInfo();
    jest
      .spyOn(userRepository, 'getByEmail')
      .mockResolvedValue({ ...userToCreate, id: 1 });

    // act
    const promise = userService.createNewUser(userToCreate);

    // assert
    await expect(promise).rejects.toBeTruthy();
  });

  it('Should hash the password before create', async () => {
    // arrange
    const userToCreate = user.createInfo();
    const hashedPassword = 'hashed';
    jest.spyOn(userRepository, 'getByEmail').mockResolvedValue(null);
    jest.spyOn(bcrypt, 'hashSync').mockReturnValue(hashedPassword);
    jest
      .spyOn(userRepository, 'create')
      .mockResolvedValue({ ...userToCreate, id: 1 });

    // act
    await userService.createNewUser(userToCreate);

    // assert
    expect(bcrypt.hashSync).toBeCalled();
    expect(userRepository.create).toBeCalledWith({
      email: userToCreate.email,
      password: hashedPassword,
    });
  });
});
