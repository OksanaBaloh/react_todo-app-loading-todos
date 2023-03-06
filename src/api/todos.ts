import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const createTodo = (userId: number, data: Todo) => {
  return client.post<Todo[]>(`/todos?userId=${userId}`, data);
};

// Add more methods here