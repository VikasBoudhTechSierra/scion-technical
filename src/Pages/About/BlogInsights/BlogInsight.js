import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { blogContent, blogTabs } from "./BlogInsightData";
import "./BlogInsight.css";

const BlogInsight = () => {
  const [pages, setPages] = useState(1);
  const totoalPages = blogContent.length / 10;

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totoalPages &&
      selectedPage !== pages
    ) {
      setPages(selectedPage);
    }
  };

  return (
    <div className="blogInsight">
      <div className="header-container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
      <div className="blog-content">
        <div className="wrapper">
          <ul className="blog-tabs">
            {blogTabs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="subHeader">
        <div className="wrapper">
          <h3>INFORMATION TECHNOLOGY BLOG</h3>
          <p>
            Are you looking for resources for your technical job search, hiring
            new employees, or workplace trends and tips? We've got all of this
            and more on the blog!
          </p>
        </div>
      </div>
      <div className="blog-image-container">
        <div className="wrapper">
          <ul>
            {blogContent.slice(pages * 10 - 10, pages * 10).map((item) => (
              <li key={item.id}>
                <img src={item.imgSource} alt={item.imgSource} />
                <h3>{item.content}</h3>
              </li>
            ))}
          </ul>
          {blogContent.length > 0 && (
            <div className="pagination">
              <span onClick={() => selectPageHandler(pages - 1)}>◀️</span>
              {[...Array(totoalPages)].map((_, i) => {
                return (
                  <span
                    onClick={() => selectPageHandler(i + 1)}
                    key={i}
                    className={pages === i + 1 ? "pagination_selected" : ""}
                  >
                    {i + 1}
                  </span>
                );
              })}
              <span onClick={() => selectPageHandler(pages + 1)}>▶️</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogInsight;
