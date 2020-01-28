import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const StyledTitle = styled.h1`
  margin: 0;
`;

// eslint-disable-next-line
const StyledLink = styled((props) => <Link {...props} />)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle = '' }: HeaderProps): JSX.Element => (
  <StyledHeader>
    <StyledDiv>
      <StyledTitle>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledTitle>
    </StyledDiv>
  </StyledHeader>
);

export default Header;
