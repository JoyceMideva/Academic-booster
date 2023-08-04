import { createContext, useContext, useState } from "react";

export const StateContext = createContext();
function State({ children }) {
  const [scholarships, setScholarships] = useState([]);
  const [students, setStudents] = useState({});
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState("");
  return (
    <StateContext.Provider
      value={{
        scholarships,
        setScholarships,
        students,
        setStudents,
        login,
        setLogin,
        currentUser,
        setCurrentUser,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export default State;
