import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Blog Post ID: {id}</h2>
      <nav> 
        <Link to="user/1">User 1</Link>
        <Link to="user/2">User 2</Link>
      </nav>
    </>
  )
};
export default BlogPost;