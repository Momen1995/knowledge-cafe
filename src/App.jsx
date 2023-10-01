import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Header/Header"

function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [count,setCount] = useState(0)

  const handleClick = blog =>{
     const newBookmarks = [...bookmarks,blog];
     setBookmarks(newBookmarks)
  }

  const handleBtnClick = time =>{
    const newTime = count + time;
    setCount(newTime)
  }
 
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto flex md:flex-col  lg:flex-row gap-5 ">
        <Blogs handleClick={handleClick} handleBtnClick={handleBtnClick}></Blogs>
        <Bookmarks bookmarks={bookmarks} count = {count}></Bookmarks>
      </div>
    </>
  );
}

export default App
