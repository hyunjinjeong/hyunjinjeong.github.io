import React from 'react';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
}));

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container maxWidth="md">
      <Typography variant="body1" color="inherit">
        {`Copyright © `}
        {` Hyunjin Jeong `}
        {new Date().getFullYear()}
        {`.`}
      </Typography>
    </Container>
  </StyledFooter>
);

export default Footer;
