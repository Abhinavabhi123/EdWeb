import { useEffect, useState } from "react";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";
import { State, City } from "country-state-city";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./ContactUs.css";

export default function ContactUsContent() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone is required'),
    country: Yup.string().nullable(false).required('Country is required'),
    state: Yup.string().nullable(false).required('State is required'),
    city: Yup.string().nullable(false).required('City is required'),
    message: Yup.string().nullable(false).min(50, 'Message must be at least 50 characters long').required('Please enter the message'),
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    message:"",
  };
  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);
  const handleSelectChange = (event) => {
    const array = event.target.value.split(" ");
    console.log(City.getCitiesOfState(array[0], array[1]),"sdkjsn");
    setCities(City.getCitiesOfState(array[0], array[1]));
  };



  const {  handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      alert("Form submitted Successfully")
      console.log("Success");
    },
  });


  return (
    <div className="w-full h-fit bg-transparent p-10">
      <div className="p-5">
        <h1 className="text-2xl text-[#12372A] font-semibold">
          Contact Us
        </h1>
      </div>
      <div className="w-full  min-h-[30rem] bg-transparent flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-transparent flex justify-center items-center ">
          <form className="flex flex-col w-[90%] bg-transparent md:gap-3 py-5"  onSubmit={handleSubmit}>
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center  md:gap-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border placeholder:text-black placeholder:text-sm border-blue-400 text-black`}
                  onChange={handleChange}
                />
                {
                  errors?.name && <p className="text-red-400 text-sm">{errors.name}</p>
                }
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border placeholder:text-black placeholder:text-sm border-blue-400 text-black`}
                  onChange={handleChange}
               />
               {
                  errors?.email && <p className="text-red-400 text-sm">{errors.email}</p>
                }
              </div>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-8 ">
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone*"
                  className={`w-full custom-number-input md:w-72 ps-3 py-3 rounded-md outline-none border placeholder:text-black placeholder:text-sm border-blue-400 text-black`}
                  onChange={handleChange}
               />
               {
                  errors?.phone && <p className="text-red-400 text-sm">{errors.phone}</p>
                }
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="email" className="text-sm">
                 Country
                </label>
                <select
                  className={` w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                  name="country"
                  onChange={handleChange}
                >
                  <option value="">Please Select</option>
                  <option value="AL">India</option>
                </select>
                {
                  errors?.country && <p className="text-red-400 text-sm">{errors.country}</p>
                }
              </div>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-8">
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="name" className="text-sm">
                  State
                </label>
                <select
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                  name="state"
                  onChange={(event) => {
                    handleSelectChange(event);
                    handleChange(event);
                  }}
                >
                  <option value="" className="w-36">
                    Please Select State
                  </option>
                  {states.map((item, i) => {
                  return (
                    <option
                    key={i}
                    value={`${item?.countryCode} ${item?.isoCode} ${item?.name}`}
                    >
                      {item?.name}
                    </option>
                  );
                })}
                </select>
                {
                  errors?.state && <p className="text-red-400 text-sm">{errors.state}</p>
                }
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="email" className="text-sm">
                  City
                </label>
                <select
                  name="city"
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                  onChange={handleChange}
              >
                  <option value="" className="w-6 md:w-36 ">
                    Please Select City
                  </option>
                  {cities.map((item, i) => {
                  return (
                    <option key={i} value={item?.name}>
                      {item?.name}
                    </option>
                  );
                })}
                </select>
                {
                  errors?.city && <p className="text-red-400 text-sm">{errors.city}</p>
                }
              </div>
            </div>
            <div className="w-full mt-5 md:mt-0 md:px-4">
              <textarea
                name="message"
                className="w-full h-full text-sm ps-5 pt-5  py-3 rounded-md outline-none border placeholder:text-sm border-blue-400 text-black"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message Here"
                onChange={handleChange}
              ></textarea>
              {
                  errors?.message && <p className="text-red-400 text-sm">{errors.message}</p>
                }
            </div>
            <div className="w-full flex justify-center mt-4 md:mt-0">
              <button className="ps-2 w-36 rounded-lg py-2 bg-[#211C6A] text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#83e6d2] rounded-xl bg-transparent md:p-20 p-5">
          <div className="flex flex-col gap-5 ">
            <h3 className="text-xl text-[#12372A] font-semibold">Details</h3>
            <div className="w-full min-h-32 bg-transparent">
              <h3>Address:</h3>
              <ul className="ps-5 list-disc text-blue-500" >
                <li>18 Goodfriend Drive East Hampton,</li>
                <li>NY 11937 739 Butter Lane Bridgehampton</li>
                <li>NY 1193 18 Goodfriend Drive East Hampton, NY 11937</li>
              </ul>
            </div>
            <div className="w-full h-20">
              <h3>Email:</h3>
              <h2 className="ps-5 text-base text-green-500">example@gmail.com</h2>
            </div>
            <div className="w-full h-32 bg-transparent space-y-4">
              <h3>Social Media:</h3>
              <div className="flex justify-center items-center gap-6 text-2xl font-semibold">
                <FaXTwitter className="text-white cursor-pointer " />
                <FaWhatsapp className="text-green-500cursor-pointer" />
                <FaYoutube className="text-red-600 cursor-pointer" />
                <FaFacebook className="text-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
