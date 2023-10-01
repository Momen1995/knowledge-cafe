import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="bg-gray-100 p-4 w-full lg:w-3/12">
      <h3>Bookmark : {Bookmarks.length}</h3>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;