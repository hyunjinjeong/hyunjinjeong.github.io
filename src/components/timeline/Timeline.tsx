import React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TimelineContents from './TimelineContents';

const StyledBackground = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 2, 8),
  color: 'black',
}));

const StyledTimelineHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Timeline: React.FC = () => {
  return (
    <StyledBackground>
      <Container maxWidth="md">
        <StyledTimelineHeader variant="h3" align="center">
          <strong>TIMELINE</strong>
        </StyledTimelineHeader>
        <TimelineContents />
      </Container>
    </StyledBackground>
  );
};

export default Timeline;
