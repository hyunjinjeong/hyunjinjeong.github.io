import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

import Face from '../../images/face.png';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(22),
  height: theme.spacing(22),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(5),
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const AboutMe = (): JSX.Element => (
  <>
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
  </>
);

export default AboutMe;
