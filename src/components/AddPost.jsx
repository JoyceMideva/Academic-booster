import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";
import { app } from "../firebase";
import loaderImg from "../assets/images/loader.gif";
import { initializeApp } from "firebase/app";
function AddPost() {
  const [formField, setFormField] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(true);
  const [base64File, setBase64File] = useState(null);
  const db = getFirestore(app);

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const storage = getStorage(app);
    setLoader(false);
    const storageRef = ref(storage, `posts/${e.target.files[0].name}`);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      // Store in Firebase storage
      uploadString(storageRef, reader.result, "data_url").then((snapshot) => {
        setFormField((prev) => ({
          ...prev,
          sponsorImage: `https://firebasestorage.googleapis.com/v0/b/academic-booster-6cc3f.appspot.com/o/posts%2F${file.name}?alt=media`,
        }));
        console.log("Uploaded a data_url string!");
        setLoader(true);
      });

      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };
  async function handleAdd(e) {
    e.preventDefault();
    const addErrors = {};
    {
      console.log(base64File);
    }
    // (formField.uploadSponsorImage === undefined ||
    //   formField.uploadSponsorImage === "") &&
    //   (addErrors.uploadSponsorImage =
    //     "Please enter your uploaded Sponsor image");
    (formField.organisationName === undefined || formField.organisationName === "") &&
    (addErrors.organisationName = "Please enter your organisation Name");
    (formField.firstName === undefined || formField.firstName === "") &&
      (addErrors.firstName = "Please enter your first Name");
    (formField.lastName === undefined || formField.lastName === "") &&
      (addErrors.lastName = "Please enter your last Name");
    (formField.phoneNumber === undefined || formField.phoneNumber === "") &&
      (addErrors.phoneNumber = "Please enter your phone number");
    (formField.ScholarshipDuration === undefined ||
      formField.ScholarshipDuration === "") &&
      (addErrors.ScholarshipDuration = "Please enter your duration");
    (formField.select === undefined || formField.select === "") &&
      (addErrors.select = "Please enter your enter your selected category");

    (formField.DetailedRequrementsDescription === undefined ||
      formField.DetailedRequrementsDescription === "") &&
      (addErrors.DetailedRequrementsDescription =
        "Please enter your Detailed Requirements Description");

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
    <div className="    h-[fit-content]   bg-cover bg-no-repeat bg-[linear-gradient(rgba(1,1,1,.5),rgba(1,1,1,.5)),url('assets/images/photo1.jpg')]">
      <h2 className="font-bold text-[#34BAED] text-3xl text-center">
        ADD SCHORLARSHIP POSTS
      </h2>
      <div className=" h-[fit-content] text-center  mx-auto flex flex-col w-[70%] items-center ">
        {formErrors.uploadSponsorImage && (
          <p className="text-red-500">{formErrors.uploadSponsorImage}</p>
        )}

        <input
          onChange={(e) => handleImageChange(e)}
          type="file"
          name="uploadSponsorImage"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Sponsor profile"
        />
        {loader ? (
          <img src={formField.sponsorImage && formField.sponsorImage} />
        ) : (
          <img src={loaderImg} alt="" />
        )}
        {formErrors.organisationName && (
          <p className="text-red-500">{formErrors.organisationName}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="organisationName"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="organisation Name"
        />

        {formErrors.firstName && (
          <p className="text-red-500">{formErrors.firstName}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="firstName"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="First Name"
        />
        {formErrors.lastName && (
          <p className="text-red-500">{formErrors.lastName}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="lastName"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Last name"
        />

        {formErrors.phoneNumber && (
          <p className="text-red-500">{formErrors.phoneNumber}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="phoneNumber"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="Phone Number"
        />
        {formErrors.ScholarshipDuration && (
          <p className="text-red-500">{formErrors.ScholarshipDuration}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="ScholarshipDuration"
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          placeholder="SchorlarshipDuration"
        />
        <select
          onChange={(e) => handleChange(e)}
          className="outline-none my-5 py-4 px-2 border-2 border-gray-400 rounded-md w-[50%]"
          name="select"
          id=""
        >
          <option value="disabled">Select Category</option>
          <option value="PartialScholarship">PartialScholarship</option>
          <option value="FullTimeScholarship">FullTimeScholarship</option>
        </select>

        {formErrors.DetailedRequrementsDescription && (
          <p className="text-red-500">
            {formErrors.DetailedRequrementsDescription}
          </p>
        )}
        <textarea
          onChange={(e) => handleChange(e)}
          placeholder="DetailedRequrementsDescription"
          name="DetailedRequrementsDescription"
          id=""
          cols="9"
          rows="5"
          className=" my-5 py-4 px-2 border-2 border-grey-400 outline-none rounded-md w-[50%]"
        ></textarea>
        {success && (
          <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
            <BsFillCheckSquareFill /> Form has been submitted successfully
          </p>
        )}
        <button
          onClick={(e) => handleAdd(e)}
          className=" sm:px-6  py-4 px-12 mb-5  bg-[#3871C1] rounded-full font-bold text-[#fff] text-lg w-[30%]"
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
export default AddPost;
