import signup from "../assets/images/bj.jpeg";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import google from "../assets/images/google.png";

function Sign() {
  return (
    
      <div className="container mx-auto   ">
        <div className="flex h-[100vh]">
          <div className="flex-1 ">
            <img src={signup} width={700}/>
          </div>
          <div className="justify-center flex-1 bg-[#3871c1]">
          <h1 className="text-4xl font-bold text-center text-white my-3">
            Create An Account
          </h1>
          <div className=" flex w-[70%] gap-10">
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
      <div className="mx-5 justify-center">
           
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none rounded-md border-2 p-5 w-[70%] my-5"
              name="email"
            />
         
            
              <input
                className="flex-1 outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[70%]"
                type="password"
                placeholder="Password"
                name="password"
              />
             
            

            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none rounded-md border-2 p-5 w-[70%] my-5"
              name="confirmPassword"
            />
          </div>
          <button
            className="bg-white my-5 text-lg font-bold text-[#3871c1] py-4 px-2 w-[60%] rounded-full mx-16"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex gap-4 mx-3">
            <div className="w-[35%] border-b-2 border-gray-300"></div>
            <p className="text-2xl my-1 text-white">OR</p>
            <div className="w-[35%] border-b-2 border-gray-300"></div>
          </div>
          <div className="flex gap-6 my-12 w-[80%] justify-center shadow-md p-3 mx-3 rounded-full">
            <img src={google} width={50} />
            <button className=" text-2xl font-bold text-white my-4">
              Sign In With Google
            </button>
          </div>
          <div className="flex justify-center w-[70%] gap-3">
            <p className="text-2xl">Already Have An Account?</p>
            <button
              className="text-white text-2xl"
            >
              Log In
            </button>
          </div>
       
      </div>
      </div>
    </div>
  );
}
export default Sign;
