import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import login from "../assets/images/login.jpeg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { StateContext } from "../context/State";

function Details() {
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const auth = getAuth();
  const {login,setLogin}=useState(StateContext)
  const [formErrors, setFormErrors] = useState({});
  const emailRef = useRef();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  function handleLogin(e) {
    e.preventDefault();

    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your password");
    setFormErrors(errors);

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        setFormData({
          email: "",
          password: "",
        });
        setLoginError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMsg = error.message.substring(22, error.message.length - 2);
        setLoginError(errorMsg);
        console.log(error)
      });


      onAuthStateChanged(auth,(user)=>{
        localStorage.setItem("user", JSON.stringify( user))
        console.log(user)
        setLogin(true)

      })

    // console.log(errors);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="container mx-auto flex-1 ">
      <div className="flex ">
      <div className="flex-1 bg-cover bg-no-repeat bg-[url('assets/images/lgn.webp')] ">
          {/* <img src={signup} /> */}
        </div>
        <div className="p-6 justify-center flex-1 bg-[#3871c1]">
          <div className="flex justify-center w-[100%] gap-3 my-6">
            <p className="text-2xl">Dont Have An Account Yet?</p>
            <button className="text-white text-2xl">Sign Up</button>
          </div>
          {loginError !== "" && (
            <p className="text-red-500 capitalize text-2xl text-center">{loginError}</p>
          )}
          <div>
              {formErrors.email && (
                <p className="text-red-500 text-center">{formErrors.email}</p>
              )}
            <div className="my-10 flex justify-center">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Email Address"
                className=" justify-center p-5 w-[50%] outline-none rounded-md border-2"
                name="email"
                ref={emailRef}
                value={formData.email}
              />
            </div>
              {formErrors.password && (
                <p className="text-red-500 text-center">{formErrors.password}</p>
              )}
            <div className=" my-10 flex justify-center">
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Password"
                className="p-5 w-[50%] outline-none rounded-md border-2"
                name="password"
                value={formData.password}
              />
            </div>
            <div className="my-16 flex justify-center">
              <button
                onClick={(e) => handleLogin(e)}
                className=" bg-white my-3 text-lg font-bold text-[#3871c1] py-4 px-2 w-[50%] rounded-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
