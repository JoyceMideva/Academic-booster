import google from "../assets/images/google.png";
import signup from "../assets/images/login.jpeg";
import { useState } from "react";


function Sign() {
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  function handleSignUp(e) {
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your last name");
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
    <div className="container mx-auto   ">
      <div className="flex h-[91vh]">
        <div className="flex-1 ">
          <img src={signup} />
        </div>
        <div className="justify-center flex-1 bg-[#3871c1]">
          <h1 className="text-4xl font-bold text-center text-white my-3">
            Create An Account
          </h1>
          <div className=" flex w-[70%] gap-10">
            <div>
              {formErrors.firstName && (
                <p className="text-red-500 mx-4">{formErrors.firstName}</p>
              )}

              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="First Name"
                className="w-[90%] mx-6 outline-none rounded-md border-2 p-3 my-5"
                name="firstName"
              />
            </div>
            <div className=" ">
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Last Name"
                className="w-[100%] outline-none rounded-md border-2 p-3 my-5"
                name="lastName"
              />
            </div>
          </div>
          <div className="mx-5 justify-center">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Email Address"
              className="outline-none rounded-md border-2 p-3 w-[70%] my-3"
              name="email"
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}

            <input
              onChange={(e) => handleChange(e)}
              className="flex-1 outline-none my-3 p-3 px-2 border-2 border-grey-400 rounded-md w-[70%]"
              type="password"
              placeholder="Password"
              name="password"
            />
           
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Confirm Password"
              className="outline-none rounded-md border-2 p-3 w-[70%] my-3"
              name="confirmPassword"
            />
          </div>
          <button
          onClick={(e) => handleSignUp(e)}
            className="bg-white my-1 text-lg font-bold text-[#3871c1] py-4 px-2 w-[60%] rounded-full mx-16"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex gap-4 mx-3">
            <div className="w-[35%] border-b-2 border-gray-300"></div>
            <p className="text-2xl my-1 text-white">OR</p>
            <div className="w-[35%] border-b-2 border-gray-300"></div>
          </div>
          <div className="flex gap-6 my-7 w-[80%] justify-center shadow-md p-3 mx-3 rounded-full">
            <img src={google} width={50} />
            <button className=" text-2xl font-bold text-white my-4">
              Sign In With Google
            </button>
          </div>
          <div className="flex justify-center w-[70%] gap-3">
            <p className="text-2xl">Already Have An Account?</p>
            <button className="text-white text-2xl">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sign;
