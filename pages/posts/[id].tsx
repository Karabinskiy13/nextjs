/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import Head from 'next/head';
import PostInfo from '../../components/PostInfo';
import { GetServerSideProps } from 'next';
import { Post } from '../../types';

export type PostItemProps = {
  post: Post;
};

const Post: FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { post: data }
  };
};

export default Post;
