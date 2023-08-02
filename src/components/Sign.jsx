import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import signup from "../assets/images/login.jpeg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sign() {
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const auth = getAuth();

  const [formErrors, setFormErrors] = useState({});
  const [signUpError, setSignUpError] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const emailRef = useRef();

  async function handleSignUp(e) {
    e.preventDefault();

    const errors = {};

    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your last name");
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your email");

    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your password");
    (formData.category === undefined || formData.category === "") &&
      (errors.category = "Please select category");
    // (formData.confirm === undefined || formData.confirm === "") &&
    // (errors.confirm = "Please select category");
    setFormErrors(errors);

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          category: "",
        });
        setSignUpError("");
        navigate("/login");
      })
      .catch((error) => {
        const errorMsg = error.message.substring(22, error.message.length - 2);
        setSignUpError(errorMsg);
      });
    await addDoc(collection(db, "users"), formData);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container mx-auto   ">
      <div className="flex h-[86vh]">
        <div className="flex-1 ">
          <img src={signup} />
        </div>
        <div className=" flex-1 bg-[#3871c1]">
          <h1 className="text-4xl font-bold text-center text-white my-3">
            Create An Account
          </h1>
          {signUpError !== "" && (
            <p className="text-red-500 capitalize text center">{signUpError}</p>
          )}

<div className=" flex w-[100%] gap-10 justify-center mx-11">
          {formErrors.firstName && (
            <p className="text-red-500 mx-4 text-center text-2xl">
              {formErrors.firstName}
            </p>
          )}
            <div className="flex justify-center">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="First Name"
              className=" outline-none rounded-md border-2 p-3 my-5 flex justify-center w-[50%]"
              name="firstName"
              value={formData.firstName}
            />
          </div>
            {formErrors.lastName && (
              <p className="text-red-500 text-center text-2xl">{formErrors.lastName}</p>
            )}
          <div className=" ">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Last Name"
              className=" outline-none rounded-md border-2 p-4 my-5 w-[50%]"
              name="lastName"
              value={formData.lastName}
            />
          </div>
          </div>
          <div className="mx-5 justify-center">
            {formErrors.email && (
              <p className="text-red-500 text-center text-2xl">{formErrors.email}</p>
            )}
            <div className="flex justify-center">
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Email Address"
                className="outline-none rounded-md border-2 p-4 w-[50%]"
                name="email"
                ref={emailRef}
                value={formData.email}
              />
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-center text-2xl my-2">{formErrors.password}</p>
            )}
            <div className="flex justify-center my-7">
              <input
                onChange={(e) => handleChange(e)}
                className=" outline-none my-3 p-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
              />
            </div>
            {/* {formErrors.confirm && (
              <p className="text-red-500">{formErrors.confirm}</p>
            )}
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Confirm Password"
              className="outline-none rounded-md border-2 p-4 w-[70%] my-5"
              name="confirm"
            /> */}
            {formErrors.category && (
              <p className="text-red-500 text-center text-2xl">{formErrors.category}</p>
            )}
            <div className="flex justify-center my-7">
              <select
                onChange={(e) => handleChange(e)}
                name="category"
                id=""
                className=" p-5 w-[50%] rounded-md outline-none"
                value={formData.category}
              >
                <option className="border-none" value="">
                  Select
                </option>
                <option className="border-none" value="donor">
                  Applicant
                </option>
                <option className="border-none" value="organization">
                  Scholarship organization
                </option>
              </select>
            </div>
            <div className="flex justify-center my-7">
              <button
                onClick={(e) => handleSignUp(e)}
                className="bg-white my-2 text-lg font-bold text-[#3871c1] py-4 px-2 w-[50%] rounded-full mx-16"
                type="submit"
              >
                Create Account
              </button>
            </div>

            <div className="flex justify-center w-[70%] gap-3">
              <p className="text-2xl">Already Have An Account?</p>
              <Link to="/login">
                {" "}
                <button className="text-white text-2xl">Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sign;
