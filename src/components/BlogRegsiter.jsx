import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogRegsiter = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/add/", inputField).then((response) => {
      alert(response.data.status);
    });
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col card">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={inputField.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={inputField.image}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="passwrod"
                  className="form-control"
                  name="password"
                  value={inputField.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  onClick={readValue}
                  type="submit"
                  className="btn btn-success"
                >
                  Register
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link className="btn btn-success" to="/">
                  Back To login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRegsiter;
