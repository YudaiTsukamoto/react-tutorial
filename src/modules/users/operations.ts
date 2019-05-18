import { fetchUserStart, fetchUserSuccess } from './actions';
import { Dispatch } from 'redux';
import axios from 'axios';
import { plainToClass } from 'class-transformer';
import { User } from '../../models/User';

export const fetchUser = (id: string) => async (dispatch: Dispatch) => {
  dispatch(fetchUserStart());
  const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`);
  const user = plainToClass(User, response.data);
  dispatch(fetchUserSuccess(user));
};
