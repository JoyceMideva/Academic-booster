import twitter from "../assets/images/twitter.jpg";
import instagram from "../assets/images/instagram.jpg";
import facebook from "../assets/images/facebook.jpg";
import call from "../assets/images/call.png";
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import mpesa from "../assets/images/M-PESA.webp"
function Footer() {
  return (
    <div className="  text-lg bg-slate-300 ">
      <div className="flex flex-col ">
      <h1 className="font-bold text-2xl pt-2 text-[#34BAED] text-center">
        Donate & Keep The site Running
      </h1>
      <img className="mx-auto" src={mpesa} width={100}/>
      <p className="text-center">0790433762</p>
      </div>
      <h4 className="text-center">Contact us</h4>
      <div className="flex items-center justify-center gap-3 flex-col ">
        <div className="flex gap-3 pt-2 items-center justify-center">
      <FaPhoneAlt/>
      <p>+254796388487</p>
      </div>
      <div className="flex gap-3 items-center justify-center">
      <FaEnvelope/>
      <p> education@gmail.com</p>
      </div>
      </div>
      <div className="flex items-center py-3 gap-5 justify-center">
        <img src={twitter} width={20} alt="" srcset="" />
        <img src={instagram} width={20} alt="" srcset="" />
        <img src={facebook} width={20} alt="" srcset="" />
        <img src={call} width={20} alt="" srcset="" />
      </div>
    </div>
  );
}
export default Footer;
