import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from './../../dummy-data';

const PostsCard = (props) => {
  const [data] = useState(dummyData);
  return (
    <div className='posts-container-wrapper'>
      {data.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </div>
  );
};

export default PostsCard;
