import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { scrollToAnchor } from '../common/ScrollTop';

const StyledHeader = styled('header')({
  backgroundColor: '#2f3e4f',
});

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  display: 'flex',
  justifyContent: 'flex-end',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: 'white',
}));

const Header = (): JSX.Element => (
  <StyledHeader id="header">
    <StyledContainer maxWidth="md">
      <StyledButton
        size="large"
        onClick={(e): void => scrollToAnchor(`#header`, e)}
      >
        About me
      </StyledButton>
      <Link
        href="https://velog.io/@das01063"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton size="large">Blog</StyledButton>
      </Link>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
