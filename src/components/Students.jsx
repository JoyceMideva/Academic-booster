import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { studentPortal } from "../data";
function Students() {
  return (
    <div className="container mx-auto flex  justify-between items-center  my-20  gap-10">
      <SlArrowLeft size={40} className="cursor-pointer text-[#34BAED]" />
      {studentPortal.map((item) => {
        if (item.featured) {
          return (
            <div>
              <div className="h-[300px] w-[300px] bg-[#3871C1] relative ">
                <img
                  className="object-contain h-[100%] w-[100%] "
                  src={`/src/assets/images/${item.studentImage}`}
                />
                <button className="  bg-[#3871C1] py-4 px-12  w-[100%]  rounded-md absolute bottom-0 left-0 text-[#fff]">
                  select
                </button>
              </div>
              <div className=" flex justify-between items-center">
                <div className="text-center mx-auto">
                  <p>{item.studentName}</p>
                  <p>{item.studentClass}</p>
                  <p>{item.studentSchool}</p>
                  <p>{item.studentEducation}</p>
                </div>
              </div>
            </div>
          );
        }
      })}

      <SlArrowRight size={40} className="cursor-pointer text-[#34BAED]" />
    </div>
  );
}
export default Students;
