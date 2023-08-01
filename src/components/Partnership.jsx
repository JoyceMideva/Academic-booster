import safaricom from "../assets/images/safaricom.png"
import uncf from "../assets/images/uncf.jpeg"
import  equity from "../assets/images/equity.png"

function Partnership() {
  return (
    <div className=" container mx-auto my-20">
      <h2 className="text-[#34BAED] font-bold text-center text-2xl">Partnerships</h2>
      <p className="text-1xl mx-auto">
        We have partnered with different organistions to make the life of
        chidren and Youths to pursue their education to make thir life more
        dependable to them and the society that will take them after their
        education
      </p>
      <div className="flex items-center justify-center  ">
<img src={safaricom} width={400}  alt="" srcset="" />
<img src={uncf} width={400} alt="" srcset="" />
<img src={equity} width={400} alt="" srcset="" />
{/* <img src={} alt="" srcset="" /> */}

      </div>
    </div>
  );
}
export default Partnership;
