import "./App.css";
import BlogLogin from "./components/BlogLogin";
import BlogRegsiter from "./components/BlogRegsiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import BlogSearch from "./components/BlogSearch";
import BlogDelete from "./components/BlogDelete";
import BlogView from "./components/BlogView";
import BlogMyPost from "./components/BlogMyPost";
import BlogMyProfile from "./components/BlogMyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BlogLogin />}></Route>
        <Route path="register" element={<BlogRegsiter />}></Route>
        <Route path="add" element={<BlogPost />}></Route>
        <Route path="search" element={<BlogSearch />}></Route>
        <Route path="delete" element={<BlogDelete />}></Route>
        <Route path="view" element={<BlogView />}></Route>
        <Route path="viewMy" element={<BlogMyPost />}></Route>
        <Route path="viewMyProfile" element={<BlogMyProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
