import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import logo from "../assets/images/logo.png";
function Nav() {
  return (
    <div  className="container mx-auto  flex justify-between items-center capitalize">
      <div className="">
        <ul className=" flex justify-between gap-10 items-center cursor-pointer  text-lg py-4">
        <li><img className="w-40" src={logo} /></li>

         <li className="hidden md:block">Home</li>

 
          <select className="hidden md:block outline-none ">
            <option value="ADD" disabled>ADD</option>
            <option value="">SCHOLARSHIP_POST</option>
            <option value="">ADD-STUDENT</option>
          </select>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between cursor-pointer gap-10 items-center  text-lg py-4">
        <li>sign up</li>

        <li>
            <button className="border-2  border-black  py-2 px-6  rounded-full">
              Log in
            </button>
          </li>

          <li className="block md:hidden ">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
