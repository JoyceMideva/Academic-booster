import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo1 from "../assets/images/logo1.png";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/State";
function Nav() {
  // const {islogin} = useState(StateContext);
  // const [login, setLogin]=islogin
  const { login, setLogin } = useContext(StateContext);
  const navigate=useNavigate()
const handleLogout=()=>{
  localStorage.removeItem("user")
  navigate("/")
  location.reload()
}
  useEffect(() => {
    let userData = localStorage.getItem("user");
    if (userData) {
      setLogin(true);
    }
  }, []);

  return (
    <div className="container mx-auto  flex justify-between items-center capitalize">
      <div className="">
        <ul className=" flex justify-between gap-10 items-center cursor-pointer   text-lg py-4">
          <Link to="/">
            <li>
              <img className="w-40" src={logo1} />
            </li>
          </Link>
          <Link to="/">
            <li className="hidden md:block">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="hidden md:block">About us</li>
          </Link>
         
        </ul>
      </div>
      <div>
        <ul className="flex justify-between cursor-pointer gap-10 items-center r  text-lg py-4">
          
          {login ? (
            <>
            <Link to="/post">
            <li>
            <button className="border-2 text-[#3871c1] border-black  py-2 px-6  rounded-full">
              post Scholarship
            </button>
          </li>
          </Link>
            <li>
              <button onClick={handleLogout} className="border-2  border-black  py-2 px-6  rounded-full">
                Log out
              </button>
            </li>
            </>
          ) : (
            <>
              <Link to="/signup">
                <li>sign up</li>
              </Link>

              <Link to="/login">
                <li>
                  <button className="border-2  border-black  py-2 px-6  rounded-full">
                    Log in
                  </button>
                </li>
              </Link>
            </>
          )}

          <li className="block md:hidden ">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
