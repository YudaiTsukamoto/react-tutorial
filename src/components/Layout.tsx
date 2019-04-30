/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {Colors} from "../constants/styles";
import mq from '../utils/MediaQuery';

// =====
// @View

const Layout: React.FC = props => (
  <div>
    <Header>
      <Link to="/"><Logo>React Tutorial</Logo></Link>
      <Menu>
        <MenuItem>
          <Link to="/"><MenuLink>Home</MenuLink></Link>
        </MenuItem>
        <MenuItem>
          <Link to="/help"><MenuLink>Help</MenuLink></Link>
        </MenuItem>
      </Menu>
    </Header>
    <Content>
      {props.children}
    </Content>
    <Footer>
      @copyright react-tutorial
    </Footer>
  </div>
);

// ===
// @Styled

const Header = styled.header({
  alignItem: 'center',
  background: Colors.turquoiseBlue,
  display: 'flex',
  height: 64,
  padding: '0 24px',
});

const Logo = styled.div({
  alignItems: 'center',
  color: Colors.white,
  display: 'flex',
  fontSize: 24,
  fontWight: 700,
  height: '100%',
  justifyContent: 'center',
  marginRight: 20
});

const Content = styled.main(mq({
  margin: '0 auto',
  paddingLeft: [24, 80],
  paddingRight: [24, 80],
}));

const Footer = styled.footer(mq({
  background: Colors.paleGray,
  color: Colors.gray,
  margin: '0 auto',
  paddingBottom: [24, 40],
  paddingLeft: [24, 80],
  paddingRight: [24, 80],
  paddingTop: [24, 40],
  textAlign: 'center'
}));

const Menu = styled.div({
  alignItems: 'center',
  display: 'flex'
});

const MenuItem = styled.div({
  '&:hover': {
    background: Colors.darkTurquoiseBlue,
  },
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginRight: 20,
  padding: '0 20px',
  height: '100%'
});

const MenuLink = styled.span({
  color: Colors.white
});

export default Layout;
