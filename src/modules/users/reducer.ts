import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  State,
  UserActionTypes,
} from './types';
import { mergeUser } from './selectors';

const initialState: State = [];

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USER_START:
      return state;
    case FETCH_USER_SUCCESS:
      return mergeUser(state, action.payload.user);
    default:
      return state;
  }
};
