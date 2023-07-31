import signup from "../assets/images/signup.webp";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import google from "../assets/images/google.png";

function Sign() {
  return (
    
      <div className="container mx-auto  h-[100vh] ">
        <div className="flex ">
          <div className="flex-1">
            <img src={signup} />
          </div>
          <div className="justify-center flex-1 bg-[#3871c1]">
          <h1 className="text-4xl font-bold text-center text-white my-3">
            Create An Account
          </h1>
          <div className=" flex w-[100%] gap-10">
            <div>
         
              <input
                type="text"
                placeholder="First Name"
                className="w-[90%] mx-6 outline-none rounded-md border-2 p-5 my-5"
                name="firstName"
              />
            </div>
            <div className=" ">
              
              <input
                type="text"
                placeholder="Last Name"
                className="w-[100%] outline-none rounded-md border-2 p-5 my-5"
                name="lastName"
              />
            </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default Sign;
