import { useState } from "react";
import {BsFillCheckSquareFill} from "react-icons/bs"

function AddPost() {

    const [formField, setFormField] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
      };
      function handleAdd(e) {
        e.preventDefault();
        const addErrors = {};
        (formField.uploadSponsorImage === undefined ||
          formField.uploadSponsorImage === "") &&
          (addErrors.uploadSponsorImage =
            "Please enter your uploaded Sponsor image");
        (formField.firstName === undefined || formField.firstName === "") &&
          (addErrors.firstName = "Please enter your first Name");
          (formField.lastName === undefined || formField.lastName === "") &&
          (addErrors.lastName = "Please enter your last Name");
          (formField.phoneNumber === undefined || formField.phoneNumber === "") &&
          (addErrors.phoneNumber = "Please enter your phone number");
        (formField.TypeOfScholarship === undefined || formField.TypeOfScholarship === "") &&
          (addErrors.TypeOfScholarship = "Please enter your class");
        (formField.select === undefined || formField.select === "") &&
          (addErrors.select = "Please enter your enter your selected category");

            (formField.DetailedRequirementsDescription === undefined ||
              formField.DetailedRequirementsDescription === "") &&
              (addErrors.DetailedRequirementsDescription =
                "Please enter your Detailed Requirements Description");

        setFormErrors(addErrors);
        setSuccess(true)
        console.log(addErrors);
      }
    
    return(
        <div className="    h-[fit-content]   bg-cover bg-no-repeat bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/hero4.jpg')]">
            <h2 className="font-bold text-[#34BAED] text-3xl text-center">ADD Sponsor CREDENTIALS</h2>
            <div className=" h-[fit-content] text-center  mx-auto flex flex-col w-[70%] items-center " >
              
            {formErrors.uploadSponsorImage && (
          <p className="text-red-500">{formErrors.uploadSponsorImage}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="file" name="uploadSponsorImage"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Sponsor profile" />
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
                {formErrors.phoneNumber && (
          <p className="text-red-500">{formErrors.phoneNumber}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text" name="phoneNumber"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="Phone Number" />
                {formErrors.TypeOfScholarship && (
          <p className="text-red-500">{formErrors.TypeOfScholarship}</p>
        )}
                <input onChange={(e) => handleChange(e)} type="text" name="ScholarshipDuration"  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" placeholder="SchorlarshipDuration" />
                <select onChange={(e) => handleChange(e)}  className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]" name="select" id="">
                   <option value="disabled">Select Category</option>
                    <option value="PartialScholarship">PartialScholarship</option>
                    <option value="FullTimeScholarship">FullTimeScholarship</option>
                </select>
          
              
                {formErrors.DetailedRequirementsDescription && (
          <p className="text-red-500">
            {formErrors.DetailedRequirementsDescription}
          </p>
        )}
        <textarea
          onChange={(e) => handleChange(e)}
          placeholder="DetailedProductDescription"
          name="DetailedReDescription"
          id=""
          cols="9"
          rows="5"
          className=" my-5 py-4 px-2 border-2 border-grey-400 outline-none rounded-md w-[50%]"
        >
        </textarea>
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
export default AddPost