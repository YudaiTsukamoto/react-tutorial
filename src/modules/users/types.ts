import { User } from '../../models/User';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export type State = User[];

export type FetchUserStartAction = {
  type: typeof FETCH_USER_START;
};

export type FetchUserSuccessAction = {
  type: typeof FETCH_USER_SUCCESS;
  payload: {
    user: User;
  };
};

export type FetchUserFailAction = {
  type: typeof FETCH_USER_FAIL;
  payload: {
    error: string;
  };
};

export type UserActionTypes =
  | FetchUserStartAction
  | FetchUserSuccessAction
  | FetchUserFailAction;
