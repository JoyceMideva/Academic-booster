import { useEffect, useContext } from "react";
import { StateContext } from "../context/State";
import { db } from "../firebase";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { collection, query, where, getDocs } from "firebase/firestore";
function View() {
  const { students, setStudents } = useContext(StateContext);
  useEffect(() => {
    (async function () {
      const q = query(collection(db, "students"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        setStudents((prev) => [...prev, doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  return (
    <div className="h-[100vh] flex flex-col">
      <Nav className="flex-1" />
      <main className="flex-1">
        <h1 className="text-[#3871C1] text-center text-3xl">View all Application</h1>
        
      </main>
      <Footer className="flex-1" />
    </div>
  );
}
export default View;
