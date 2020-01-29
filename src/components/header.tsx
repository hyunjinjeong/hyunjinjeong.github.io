import { Link } from 'gatsby';
import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

const headerStyle = {
  background: 'rebeccapurple',
  marginBottom: '1.45rem',
};

const divStyle = {
  margin: '0 auto',
  maxWidth: '960',
  padding: '1.45rem 1.0875rem',
};

const titleStyle = {
  margin: '0',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const Header = ({ siteTitle = '' }: HeaderProps): JSX.Element => (
  <header style={headerStyle}>
    <div style={divStyle}>
      <h1 style={titleStyle}>
        <Link to="/" style={linkStyle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
