import { createContext, useContext, useState } from "react";

export const StateContext = createContext();
function State({ children }) {

  const [scholarships,setScholarships] = useState([]);
  const [currentUser, setCurrentUser]=useState({});
  const [user, setUser] = useState("");
  return (
    <StateContext.Provider value={{ scholarships, setScholarships, currentUser, setCurrentUser, user, setUser }}>

  const [scholarships, setScholarships] = useState([]);
  const [students, setStudents] = useState([]);
  const [login, setLogin] = useState(false);
  return (
    // <StateContext.Provider value={{ scholarships:[scholarships, setScholarships],students:[students,setStudents],islogin:[login,setLogin] }}>

    <StateContext.Provider
      value={{
        scholarships,
        setScholarships,
        students,
        setStudents,
        login,
        setLogin,
      }}
    >

      {children}
    </StateContext.Provider>
  );
}
export default State;
