import React from 'react';
import styled from 'styled-components';

import Header from './header';
import { Main } from './style';

const Layout = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, <a href="https://abhijeetpradhanang.com.np/">Abhijeet Pradhanang</a>
        {' '}
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  padding-bottom: 42px;
`;

export default Layout;
