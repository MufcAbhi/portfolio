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
        © {new Date().getFullYear()}, Built with
        <span style={{ margin: '0 10px' }}>❤️</span>by {' '}
        <a href="https://avinashrijal.com.np/">Avinash Rijal</a>
        <br />Powered by
        {' '}
        <a target="_blank" href="https://www.gatsbyjs.org" rel="noreferrer">Gatsby</a>
        <br />Hosted & used CMS by
        {' '}
        <a target="_blank" href="https://www.netlify.com" rel="noreferrer">Netlify</a>
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
