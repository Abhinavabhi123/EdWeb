import "./ContactUs.css";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";

export default function ContactUsContent() {
  return (
    <div className="w-full h-fit bg-transparent p-10">
      <div className="p-5">
        <h1 className="text-2xl text-[#12372A] font-semibold">
          Contact Us - - - -
        </h1>
      </div>
      <div className="w-full  min-h-[30rem] bg-transparent flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-transparent flex justify-center items-center ">
          <form className="flex flex-col w-[90%] bg-transparent md:gap-3 py-5">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center  md:gap-8">
              <div className="flex flex-col ">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border placeholder:text-black placeholder:text-sm border-blue-400 text-black`}
                />
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
                />
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
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border placeholder:text-black placeholder:text-sm border-blue-400 text-black`}
                />
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <select
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                  name="state"
                >
                  <option value="">Please Select</option>
                </select>
              </div>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-8">
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <select
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                  name="state"
                >
                  <option value="" className="w-36">
                    Please Select State
                  </option>
                </select>
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <select
                  name="city"
                  className={`w-full md:w-72 ps-3 py-3 rounded-md outline-none border text-sm  border-blue-400 text-black`}
                >
                  <option value="" className="w-6 md:w-36 ">
                    Please Select City
                  </option>
                </select>
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
              ></textarea>
            </div>
            <div className="w-full flex justify-center mt-4 md:mt-0">
              <button className="ps-2 w-36 rounded-lg py-2 bg-[#211C6A] text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#CDFADB] rounded-xl bg-transparent md:p-20 p-5">
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
