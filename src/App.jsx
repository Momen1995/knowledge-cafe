import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Header/Header"

function App() {
 
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto flex gap-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App
