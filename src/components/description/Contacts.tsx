import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const iconStyle = {
  fontSize: '30px',
  color: 'white',
};

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

export default Contacts;
