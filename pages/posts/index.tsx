/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import { Post } from '../../types';

type Props = {
  posts: Post[];
};

const Posts: FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts list:</h1>
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { posts: data }
  };
};

export default Posts;
