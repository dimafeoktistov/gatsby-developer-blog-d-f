import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import config from '../../data/SiteConfig';
import Container from '../components/Container';
import Hero from '../components/Hero/hero';
import Projects from '../components/Projects/Projects';

class Index extends React.Component {
  render() {
    const {
      data: {
        allFile: { edges },
        avatar,
        loan,
        tomskMap,
        arcade,
        backgroundImg,
      },
    } = this.props;
    const images = {
      loan,
      tomskMap,
      arcade,
    };
    const { publicURL } = edges[0].node;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <main>
          <Hero cv={publicURL} avatar={avatar} bg={backgroundImg} />
          <Container>
            <Projects images={images} />
          </Container>
        </main>
      </Layout>
    );
  }
}

export default Index;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const filesQuery = graphql`
  query AllFiles {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    avatar: file(relativePath: { eq: "photos/1.jpg" }) {
      ...fluidImage
    }
    tomskMap: file(relativePath: { eq: "photos/guide-to-tomsk.png" }) {
      ...fluidImage
    }
    loan: file(relativePath: { eq: "photos/loan-calculator.png" }) {
      ...fluidImage
    }
    arcade: file(relativePath: { eq: "photos/arcade.png" }) {
      ...fluidImage
    }
    backgroundImg: file(relativePath: { eq: "photos/background-image.png" }) {
      ...fluidImage
    }
  }
`;
