import { FETCH_USER_START, FETCH_USER_SUCCESS, UserActionTypes } from './types';
import { User } from '../../models/User';

export const fetchUserStart = (): UserActionTypes => ({
  type: FETCH_USER_START,
});

export const fetchUserSuccess = (user: User): UserActionTypes => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
});
