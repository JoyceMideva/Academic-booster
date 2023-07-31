import google from "../assets/images/google.png";
import login from "../assets/images/login.jpeg";
import { useState } from "react";

function Details() {
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({});

  function handleLogin(e) {
    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your password");
    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="container mx-auto  h-[100vh] ">
      <div className="flex ">
        <div className="flex-1">
          <img src={login} />
        </div>
        <div className="p-6 justify-center flex-1 bg-[#3871c1]">
        <div className="flex gap-6  my-12 w-[70%] justify-center">
            <img src={google} width={50} />
            <h2 className=" text-2xl font-bold text-white my-4">
              Log In With Google
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="w-[35%] border-b-2 border-gray-300"></div>
            <p className="text-2xl my-1">OR</p>
            <div className="w-[35%] border-b-2 border-gray-300"></div>
          </div>
             
          <div className="flex justify-center w-[70%] gap-3 my-6">
            <p className="text-2xl">Dont Have An Account Yet?</p>
            <button className="text-white text-2xl">Sign Up</button>
          </div>
          <div className="">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Email Address"
              className=" justify-center p-5 w-[70%] outline-none rounded-full border-2"
              name="email"
            />
          </div>
          <div className=" my-16">
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Password"
              className="p-5 w-[70%] outline-none rounded-full border-2"
              name="password"
            />
          </div>

          <button
            onClick={(e) => handleLogin(e)}
            className=" bg-white my-5 text-lg font-bold text-[#3871c1] py-4 px-2 w-[60%] rounded-full mx-16"
            type="submit"
          >
            Login
          </button>

      
        </div>
      </div>
    </div>
  );
}
export default Details;
