import React from 'react';

import Layout from '../components/layout';
import Main from '../components/main';
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
  <>
    <SEO title="About me" />
    <Layout>
      <Main />
    </Layout>
  </>
);

export default IndexPage;
