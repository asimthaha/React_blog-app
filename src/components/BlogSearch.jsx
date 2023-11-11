import React from "react";
import BlogNavbar from "./BlogNavbar";

const BlogSearch = () => {
  return (
    <div>
      <BlogNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Search Post
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <button className="btn btn-success">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
