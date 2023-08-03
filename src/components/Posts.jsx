import Post from "./Post";
import munene from "../assets/images/munene.png";
import { useContext, useState } from "react";
import { StateContext } from "../context/State";

function Posts() {
  const { scholarships,setScholarships}=useContext(StateContext);
  return (
    <div>
          {console.log(scholarships&&scholarships)}
      <div className="container mx-auto my-20">
        <h2 className="text-center my-3 text-2xl text-[#34BAED] font-bold capitalize">
          FEATURED-POSTS
        </h2>
        <div className="flex gap-12 justify-between items-center">
          {scholarships.splice(0,4).map((item) => {
            return (
              <Post
                icon={item.sponsorImage}
                category={item.select}
                type={item.organisationName}
              />
            );
          })}

          
        </div>
      </div>
    </div>
  );
}
export default Posts;
