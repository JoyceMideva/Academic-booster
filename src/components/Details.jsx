import google from "../assets/images/google.png";
import login from "../assets/images/login.jpeg"

function Details() {
  return (
    <div className="container mx-auto  h-[100vh] ">
         <div className="flex ">
        <div className="flex-1">
          <img src={login} />
        </div>
        <div className="p-6 justify-center flex-1 bg-[#3871c1]">
      <div className="">
        <input
          type="text"
          placeholder="Email Address"
          className=" justify-center p-5 w-[70%] outline-none rounded-full border-2"
          name="email"
        />
      </div>
      <div className=" my-16">
        <input
          type="password"
          placeholder="Password"
          className="p-5 w-[70%] outline-none rounded-full border-2"
          name="password"
        />
      </div>
      <div>
        <input type="checkbox" />
        <label className="my-6 mx-5">Remember Me</label>
        <button className=" text-white mx-28">Forgot Password?</button>
      </div>

      <button
        className=" bg-white my-5 text-lg font-bold text-[#3871c1] py-4 px-2 w-[60%] rounded-full mx-16"
        type="submit"
      >
        Sign In
      </button>

      <div className="flex gap-4">
        <div className="w-[35%] border-b-2 border-gray-300"></div>
        <p className="text-2xl my-1">OR</p>
        <div className="w-[35%] border-b-2 border-gray-300"></div>
      </div>
      <div className="flex gap-6  my-12 w-[70%] justify-center">
        <img src={google} width={50} />
        <h2 className=" text-2xl font-bold text-white my-4">
          Log In With Google
        </h2>
      </div>
      <div className="flex justify-center w-[70%] gap-3">
        <p className="text-2xl">Dont Have An Account Yet?</p>
        <button className="text-white text-2xl">Sign Up</button>
      </div>
    </div>
    
        
</div>
</div>
  );
}
export default Details;
