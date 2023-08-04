import {  useContext } from "react";
import { StateContext } from "../context/State"
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Post from "./Post"
function View() {
  const { scholarships, setScholarships } = useContext(StateContext);
 
  return (
    <div className="h-[100vh] flex flex-col">
      {console.log(scholarships&&scholarships)}
      <Nav className="flex-1" />
        <h1 className="text-[#3871C1] text-center text-3xl">View all scholarships</h1>
      {/* <main className="flex-1"> */}
      <div className="flex flex-1 gap-12 justify-between items-center">
          {scholarships.map((item) => {
            return (
              <Post
                icon={item.sponsorImage}
                category={item.select}
                type={item.organisationName}
              />
            );
          })}

          
        </div>
      {/* </main> */}
      <Footer className="flex-1" />
    </div>
  );
}
export default View;
