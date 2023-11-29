import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogNavbar = () => {
  const navigate = useNavigate();

  if (!sessionStorage.getItem("userid")) {
    navigate("/");
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/add">
            <p>HI</p>
            <p>{sessionStorage.getItem("name")}</p>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/add">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/search">
                  Search
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/delete">
                  Delete
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/view">
                  View All
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/viewMy">
                  My posts
                </Link>
              </li>
            </ul>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/viewMyProfile"
                >
                  View My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BlogNavbar;
