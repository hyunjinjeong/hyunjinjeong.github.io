import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/main';
import Description from '../components/description';
import Timeline from '../components/timeline';

const IndexPage: React.FC = () => (
  <>
    <SEO title="About me" />
    <Layout>
      <Description />
      <Timeline />
      <Main />
    </Layout>
  </>
);

export default IndexPage;
