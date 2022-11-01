/* eslint-disable react/prop-types */
import React from 'react';
import { Post } from '../types';

type Props = {
  post: Post;
};

const PostInfo = ({ post }: Props) => {
  const { title, body } = post || {};

  if (!post) {
    return <h3>Empty post...</h3>;
  }

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
