import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import logo from "../assets/images/logo.png";
function Nav() {
  return (
    <div  className="container mx-auto  flex justify-between items-center capitalize">
      <div className="">
        <ul className=" flex justify-between gap-10 items-center cursor-pointer  text-lg py-4">
     <Link to="/">   <li><img className="w-40" src={logo} /></li></Link>

      <Link to="/">   <li className="hidden md:block">Home</li></Link>

         <Link to="/aboutus"><li className="hidden md:block">About us</li></Link>
        
      <Link to="/post">      <option value="">SCHOLARSHIP_POST</option></Link>
      {/* <Link to="/add">  <option value="">ADD-STUDENT</option></Link> */}
        </ul>
      </div>
      <div>
        <ul className="flex justify-between cursor-pointer gap-10 items-center  text-lg py-4">
       <Link to="/signup"> <li>sign up</li></Link>

       <Link to="/login"><li>
            <button className="border-2  border-black  py-2 px-6  rounded-full">
              Log in
            </button>
          </li></Link>

          <li className="block md:hidden ">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
