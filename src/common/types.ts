export type TodoItem = {
  id: string,
  completed: boolean,
  message: string,
}

export const addEndpoint = '/add';
export type AddRequest = {
  message: string
}
export type AddResponse = {
  id: string
}
export const AddMethod = 'post';

export const getAllEndpoint = '/get-all';
export type GetAllResponse = {
  todos: TodoItem[]
}
export const GetAllMethod = 'get';

export const setAllEndpoint = '/set-all';
export type SetAllRequest = {
  todos: TodoItem[]
}
export const SetAllMethod = 'put';

export const port = 8000;
