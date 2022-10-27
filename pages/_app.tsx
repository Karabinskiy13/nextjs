/* eslint-disable react/prop-types */
import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyle />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
