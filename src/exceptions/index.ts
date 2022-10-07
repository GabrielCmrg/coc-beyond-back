export type CustomError = {
  type: 'conflict';
  message: string;
};

export function conflictError(message: string): CustomError {
  return { type: 'conflict', message };
}
