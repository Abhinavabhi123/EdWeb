// import About from "../Components/About/About";
import Enroll from "../Components/Apply/Enroll";
import Banner from "../Components/Banner/Banner";
// import Body from "../Components/Card/Body";
// import Event from "../Components/Events/Event";
import HeaderMain from "../Components/Header/HeaderMain";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";
import Videos from "../Components/Videos/Videos";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import EventUpdate from "../Components/Events/EventUpdate";
import Education from "../Components/Card/Education";
import Facility from "../Components/Facilities/Facility";
import News from "../Components/News/News";
import AboutUpdated from "../Components/About/AboutUpdated";

export default function HomePage() {
  return (
    <div className="w-[100%] h-screen relative font-sans-condensed">
      <div className="w-full h-[5.5rem] ">
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
        <h1 className="text-[20px] md:text-[30px] font-bold underline text-text_color">Syllabus</h1>
      </div>
      <Education/>
      {/* <Body /> */}
      <Enroll />
      {/* <Event /> */}
      <EventUpdate/>
      <Facility/>
      <Videos/>
      <News/>
      <AboutUpdated/>
      {/* <About/> */}
      <Form/>
      <Footer/>
    </div>
  );
}
