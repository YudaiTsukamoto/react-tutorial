import { State } from './types';
import { User } from '../../models/User';

export const findUser = (users: State, id: string) =>
  users.find(user => user.id === Number(id));

export const mergeUser = (users: State, newUser: User) => {
  const userIds = users.map(user => user.id);
  if (userIds.includes(newUser.id)) {
    return users.map(user => (user.id === newUser.id ? newUser : user));
  }
  return [...users, newUser];
};
