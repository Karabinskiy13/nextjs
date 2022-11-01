/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { PostItemProps } from '../pages/posts/[id]';

const PostInfo: FC<PostItemProps> = ({ post }) => {
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
