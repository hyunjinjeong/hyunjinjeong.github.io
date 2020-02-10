import React from 'react';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  // theme.palette.type === 'dark'
  //   ? theme.palette.grey[800]
  //   : theme.palette.grey[200],
}));

const Copyright = (): JSX.Element => (
  <Typography variant="body2" color="inherit">
    {'Copyright © '}
    <Link component={GatsbyLink} color="inherit" to="/">
      {'Hyunjin Jeong'}
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container maxWidth="sm">
      <Typography variant="body1">This is my footer.</Typography>
      <Copyright />
    </Container>
  </StyledFooter>
);

export default Footer;
