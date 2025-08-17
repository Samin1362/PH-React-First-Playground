import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    console.log("Bookmark adding soon")
  };

  return (
    <>
      <Header></Header>
      <div className="divider"></div>
      <div className="max-w-[1280px] mx-auto flex gap-6">
        <Blogs handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
