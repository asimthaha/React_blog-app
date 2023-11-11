import React, { useEffect, useState } from "react";
import BlogNavbar from "./BlogNavbar";
import axios from "axios";

const BlogView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BlogNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card text-center">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                      <div class="card-header">{value.title}</div>
                      <div class="card-body">
                        <h5 class="card-title">{value.UserId}</h5>
                        <p class="card-text">{value.body}</p>
                      </div>
                      <div class="card-footer text-muted">{value.id}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
