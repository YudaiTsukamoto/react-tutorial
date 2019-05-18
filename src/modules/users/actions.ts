import { FETCH_USER_START, FETCH_USER_SUCCESS } from './types';
import { User } from '../../models/User';

export const fetchUserStart = () => ({
  type: FETCH_USER_START,
});

export const fetchUserSuccess = (user: User) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
});
