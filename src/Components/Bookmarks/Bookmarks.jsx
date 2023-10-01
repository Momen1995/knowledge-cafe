import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,count}) => {
  return (
    <div className="bg-gray-100 p-4 w-full lg:w-3/12">
      <h3 className="bg-[#fff] p-2 mt-4  text-[17px] font-bold text-[black] mb-5 ">
        Spent time on read : {count}
      </h3>
      <h3 className="text-[18px] font-bold">Bookmark : {Bookmarks.length}</h3>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;