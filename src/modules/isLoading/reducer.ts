import { State, IsLoadingActionType } from './types';
import {
  FETCH_USER_FAIL,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from '../users/types';

const initialState: State = false;

export default (state: State = initialState, action: IsLoadingActionType) => {
  switch (action.type) {
    case FETCH_USER_START:
      return true;
    case FETCH_USER_SUCCESS:
    case FETCH_USER_FAIL:
      return false;
    default:
      return false;
  }
};
