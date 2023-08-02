import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../pages/Add";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import About from "../pages/About";
import Donate from "../pages/Donate";
import View from "../pages/View";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/add" element={<Add />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/post" element={<Post />} />
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
