import Post from "./Post";
import munene from "../assets/images/munene.png";

function Posts() {
  return (
    <div>
      <div className="container mx-auto my-20">
        <h2 className="text-center my-3 text-2xl font-bold capitalize">SCHOLARSHIP-posts</h2>
        <div className="flex gap-12 justify-between items-center">
          <Post icon={munene} category="Robert Munene" type="fulltimescholarship" requirements=""/>
          <Post icon={munene} category="Duncan Lanogwa" type="fulltimescholarship" requirements="" />
          <Post icon={munene} category="Joyce Mideva" type="fulltimescholarship" requirements=""/>
          <Post icon={munene} category="Edwin Eshiwani" type="fulltimescholarship" requirements=""/>
        </div>
      </div>
    </div>
  );
}
export default Posts;
