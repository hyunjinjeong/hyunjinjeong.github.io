import React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TimelineCard, { CardProps } from './TimelineCard';

const StyledDivider = styled('div')(({ theme }) => ({
  color: 'black',
  width: theme.spacing(0.5),
  height: '100%',
  margin: 'auto',
  marginTop: theme.spacing(-11),
  backgroundColor: 'black',
}));

const TimelineGrid: React.FC<CardProps> = ({
  right,
  title,
  subheader,
  content,
  date,
  icon,
}: CardProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (isSmallScreen) {
    return (
      <Grid container style={{ position: 'relative' }}>
        <Grid item xs={3} sm={2}>
          {icon}
          <StyledDivider />
        </Grid>
        <Grid item xs={9} sm={10}>
          <TimelineCard
            title={title}
            subheader={subheader}
            content={content}
            date={date}
            right={right}
            icon={icon}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction={right ? 'row-reverse' : 'row'}
      style={{ position: 'relative' }}
    >
      <Grid item sm={10} md={5}>
        <TimelineCard
          title={title}
          subheader={subheader}
          content={content}
          date={date}
          right={right}
          icon={icon}
        />
      </Grid>
      <Grid item sm={2} md={2}>
        {icon}
        <StyledDivider />
      </Grid>
      <Grid item md={5} />
    </Grid>
  );
};

export default TimelineGrid;
