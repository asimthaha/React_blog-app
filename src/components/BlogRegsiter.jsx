import React from "react";
import { Link } from "react-router-dom";

const BlogRegsiter = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  email
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Gender
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  DOB
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Age
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input type="passwrod" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link to="/">Back To login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRegsiter;
