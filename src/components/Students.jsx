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
            <div className="border-2 border-gray-200 mx-5 shadow-2xl">
              <div className="h-[300px] w-[300px]  bg-[#3871C1] relative ">
                <img
                  className="object-contain h-[100%] w-[100%] "
                  src={`/src/assets/images/${item.studentImage}`}
                />
                
              </div>
              <div className=" flex justify-between items-center">
                <div className="text-center mx-auto">
                  <p className="text-[#3871C1]">{item.studentName}</p>
                  <p>{item.studentDescription}</p>
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
