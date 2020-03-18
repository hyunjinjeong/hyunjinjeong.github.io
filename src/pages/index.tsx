import React from 'react';

import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Main from '../components/Main';
import Description from '../components/description/Description';
import Timeline from '../components/timeline/Timeline';

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
