import mission from "../assets/images/mission.jpeg";
import vision from "../assets/images/vision.jpeg";
function Aboutus() {
  return (
    <div>
      <div className="flex items-center flex-col  justify-center h-[80vh]  bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/hero.jpg')]">
        <h1 className="text-[#00ADEE] py-3 font-bold text-6xl">ABOUT US</h1>
        <h2 className="font-bold text-5xl my-6 text-[#00ADEE]">
          An investment in knowledge, pays the best interest
        </h2>
      </div>

      <div className=" my-7">
        <p className=" container mx-auto p-2 text-2xl">
          Welcome to Education For All website. We are a dedicated platform
          committed to empowering students and fostering academic excellence
          through our diverse scholarship programs.We make sure that studends
          who are not capable to cater for their education,are provided with
          financial assistance and educational opportunities, enabling them to
          pursue their dreams and reach their full potential.We believe that,
          education is the most powerful weapon which you can use to change the
          world.And that the whole purpose of education is to turn mirrors into
          windows.
        </p>
      </div>
      <div className="flex container mx-auto my-5">
        <div className="flex-1">
          <img src={mission} width={800} />
        </div>
        <div className="flex-1 bg-[#00ADEE] w-[10%]">
          <h1 className="p-6 text-4xl text-white">MISSION</h1>
          <p className="p-6 text-2xl">
            Our mission is to create a seamless platform that connects students
            with scholarship opportunities tailored to their individual needs
            and ambitions.We are committed to transparency, fairness, and
            integrity, ensuring that every scholarship recipient is chosen based
            on merit, dedication, and potential for future contributions to
            their respective fields.
          </p>
        </div>
      </div>
      <div className="flex container mx-auto my-5">
        <div className="flex-1 bg-[#00ADEE]">
          <h1 className="p-6 text-4xl text-white">VISION</h1>
          <p className="p-6 text-2xl">
            Our vision is a world where every aspiring student has equal access
            to educational opportunities and financial support, empowering them
            to become the leaders and change-makers of tomorrow. We envision a
            future where talented individuals are not held back by financial
            barriers and where their potential is nurtured, irrespective of
            their background or circumstances.
          </p>
        </div>
        <div className="flex-1">
          <img src={vision} width={800} />
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
