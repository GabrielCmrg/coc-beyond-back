import { faker } from '@faker-js/faker';

export function signupInfo() {
  const password = faker.internet.password();
  return {
    email: faker.internet.email(),
    password,
    confirmPassword: password,
  };
}

export function createInfo() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
