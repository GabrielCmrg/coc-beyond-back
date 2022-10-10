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

  afterAll(async () => {
    await client.$disconnect();
  });
});
