import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { styled } from '@material-ui/core/styles';

const StyledDiv = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
}));

const ScrollTopFAB: React.FC = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const anchor = (
      event.currentTarget.ownerDocument || document
    ).querySelector('#header');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <StyledDiv onClick={handleClick} role="presentation">
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </StyledDiv>
    </Zoom>
  );
};

export default ScrollTopFAB;
