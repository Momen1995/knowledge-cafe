import profile from '../../assets/images/profile.png'
const Blog = ({blog,handleClick}) => {

  const { cover, title, author, posted_date, reading_time, hashtags} = blog;

  return (
    <div className='mb-12'> 
      <img src={cover} className='w-full'></img>
      <div className='my-4 flex justify-between'>
        <div className="flex gap-4 ">
          <img src={profile}></img>
          <div>
            <h4 className='font-bold text-xl text-[#111]'>{author}</h4>
            <h4 className='font-600 text-gray-700 mt-1'>{posted_date}</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-3 justify-center items-center text-gray-600">
          <p>{reading_time} min read</p>
          <button onClick={()=>handleClick(blog)}>Bookmark</button>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-[#111]">{title}</h3>
      <p className='mt-3 text-gray-700 ' >
        {
          hashtags.map((hash,idx) => <span key={idx}> <a href="#"> #{hash} </a></span>)
        }
      </p>
      <button className='mt-3 bg-slate-500 px-4 py-2 text-[18px] text-[#fff] rounded'>Mars as read</button>
    </div>
  );
};

export default Blog;