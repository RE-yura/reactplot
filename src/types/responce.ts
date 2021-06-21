/* eslint @typescript-eslint/no-explicit-any: 0 */
export interface IError extends Error {
  status: number;
  message: string;
  detail: any[] | any;
}

export interface IRes<T = any> {
  data: T;
  error?: IError;
}
