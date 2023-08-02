import twitter from "../assets/images/twitter.jpg";
import instagram from "../assets/images/instagram.jpg";
import facebook from "../assets/images/facebook.jpg";
import call from "../assets/images/call.png";
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="  text-lg bg-slate-300 ">
      <div className="flex flex-col ">
     <Link to="/Donate"> <button className=" sm:px-6 border-2 py-4 px-12 mt-2 bg-[#3871C1] rounded-full font-bold text-[#fff] text-xl w-[15%] flex items-center justify-center mx-auto capitalize">Donate</button></Link>
      <h1 className="font-bold text-2xl text-[#34BAED] text-center">
        Donate & Keep The site Running
      </h1>
      </div>
      <h4 className="text-center">Contact us</h4>
      <div className="flex items-center justify-center gap-3 flex-col ">
        <div className="flex gap-3 items-center justify-center">
      <FaPhoneAlt/>
      <p>+254796388487</p>
      </div>
      <div className="flex gap-3 items-center justify-center">
      <FaEnvelope/>
      <p> education@gmail.com</p>
      </div>
      </div>
      <div className="flex items-center py-3 gap-5 justify-center">
        <img src={twitter} width={50} alt="" srcset="" />
        <img src={instagram} width={50} alt="" srcset="" />
        <img src={facebook} width={50} alt="" srcset="" />
        <img src={call} width={50} alt="" srcset="" />
      </div>
    </div>
  );
}
export default Footer;
