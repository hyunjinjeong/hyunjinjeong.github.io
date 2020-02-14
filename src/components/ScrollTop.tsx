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

export const scrollToAnchor = (
  id: string,
  event: React.MouseEvent<HTMLElement>,
): void => {
  const anchor = (event.currentTarget.ownerDocument || document).querySelector(
    id,
  );

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const ScrollTopFAB: React.FC = () => {
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <StyledDiv
        onClick={(e): void => scrollToAnchor(`#header`, e)}
        role="presentation"
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </StyledDiv>
    </Zoom>
  );
};

export default ScrollTopFAB;
