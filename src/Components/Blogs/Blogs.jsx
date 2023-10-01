import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleClick}) => {
  
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=> res.json())
    .then(data=> setBlogs(data))
  },[])
  return (
    <div className=' w-full  lg:w-9/12  bg-gray-100 p-2'>
      
      <div>
        {
          blogs.map(blog=><Blog key={blog.id} blog={blog} handleClick={handleClick}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;