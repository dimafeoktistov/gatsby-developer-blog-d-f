import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import config from '../../data/SiteConfig';
import Container from '../components/Container';
import Hero from '../components/Hero/hero';
import Projects from '../components/Projects/Projects';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <main>
          <Hero />
          <Container>
            <Projects />
          </Container>
        </main>
      </Layout>
    );
  }
}

export default Index;
