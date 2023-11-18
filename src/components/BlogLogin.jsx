import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogLogin = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/loginCheck/", inputField)
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          const getId = response.data[0].id;
          const getName = response.data[0].name;

          sessionStorage.setItem("id", getId);
          sessionStorage.setItem("name", getName);
          navigate("/add");
        } else {
          alert("invalid data");
        }
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center">LOGIN</h1>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col card shadow">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={inputField.email}
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
                  onClick={readVal}
                  type="submit"
                  className="btn btn-success"
                >
                  Login
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link to="/register">New Users Click Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLogin;
