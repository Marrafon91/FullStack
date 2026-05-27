import { api } from '../utils/system';
import { type UserDTO } from '../models/UserDTO';

export function findUser(username: string) {
  return api.get<UserDTO>(`/users/${username}`);
}
