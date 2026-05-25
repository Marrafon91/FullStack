import { api } from './api';
import { type UserDTO } from '../models/user';

export function findUser() {
  return api.get<UserDTO>(`/users/${name}`);
}
