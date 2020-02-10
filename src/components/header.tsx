import React from 'react';
import { styled } from '@material-ui/core/styles';

const StyledHeader = styled('header')(({ theme }) => ({
  padding: theme.spacing(3, 4),
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

const Header = (): JSX.Element => (
  <StyledHeader id="header">뭘 넣어야 하나..</StyledHeader>
);

export default Header;
