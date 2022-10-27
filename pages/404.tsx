import React from 'react';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ErrorStyle } from '../styles/404';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <ErrorStyle>
      <div>
        <h1>404</h1>
        <h2>Something going wrong...</h2>
      </div>
    </ErrorStyle>
  );
};

export default Error;
