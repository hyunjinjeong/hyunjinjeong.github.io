/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Footer from './footer';
import ScrollTopFAB from './scrolltop';

interface LayoutProps {
  children: JSX.Element;
}

const StyledRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <StyledRoot>
    <CssBaseline />
    <Header />
    {children}
    <Footer />
    <ScrollTopFAB />
  </StyledRoot>
);

export default Layout;
