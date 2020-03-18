import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Go back to the homepage</Link>
      </>
    </Layout>
  </>
);

export default NotFoundPage;
