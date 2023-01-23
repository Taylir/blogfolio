import React from "react";
import ListItem from "../../components/list item/ListItem";
import "./blogAssets/BlogPractice.css";
import datajs from "../../blogData-js";
import dataCss from "../../blogData-css";

const BlogPractice = () => {

  return (
    <div className="blog-practice">
      <div className="container">
        <div className="blog-practice__wrapper">
          <div className="blog-practice__title">
            <h2>
              Here I will be practicing different elements of the coding world
              starting with CSS and JS on a daily basis. I feel these are strong
              building blocks to help me grow. More will be added as I travel
              down the coding world. Planning on doing SQL, Next.js, and AWS to
              name a few.
            </h2>
          </div>
          <div className="blog-practice__content">
            <div className="blog__css-half">
              <h3>CSS</h3>
              <ul className="blog__css-list">
                {dataCss.map(item => (
                    <ListItem 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    body={item.body}
                    />

                ))}
              </ul>
            </div>
            <div className="blog__js-half">
              <h3>JS</h3>
              <ul className="blog__js-list">
                {datajs.map(item => (
                    <ListItem
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     body={item.body}
                     />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPractice;
