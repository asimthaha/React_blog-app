import React, { useState } from "react";
import BlogNavbar from "./BlogNavbar";
import axios from "axios";

const BlogPost = () => {
  const [inputField, changeInputField] = useState({
    userid: sessionStorage.getItem("userid"),
    title: "",
    post: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/add/", inputField)
      .then((response) => {
        alert(response.data.status);
      });
  };

  return (
    <div>
      <BlogNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={inputField.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  post
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="post"
                  value={inputField.post}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  onClick={readValue}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
