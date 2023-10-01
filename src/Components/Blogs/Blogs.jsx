import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=> res.json())
    .then(data=> setBlogs(data))
  },[])
  return (
    <div className='w-9/12'>
      <h3>Blogs : {blogs.length}</h3>
      <div>
        {
          blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;