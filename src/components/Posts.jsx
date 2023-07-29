import Post from "./Post";
import munene from "../assets/images/munene.png";
import pol from "../assets/images/pol.jpg";
import jane from "../assets/images/jane.jpg";
import john from "../assets/images/john.jpg";

function Posts() {
  return (
    <div>
      <div className="container mx-auto my-20">
        <h2 className="text-center my-3 text-2xl font-bold capitalize">SCHOLARSHIP-posts</h2>
        <div className="flex gap-12 justify-between items-center">
          <Post icon={munene} category="Robert Munene" type="fulltimescholarship" />
          <Post icon={pol} category="Duncan Lanogwa" type="fulltimescholarship" />
          <Post icon={jane} category="Joyce Mideva" type="fulltimescholarship"/>
          <Post icon={john} category="Edwin Eshiwani" type="fulltimescholarship"/>
        </div>
      </div>
    </div>
  );
}
export default Posts;
