import React, { useEffect, useState } from "react";
import datajs from "../../blogData-js";
import dataCss from "../../blogData-css";
import { useParams } from "react-router";
import "./blogAssets/BlogPage.css";


const BlogPage = () => {
  const { id } = useParams();

  const [obj, setObj] = useState([]);

  function findBlog() {
    if (id.includes("css")) {
      setObj(dataCss.find((obj) => obj.id === id));
    } else {
      setObj(datajs.find((obj) => obj.id === id));
    }
  }

  useEffect(() => {
    findBlog();
  }, []);
  return (
    <div className="blog-page">
      <div className="row">
        <h1>{obj.title}</h1>
        <ul className="blog__solutions">
          {obj.body}
        </ul>
        <footer className="blog__footer"></footer>
      </div>
    </div>
  );
};

export default BlogPage;
