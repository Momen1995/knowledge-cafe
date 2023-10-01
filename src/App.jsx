import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Header/Header"

function App() {

  const [bookmarks,setBookmarks] = useState([])

  const handleClick = blog =>{
     const newBookmarks = [...bookmarks,blog];
     setBookmarks(newBookmarks)
    //console.log(blog)
   
  }
 
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto flex gap-5">
        <Blogs handleClick={handleClick}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
