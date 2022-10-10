export type CustomError = {
  type: 'conflict' | 'unprocessable_entity';
  message: string;
};

export function conflictError(message: string): CustomError {
  return { type: 'conflict', message };
}

export function unprocessableError(message: string): CustomError {
  return { type: 'unprocessable_entity', message };
}
