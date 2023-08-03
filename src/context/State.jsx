import { createContext, useContext, useState } from "react";

export const StateContext = createContext();
function State({ children }) {
  const [scholarships,setScholarships] = useState([]);
  const [currentUser, setCurrentUser]=useState({});
  const [user, setUser] = useState("");
  return (
    <StateContext.Provider value={{ scholarships, setScholarships, currentUser, setCurrentUser, user, setUser }}>
      {children}
    </StateContext.Provider>
  );
}
export default State;