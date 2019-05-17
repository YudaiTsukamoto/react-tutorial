import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { User } from '../models/user';

// ===
// @interface

interface Props {
  user: User;
}

// ===
// @view
const UserView: React.FC<Props> = ({ user }) => {
  return (
    <div>
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
  return <UserView user={{ id, name: 'name' }} />;
};

// ===
// @export
export default UserContainer;
