import React from 'react';
import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Face from '../images/face.png';

const StyledBackground = styled('div')(({ theme }) => ({
  backgroundColor: '#71ba9d',
  padding: theme.spacing(6, 2, 4),
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

const iconStyle = {
  fontSize: '30px',
  color: 'white',
};

const hrStyle = {
  height: '2px',
  border: '0',
  background: 'white',
  width: '50%',
};

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

const Contacts = (): JSX.Element => (
  <>
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <a
              href="https://github.com/hyunjin95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="hyunjin95">
                <IconButton aria-label="GitHub Icon">
                  <GitHubIcon style={iconStyle} />
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a href="mailto:hyunjin.dev@gmail.com">
              <Tooltip title="hyunjin.dev@gmail.com">
                <IconButton aria-label="Email Icon">
                  <MailOutlineIcon style={iconStyle} />
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a href="tel:+821046245993">
              <Tooltip title="010-4624-5993">
                <IconButton aria-label="Phone Icon">
                  <PhoneIcon style={iconStyle} />
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/hyunjin_j_95/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="@hyunjin_j_95">
                <IconButton aria-label="Instagram Icon">
                  <InstagramIcon style={iconStyle} />
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.facebook.com/profile.php?id=100003653446976"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="정현진">
                <IconButton aria-label="Facebook Icon">
                  <FacebookIcon style={iconStyle} />
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
);

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
