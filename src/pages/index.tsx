import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/main';
import Description from '../components/description';

const IndexPage: React.FC = () => (
  <>
    <SEO title="About me" />
    <Layout>
      <Description />
      <Main />
    </Layout>
  </>
);

export default IndexPage;
