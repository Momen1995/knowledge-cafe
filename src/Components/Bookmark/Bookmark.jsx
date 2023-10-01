
const Bookmark = ({bookmark}) => {
  const {title} = bookmark
  return (
    <div>
      <h3 className="bg-[#fff] p-4 mt-5 text-[17px] font-semibold">{title}</h3>
    </div>
  );
};

export default Bookmark;