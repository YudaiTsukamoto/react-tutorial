import {
  FetchUserFailAction,
  FetchUserStartAction,
  FetchUserSuccessAction,
} from '../users/types';

export type IsLoadingActionType =
  | FetchUserStartAction
  | FetchUserSuccessAction
  | FetchUserFailAction;

export type State = boolean;
