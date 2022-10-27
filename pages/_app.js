/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;