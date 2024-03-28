import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { blogContent, blogTabs } from "./BlogInsightData";
import "./BlogInsight.css";

const BlogInsight = () => {
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
            {blogContent.map((item) => (
              <li key={item.id}>
                <img src={item.imgSource} alt={item.imgSource} />
                <h3>{item.content}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogInsight;
