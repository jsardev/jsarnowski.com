import React from 'react';

import '../styles/main.css';

import bgIcon1 from '../icons/bgIcon1.svg';

import Layout from '../components/Layout';
import { H1, Highlight } from '../components/Text';
import Container from '../components/Container';
import SocialGrid from '../components/SocialGrid';

const IndexPage = () => (
  <Layout>
    <img
      className="absolute opacity-05 w-1024 max-w-none -top-128 -z-1"
      src={bgIcon1}
    />
    <Container className="flex flex-col gap-4">
      <div className="lg:w-2/3">
        <H1 className="text-main">Hello!</H1>
        <p>
          My name is <Highlight>Jakub Sarnowski</Highlight> and I’m a{' '}
          <Highlight>software engineer</Highlight>. I’m passionate about
          creating amazing, helpful, intuitive, eye-pleasing products which
          users <Highlight className="text-main">love</Highlight> to use.
        </p>
      </div>
      <SocialGrid />
      <a
        className="text-main font-bold text-sm md:text-xl lg:text-2xl break-all"
        href="mailto:hello@jsarnowski.com"
      >
        hello@jsarnowski.com
      </a>
    </Container>
  </Layout>
);

export default IndexPage;
