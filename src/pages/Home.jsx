
import Posts from "../components/Posts";
import { collection, query, where, getDocs } from "firebase/firestore";

import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Student from "../components/Student";
import Footer from "../components/Footer";
import Partnership from "../components/Partnership";
import { useEffect,useContext } from "react";
import { StateContext } from "../context/State";
import { db } from "../firebase";
 function Home() {
  const { scholarships, setScholarships } = useContext(StateContext);

  useEffect(() => {
    (async function () {
      const q = query(collection(db, "scholarships"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc)
        setScholarships(prev=>[...prev,doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  return (
    <div>
      {console.log(scholarships && scholarships)}
      <Nav />
      <Hero />
      <Posts />
      <Student />
      <Partnership />
      <Footer />
      <Student/>
      <Partnership/>
      <Footer/>
    </div>
  );
}
 
export default Home;