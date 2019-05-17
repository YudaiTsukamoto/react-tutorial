import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { User } from '../models/User';
import { plainToClass } from 'class-transformer';

// ===
// @interface

interface Props {
  user: User;
}

// ===
// @view
const UserView: React.FC<Props> = ({ user }) => {
  console.log(user);
  return (
    <div>
      {user.hasPicture() && <img src={user.pictureUrl} alt={user.name} />}
      {user.id} : {user.name}
    </div>
  );
};

// ===
// @styled

// ===
// @container
const UserContainer: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const { id } = match.params;
  return (
    <UserView
      user={plainToClass(User, {
        id,
        name: 'hoge',
        pictureUrl:
          'https://cdn-natgeo.nikkeibp.co.jp/atcl/news/16/060200197/ph_thumb.jpg?__scale=w:500,h:468&_sh=0ca02504a0',
      })}
    />
  );
};

// ===
// @export
export default UserContainer;
