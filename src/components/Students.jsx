import { studentPortal } from "../data";
function Students() {
  return (
    <div className="container mx-auto flex  justify-between items-center  my-2  gap-10">
      {studentPortal.map((item) => {
        if (item.featured) {
          return (
            <div className="border-2 px-5   border-gray-200 mx-5 shadow-2xl">
              <div className="w-[300px]  h-[300px] relative ">
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
    </div>
  );
}
export default Students;
