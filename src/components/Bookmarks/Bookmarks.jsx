import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ( {bookmarks} ) => {



  return (
    <div className="w-1/3 bg-[#1111110d] px-8 py-8">
      <h1 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;