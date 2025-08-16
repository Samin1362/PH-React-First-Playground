import React, { useEffect, useState } from 'react';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect( ()=> {
    fetch("/public/blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data));
  } ,[]);

  return (
    <div>
      <h1>{blogs.length}</h1>
    </div>
  );
};

export default Blogs;