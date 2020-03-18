import React from 'react';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AboutMe from './AboutMe';
import Contacts from './Contacts';

const StyledBackground = styled('div')(({ theme }) => ({
  backgroundColor: '#71ba9d',
  padding: theme.spacing(6, 2, 4),
  color: theme.palette.primary.contrastText,
}));

const hrStyle = {
  height: '2px',
  border: '0',
  background: 'white',
  width: '50%',
};

const Description: React.FC = () => (
  <StyledBackground>
    <Container maxWidth="sm">
      <AboutMe />
      <Typography align="center" variant="h4">
        <hr style={hrStyle} />
      </Typography>
      <Contacts />
    </Container>
  </StyledBackground>
);

export default Description;
