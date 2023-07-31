import { useState } from "react";
import {BsFillCheckSquareFill} from "react-icons/bs"

function AddStudent() {

    const [formField, setFormField] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
      };
      function handleAdd(e) {
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
        (formField.classOfStudent === undefined || formField.classOfStudent === "") &&
          (addErrors.classOfStudent = "Please enter your class");
        (formField.select === undefined || formField.select === "") &&
          (addErrors.select = "Please enter your enter your selected category");
        (formField.nameOfInstitution === undefined ||
          formField.nameOfInstitution === "") &&
          (addErrors.nameOfInstitution =
            "Please enter your institutions name");
        setFormErrors(addErrors);
        setSuccess(true)
        methods.reset()
        console.log(addErrors);
      }
    
    return(
        <div className="    h-[100vh]  bg-cover bg-no-repeat bg-[url('assets/images/hero4.jpg')]">
            <h2 className="font-bold text-[#34BAED] text-3xl text-center">ADD STUDENT CREDENTIALS</h2>
            <div className=" h-[fit-content] text-center  mx-auto flex flex-col w-[70%] items-center " >
              
            {formErrors.uploadStudentImage && (
          <p className="text-red-500">{formErrors.uploadStudentImage}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="file" name="uploadStudentImage"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Student profile" />
<div className="gap-7">
{formErrors.firstName && (
          <p className="text-red-500">{formErrors.firstName}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text" name="firstName"   className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="First Name" />
                {formErrors.lastName && (
          <p className="text-red-500">{formErrors.lastName}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text"  name="lastName"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Last name" />
                </div>
                {formErrors.classOfStudent && (
          <p className="text-red-500">{formErrors.classOfStudent}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text" name="classOfStudent"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Class of Student" />
                <select onChange={(e) => handleChange(e)}  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" name="select" id="">
                    <option value="primarySchool">Primary School</option>
                    <option value="highSchool">High School</option>
                    <option value="universityCollege">University/College</option>
                </select>
                {formErrors.nameOfInstitution && (
          <p className="text-red-500">{formErrors.nameOfInstitution}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text" className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]" name="nameOfInstitution" placeholder="Name of institution" />
                {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}   
<button  onClick={(e) => handleAdd(e)}className=" sm:px-6  py-4 px-12  bg-[#3871C1] rounded-full font-bold text-[#fff] text-lg w-[30%]">Add To Page</button>
            </div>
        </div>
    )
}
export default AddStudent