import { BsFillCheckSquareFill } from "react-icons/bs";
import { useState } from "react";

import { app } from "../firebase";
import {
  getFirestore,
  // doc,
  // setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
function AddStudent() {
  const [formField, setFormField] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const db = getFirestore(app);
  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };
  async function handleAdd(e) {
    e.preventDefault();
    const addErrors = {};
    (formField.uploadStudentImage === undefined ||
      formField.uploadStudentImage === "") &&
      (addErrors.uploadStudentImage =
        "Please enter your uploaded student image");
    (formField.firstName === undefined || formField.firstName === "") &&
      (addErrors.firstName = "Please enter your first Name");
    (formField.lastName === undefined || formField.lastName === "") &&
      (addErrors.lastName = "Please enter your last Name");
    (formField.classOfStudent === undefined ||
      formField.classOfStudent === "") &&
      (addErrors.classOfStudent = "Please enter your class");
    (formField.select === undefined || formField.select === "") &&
      (addErrors.select = "Please enter your enter your selected category");
    (formField.nameOfInstitution === undefined ||
      formField.nameOfInstitution === "") &&
      (addErrors.nameOfInstitution = "Please enter your institutions name");
    (formField.DetailedPersonDescription === undefined ||
      formField.DetailedPersonDescription === "") &&
      (addErrors.DetailedPersonDescription =
        "Please enter your Detailed Person Description");

    setFormErrors(addErrors);

    console.log(addErrors);
    if (Object.keys(addErrors).length === 0) {
      setSuccess(true);

      await addDoc(collection(db, "scholarships"), formField);

      // await setDoc(doc(db, "scholarships"), formField)
      // console.log(formField);
    }
  }

  return (
    <div className="    h-[fit-content]  bg-[#3871C1]  ">
      <h2 className="font-bold text-[#fff] text-3xl text-center">
        ADD STUDENT CREDENTIALS
      </h2>
      <div className=" h-[fit-content] text-center  mx-auto flex flex-col w-[70%] items-center ">
        {/* {formErrors.uploadStudentImage && (
          <p className="text-red-500">{formErrors.uploadStudentImage}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="file" name="uploadStudentImage"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Student profile" /> */}

        {formErrors.firstName && (
          <p className="text-red-500">{formErrors.firstName}</p>
        )}
        <p>Whats Your Name</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="firstName"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="First Name"
        />
        {/* {formErrors.lastName && (
          <p className="text-red-500">{formErrors.lastName}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text"  name="lastName"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Last name" /> */}
        <p>Whats Your Gender</p>
        <div>
          <label>Gender:male</label>
          <input type="radio" name="gender" />
          <label>female</label>
          <input name="gender" type="radio" />
        </div>
        {formErrors.classOfStudent && (
          <p className="text-red-500">{formErrors.classOfStudent}</p>
        )}

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="classOfStudent"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Class of Student"
        />
        {formErrors.select && (
          <p className="text-red-500">{formErrors.select}</p>
        )}
        <p>What is your level of education</p>
        <select
          onChange={(e) => handleChange(e)}
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          name="select"
          id=""
        >
          <option value="disabled" selected>
            Select Category
          </option>
          <option value="primarySchool">Primary School</option>
          <option value="highSchool">High School</option>
          <option value="universityCollege">University/College</option>
        </select>
        {formErrors.nameOfInstitution && (
          <p className="text-red-500">{formErrors.nameOfInstitution}</p>
        )}
        <p>
          Whats the name of the institution you study in or want to enrol in{" "}
        </p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
          name="nameOfInstitution"
          placeholder="Name of institution"
        />
        <p>Where did you hear about this schorlarship site</p>
        <select
          onChange={(e) => handleChange(e)}
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          name="select"
          id=""
        >
          <option value="disabled" selected>
            Select Category
          </option>
          <option value="primarySchool">Friend</option>
          <option value="highSchool">Newspaper</option>
          <option value="universityCollege">social media platforms</option>
          <option value="universityCollege">social media platforms</option>
          <option value="universityCollege">social media platforms</option>
        </select>
        <p>What your Goal in life</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="classOfStudent"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Goal in life"
        />
        <p>Why did You Decide to apply scholarship using the site</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="classOfStudent"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Reason for application"
        />
        <p>Why do you deserve this scholarship?</p>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="classOfStudent"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Reason for application"
        />

        {success && (
          <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
            <BsFillCheckSquareFill /> Form has been submitted successfully
          </p>
        )}
        <button
          onClick={(e) => handleAdd(e)}
          className=" sm:px-6  py-4 px-12 bg-[#fff]   rounded-full font-bold text-[#000] text-lg w-[30%]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default AddStudent;
