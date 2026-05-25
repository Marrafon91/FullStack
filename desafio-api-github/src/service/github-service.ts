import { api } from './api';
import { type UserDTO } from '../models/UserDTO';

export function findUser(username: string) {
  return api.get<UserDTO>(`/users/${username}`);
}
