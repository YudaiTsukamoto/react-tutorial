/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { User } from '../models/User';
import Layout from '../components/Layout';
import { plainToClass } from 'class-transformer';
import Avatar from '../components/Avatar';
import { Colors } from '../constants/styles';

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
