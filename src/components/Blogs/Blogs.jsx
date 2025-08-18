import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';

const Blogs = ( {handleAddToBookmarks} ) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl mb-4">Number of Blogs: {blogs.length}</h1>
      {blogs.map(blog => (
        <Blog handleAddToBookmarks = {handleAddToBookmarks} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func
}

export default Blogs;
