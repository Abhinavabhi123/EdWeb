import Enroll from "../Components/Apply/Enroll";
import Banner from "../Components/Banner/Banner";
import Body from "../Components/Card/Body";
import HeaderMain from "../Components/Header/HeaderMain";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div className="w-[100%] h-screen relative font-sans-condensed">
      <div className="w-full h-[7rem] ">
        <HeaderMain />
      </div>
      {/* Side Social media details */}
      <div className="h-28 md:h-40 w-10 fixed z-[10] bg-yellow-500 bg-opacity-50 hover:bg-opacity-90 rounded-tr-lg rounded-br-lg mt-11 md:mt-44 md:text-2xl text-sm flex flex-col justify-center gap-2 items-center m-0 p-0">
        <FaXTwitter className="hover:text-white  group/twit cursor-pointer " />
        <FaWhatsapp className="hover:text-green-500 group/what cursor-pointer" />
        <FaYoutube className="hover:text-red-600 group/you cursor-pointer" />
        <FaFacebook className="hover:text-blue-500 group/face cursor-pointer" />
      </div>
      <Banner />
      <div className="w-full h-10 bg-white flex items-center ps-5 md:ps-20 mb-2">
        <h1 className="text-2xl font-bold underline">Syllabus</h1>
      </div>
      <Body />
      <Enroll/>
    </div>
  );
}
