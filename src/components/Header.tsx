import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import { scrollToAnchor } from './ScrollTop';

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
      <StyledButton size="large" disabled>
        Blog
      </StyledButton>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
