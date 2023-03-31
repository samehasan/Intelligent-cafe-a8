import React, { useEffect, useState } from "react";
import Allblog from "../Allblog/Allblog";
import "./Blog.css";

const Blog = () => {
  const [allblogs, setallblogs] = useState([]);
  const [bookmarklist, setBookmarklist] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setallblogs(data));
  }, []);

  const Handleaddblog = (allblog) => {
    const newBookmarklist = [...bookmarklist, allblog];
    setBookmarklist(newBookmarklist);
  };

  const handlemarkasRead = (allblog) => {
    setTotal(total + allblog.readTime);
  };

  return (
    <div className="blog-container">
      <div className="allblog-container">
        {allblogs.map((allblog) => (
          <Allblog
            key={allblog.id}
            allblog={allblog}
            Handleaddblog={Handleaddblog}
            handlemarkasRead={handlemarkasRead}
          />
        ))}
      </div>

      <div className="Bookmarks-container">
        <h2 className="time">Spent time on read: {total} minutes</h2>
        <h2>Bookmarked Blogs: {bookmarklist.length}</h2>
        <ul>
          {bookmarklist.map((bookmark) => (
            <li key={bookmark.id}>{bookmark.blogTitle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
