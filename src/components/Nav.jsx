import logo from "../assets/images/logo.png";
function Nav() {
  return (
    <div className="container mx-auto  flex justify-between items-center capitalize">
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <li><img className="w-40" src={logo} /></li>

          <li className="hidden md:block">Home</li>

          <li className="hidden md:block ">About us</li>

          <li className="hidden md:block ">ADD</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <li>sign up</li>

          <li>
            <button className="border-2  border-black  py-2 px-6  rounded-full">
              Log in
            </button>
          </li>

          {/* <li className="block md:hidden ">
            <FaBars size={25} />
          </li> */}
        </ul>
      </div>
    </div>
  );
}
export default Nav;
