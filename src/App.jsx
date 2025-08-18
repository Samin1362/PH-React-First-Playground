import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import TimeSpent from "./components/TimeSpent/TimeSpent";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0);

  const handleAddToBookmarks = (blog) => {
    if (!bookmarks.includes(blog)) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };

  const handleMarkAsRead = (blog) => {

    if (bookmarks.includes(blog)){
      setBookmarks(prev => prev.filter(b => b.id != blog.id));
    }

    const newtimeSpent = timeSpent + blog.reading_time;
    setTimeSpent(newtimeSpent);
  }

  return (
    <>
      <Header></Header>
      <div className="divider"></div>
      <div className="max-w-[1280px] mx-auto flex gap-6">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <div className="w-1/3">
          <TimeSpent timeSpent={timeSpent}></TimeSpent>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
