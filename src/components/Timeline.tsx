/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import { green, red, blue, purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import MemoryIcon from '@material-ui/icons/Memory';

interface CardProps {
  right?: boolean;
  title: string;
  subheader: string;
  content: string;
  date: string;
  icon: JSX.Element;
}

const StyledBackground = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 2, 8),
  color: 'black',
}));

const StyledDivider = styled('div')(({ theme }) => ({
  color: 'black',
  width: theme.spacing(0.5),
  height: '100%',
  margin: 'auto',
  marginTop: theme.spacing(-11),
  backgroundColor: 'black',
}));

const StyledTimeline = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2, 2),
  margin: theme.spacing(2, 2),
}));

const StyledDateRight = styled(Typography)(({ theme }) => ({
  color: '#757575',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '55.5%',
    top: 0,
    marginTop: theme.spacing(5.5),
  },
}));

const StyledDateLeft = styled(StyledDateRight)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    left: 'auto',
    right: '55.5%',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  top: 0,
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 2,
}));

const iconStyles = {
  blue: {
    color: '#fff',
    backgroundColor: blue[500],
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  purple: {
    color: '#fff',
    backgroundColor: purple[500],
  },
};

const TimelineCard: React.FC<CardProps> = (props: CardProps) => {
  const { title, subheader, content, date, right } = props;

  return (
    <StyledCard>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
        {right ? (
          <StyledDateLeft variant="body1">
            <strong>{date}</strong>
          </StyledDateLeft>
        ) : (
          <StyledDateRight variant="body1">
            <strong>{date}</strong>
          </StyledDateRight>
        )}
      </CardContent>
    </StyledCard>
  );
};

const CardGridItem: React.FC<CardProps> = ({
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

const Timeline: React.FC = () => {
  const cardContents = {
    university: {
      title: 'Seoul National University',
      subheader: 'Majoring in Computer Science and Engineering',
      content: 'I am going to graduate in June 2020.',
      date: 'March 2013 - Present',
      icon: (
        <StyledAvatar style={iconStyles.blue}>
          <SchoolIcon />
        </StyledAvatar>
      ),
    },
    airforce: {
      title: 'Republic of Korean Air Force',
      subheader: 'A Full Stack Web Developer',
      content:
        'I used jQuery and pure HTML and CSS for Front-End, and JSP on Apache Tomcat and OracleDB for Back-End. Also, the concept of clean code grew on me due to a lot of legacy code that was hard to read.',
      date: 'February 2017 - February 2019',
      icon: (
        <StyledAvatar style={iconStyles.purple}>
          <LocalAirportIcon />
        </StyledAvatar>
      ),
    },
    dryad: {
      title: 'Dryad Games',
      subheader: 'A Front-End Game Developer Intern',
      content:
        'I used Unity and C#. Most of my work was to develop small logics and to fix bugs.',
      date: 'June 2016 - August 2016',
      icon: (
        <StyledAvatar style={iconStyles.red}>
          <SportsEsportsIcon />
        </StyledAvatar>
      ),
    },
    hynix: {
      title: 'SK Hynix',
      subheader: 'A Summer Intern',
      content:
        'I worked for five weeks in eMMC PE at SK Hynix. I learned how Flash Translation Layers(FTL) in NAND flash works and imitated its basic functions such as write, read, erase and garbage collection.',
      date: 'June 2015 - July 2015',
      icon: (
        <StyledAvatar style={iconStyles.green}>
          <MemoryIcon />
        </StyledAvatar>
      ),
    },
  };

  return (
    <StyledBackground>
      <Container maxWidth="md">
        <StyledTimeline variant="h3" align="center">
          <strong>TIMELINE</strong>
        </StyledTimeline>
        <CardGridItem right {...cardContents.university} />
        <CardGridItem {...cardContents.airforce} />
        <CardGridItem right {...cardContents.dryad} />
        <CardGridItem {...cardContents.hynix} />
      </Container>
    </StyledBackground>
  );
};

export default Timeline;
