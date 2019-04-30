/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import Layout from '../components/Layout';

// ===
// @View

const Home: React.FC = () => (
  <Layout>
    <h1>Home</h1>
    <div>This is home page...</div>
  </Layout>
);

export default Home;
