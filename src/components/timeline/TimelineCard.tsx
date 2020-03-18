import React from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

export interface CardProps {
  right?: boolean;
  title: string;
  subheader: string;
  content: string;
  date: string;
  icon: JSX.Element;
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2, 2),
  margin: theme.spacing(2, 0),
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

export default TimelineCard;
