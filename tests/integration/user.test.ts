import supertest from 'supertest';
import joi from 'joi';

import app from '../../src/app';
import client from '../../src/config/database';

describe('POST /signup', () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`;
  });

  it('Should create account succesfully', async () => {
    const userToCreate = {
      email: 'controll@email.com',
      password: 'secret',
      confirmPassword: 'secret',
    };
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
