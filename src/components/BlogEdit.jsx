import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogEdit = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const [data, setData] = useState({
    userid: sessionStorage.getItem("userid"),
    id: postId,
    title: "",
    post: "",
  });

  const displayValue = () => {
    axios
      .post("http://127.0.0.1:8000/api/displayUpdateMy/", data)
      .then((response) => {
        console.log(response.data);
        updateData(response.data[0].title, "title");
        updateData(response.data[0].post, "post");
      });
  };

  const updateData = (value, name) => {
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  useEffect(() => {
    displayValue();
  }, []);

  const saveData = () => {
    console.log(data);
    axios.put("http://127.0.0.1:8000/api/updateMy/", data).then((response) => {
      alert(response.data.status);
      navigate("/viewMy");
    });
  };

  return (
    <>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              POST ID
            </label>
            <input type="text" value={data.id} className="form-control" />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={(ev) => updateData(ev.target.value, "title")}
              value={data.title}
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Post
            </label>
            <input
              type="text"
              name="post"
              onChange={(ev) => updateData(ev.target.value, "post")}
              value={data.post}
              className="form-control"
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button onClick={saveData} className="btn btn-warning">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogEdit;
