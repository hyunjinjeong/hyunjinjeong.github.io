/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { green, red, blue, purple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import MemoryIcon from '@material-ui/icons/Memory';

import TimelineGrid from './TimelineGrid';

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

const timelineText = {
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

const TimelineContents: React.FC = () => (
  <>
    <TimelineGrid right {...timelineText.university} />
    <TimelineGrid {...timelineText.airforce} />
    <TimelineGrid right {...timelineText.dryad} />
    <TimelineGrid {...timelineText.hynix} />
  </>
);

export default TimelineContents;
