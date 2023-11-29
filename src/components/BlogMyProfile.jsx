import React, { useEffect, useState } from "react";
import BlogNavbar from "./BlogNavbar";
import axios from "axios";

const BlogMyProfile = () => {
  const [inputField, changeInputField] = useState({
    id: sessionStorage.getItem("userid"),
  });

  const [result, changeResult] = useState([]);

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/view/", inputField).then((response) => {
      changeResult(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    readValue();
  });

  return (
    <div>
      <BlogNavbar />
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <div className="row g-3">
              {result.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card text-center">
                      <img src={value.image} alt="" />
                      <div class="card-header">{value.name}</div>
                      <div class="card-body">
                        <h5 class="card-title">{value.email}</h5>
                      </div>
                      <div class="card-footer text-muted">{value.password}</div>
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

export default BlogMyProfile;
