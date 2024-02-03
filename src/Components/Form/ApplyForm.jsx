import { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import { useFormik } from "formik";
import * as Yup from 'yup';


export default function ApplyForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone is required'),
    country: Yup.string().nullable(false).required('Country is required'),
    state: Yup.string().nullable(false).required('State is required'),
    city: Yup.string().nullable(false).required('City is required'),
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  const handleSelectChange = (event) => {
    const array = event.target.value.split(" ");
    setCities(City.getCitiesOfState(array[0], array[1]));
  };
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
  };

  const {  handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      alert("Form submitted Successfully")
      console.log("Success");
      // resetForm();
    },
  });

  return (
    <div
      className="w-full md:flex flex-shrink justify- md:pb-5"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661693491358-0404ef60870b?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hidden md:block w-[50%] h-full bg-transparent"></div>
      <div className="p-6 ">
        <h1 className="p-3 text-3xl font-bold text-white drop-shadow-lg shadow-black">
          Apply Here
        </h1>
        <form className="w-full" onSubmit={handleSubmit} >
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className={`w-full md:w-72 ps-3 py-5 bg-text_color outline-none text-white ${errors?.name && "border-red-500 border"}`}
                onChange={handleChange}
              />
              <p className="text-red-600 text-xs py-1">{errors?.name}</p>
            </div>
            <div>
              <input
                type="text"
                name="phone"
                maxLength={10}
                minLength={10}
                placeholder="Phone*"
                className={`w-full md:w-72 ps-3 py-5 bg-text_color outline-none mt-3 md:mt-0 text-white ${errors?.phone && "border-red-500 border"}`}
                onChange={handleChange}
              />
              <p className="text-red-600 text-xs py-1">{errors?.phone}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:mt-2 ">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className={`w-full md:w-72 ps-3 py-5 bg-text_color outline-none mt-3 md:mt-0 text-white ${errors?.email && "border-red-500 border"}`}
                onChange={handleChange}
              />
              <p className="text-red-600 text-xs py-1">{errors?.email}</p>
            </div>
            <div>
              <select
                name="country"
                className={` w-full md:w-72 ps-2 py-5 text-sm bg-text_color  text-slate-400 outline-none mt-3 md:mt-0  ${errors?.country && "border-red-500 border"} `}
                onChange={handleChange}
              >
                <option value="" className="w-36 h-20">
                  Please Select
                </option>
                <option value="India">India</option>
              </select>
              <p className="text-red-600 text-xs py-1">{errors?.country}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:mt-2">
            <div>
              <select
                className={`w-full md:w-72 ps-2 py-5 text-sm bg-text_color  text-slate-400 outline-none mt-3 md:mt-0 ${errors?.state && "border-red-500 border"}`}
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
                <p className="text-red-600 text-xs py-1">{errors?.state}</p>
            </div>
            <div className="flex-wrap">
              <select
                name="city"
                className={`w-full md:w-72 ps-2 py-5 text-sm bg-text_color text-slate-400 outline-none mt-3 md:mt-0  pr-10 ${errors?.city && "border-red-500 border"}`}
                onChange={handleChange}
              >
                <option value='' className="w-6 md:w-36">Please Select City</option>
                {cities.map((item, i) => {
                  return (
                    <option key={i} value={item?.name}>
                      {item?.name}
                    </option>
                  );
                })}
              </select>
                <p className="text-red-600 text-xs py-1">{errors?.city}</p>
            </div>
          </div>
          <div>
            <button type="submit" className="bg-red-700 w-full md:w-[37rem] px-4 py-4 mt-3 rounded-none text-white font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
