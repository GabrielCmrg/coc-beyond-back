import { userService } from '../../src/services';
import { userRepository } from '../../src/repositories';

describe('Create user', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Should check if the email is in use', async () => {
    // arrange
    const userToCreate = {
      email: 'controll@email.com',
      password: 'secret',
    };
    jest.spyOn(userRepository, 'getByEmail').mockResolvedValue(null);
    jest
      .spyOn(userRepository, 'create')
      .mockResolvedValue({ ...userToCreate, id: 1 });

    // act
    await userService.createNewUser(userToCreate);

    // assert
    expect(userRepository.getByEmail).toBeCalled();
  });
});
