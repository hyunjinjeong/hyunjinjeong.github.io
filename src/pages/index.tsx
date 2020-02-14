import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Main from '../components/Main';
import Description from '../components/Description';
import Timeline from '../components/Timeline';

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
