import supertest from 'supertest';
import joi from 'joi';

import app from '../../src/app';
import client from '../../src/config/database';
import * as user from '../factories/userFactory';

describe('POST /signup', () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`;
  });

  it('Should create account succesfully', async () => {
    const userToCreate = user.signupInfo();
    const returnSchema = joi.object({
      id: joi.number().integer().greater(0).required(),
      email: joi.string().email().required(),
    });
    const result = await supertest(app).post('/signup').send(userToCreate);
    const validation = returnSchema.validate(result.body);
    expect(result.status).toBe(201);
    expect(validation.error).toBeFalsy();
  });

  it('Should fail if the email is in use', async () => {
    const userToCreate = user.signupInfo();
    await client.user.create({
      data: { email: userToCreate.email, password: userToCreate.password },
    });
    const result = await supertest(app).post('/signup').send(userToCreate);
    expect(result.status).toBe(409);
  });

  it('Should fail if the password is not confirmed correctly', async () => {
    const userToCreate = user.signupInfo();
    userToCreate.confirmPassword = 'different password';
    const result = await supertest(app).post('/signup').send(userToCreate);
    expect(result.status).toBe(422);
  });

  afterAll(async () => {
    await client.$disconnect();
  });
});
