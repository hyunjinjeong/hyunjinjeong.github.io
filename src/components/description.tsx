import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Face from '../images/face.png';

const StyledBackground = styled('div')(({ theme }) => ({
  backgroundColor: '#71ba9d',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(22),
  height: theme.spacing(22),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(5),
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const Description: React.FC = () => (
  <StyledBackground>
    <Container maxWidth="md">
      <StyledAvatar alt="my face" src={Face} />
      <Typography align="center" variant="h2" component="h1">
        <strong>HYUNJIN JEONG</strong>
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="overline"
        component="h2"
      >
        A developer who wants to write better code than yesterday
      </Typography>
      <Typography align="center" variant="h3" component="h2" gutterBottom>
        -------------------
      </Typography>
      깃헙 로고 이메일 주소 인스타
    </Container>
  </StyledBackground>
);

export default Description;
