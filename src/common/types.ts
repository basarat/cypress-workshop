export type TodoItem = {
  id: string,
  completed: boolean,
  message: string,
}

export const createEndpoint = '/add';
export type CreateRequest = {
  message: string
}
export type CreateResponse = {
  id: string
}

export const getAllEndpoint = '/get-all';
export type GetAllResponse = {
  todos: TodoItem[]
}

export const setAllEndpoint = '/set-all';
export type SetAllRequest = {
  todos: TodoItem[]
}
