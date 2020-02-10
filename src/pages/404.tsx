import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../components/notfound';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <NotFound />
    </Layout>
  </>
);

export default NotFoundPage;
