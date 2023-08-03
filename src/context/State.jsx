import { createContext, useContext, useState } from "react";

export const StateContext = createContext();
function State({ children }) {
  const [scholarships,setScholarships] = useState([]);
  const [students,setStudents] = useState([]);
  return (
    <StateContext.Provider value={{ scholarships, setScholarships }}>
      {children}
    </StateContext.Provider>
  );
}
export default State;