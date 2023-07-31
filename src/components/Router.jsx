import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../pages/Add";
import Home from "../pages/Home";
import Post from "../pages/Post";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<About />}/> */}
        <Route path="/add" element={<Add />} />
        {/* <Route path="/signup" element={<Signup />}/> */}
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
