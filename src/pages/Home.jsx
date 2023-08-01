import Posts from "../components/Posts";

import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Student from "../components/Student";
import Footer from "../components/Footer";
import Partnership from "../components/Partnership";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Posts />
      <Student/>
      <Partnership/>
      <Footer/>
    </div>
  );
}
export default Home;
