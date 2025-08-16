import React, { useEffect, useState } from 'react';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect( ()=> {
    fetch("/public/blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data));
  } ,[]);

  return (
    <div className='w-2/3 bg-green-500'>
      <h1 className='text-2xl'>Blogs: {blogs.length}</h1>

    </div>
  );
};

export default Blogs;