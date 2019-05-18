/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { User } from '../models/User';
import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import { Colors } from '../constants/styles';
import { operations, selectors } from '../modules/users';
import { AppState } from '../modules/store';
import { isLoading } from '../modules/isLoading';

// ===
// @interface

interface Props {
  user: User;
}

// ===
// @view
const UserView: React.FC<Props> = ({ user }) => {
  return (
    <Layout>
      <Container>
        <SideContainer>
          {user.hasPicture() && (
            <AvatarIcon src={user.pictureUrl!} alt={user.name} />
          )}
          <UserName>{user.name}</UserName>
        </SideContainer>
        <MainContainer>ここにメインのコンテンツがはいる</MainContainer>
      </Container>
    </Layout>
  );
};

// ===
// @styled

const Container = styled.div({
  display: 'flex',
  padding: '30px 0',
});

const SideContainer = styled.div({
  alignItems: 'center',
  background: Colors.paleGray,
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  marginRight: 30,
  padding: '30px 0',
  width: '30%',
});

const AvatarIcon = styled(Avatar)({
  marginBottom: 15,
  width: '40%',
});

const UserName = styled.div({
  color: Colors.gray,
  fontSize: 18,
  fontWeight: 700,
});

const MainContainer = styled.div({});

type ContainerProps = {
  user?: User;
  isLoading: boolean;
  fetchUser: (id: string) => void;
} & RouteComponentProps<{ id: string }>;

// ===
// @container
const UserContainer: React.FC<ContainerProps> = ({
  user,
  isLoading,
  match,
  fetchUser,
}) => {
  const { id } = match.params;

  React.useEffect(() => {
    fetchUser(id);
  }, [id]);

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (!user) {
    return <Layout>User NotFound</Layout>;
  }

  return <UserView user={user} />;
};

const mapStateToProps = (
  state: AppState,
  ownProps: RouteComponentProps<{ id: string }>
) => {
  const { users, isLoading } = state;
  const id = ownProps.match.params.id;
  const user = selectors.findUser(users, id);
  return { user, isLoading };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchUser: (id: string) => dispatch(operations.fetchUser(id)),
});

// ===
// @export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
