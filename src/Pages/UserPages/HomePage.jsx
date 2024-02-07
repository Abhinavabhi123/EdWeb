
import About from "../../Components/About/About";
import Enroll from "../../Components/Apply/Enroll";
import Banner from "../../Components/Banner/Banner";
// import Body from "../Components/Card/Body";
// import Event from "../Components/Events/Event";

import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";
import Videos from "../../Components/Videos/Videos";
import EventUpdate from "../../Components/Events/EventUpdate";
import Education from "../../Components/Card/Education";
// import Facility from "../Components/Facilities/Facility";
import News from "../../Components/News/News";
import Testimonial from "../../Components/Testimonial/Testimonial";
import ApplyForm from "../../Components/Form/ApplyForm";
// import Academic from "../Components/Academic/Academic";
// import Facilities from "../Components/Facilities/Facilities";
import Courses from "../../Components/Courses/Courses";
import Facility from "../../Components/Facilities/Facility";
import Academics from "../../Components/Academic/Academics";

export default function HomePage() {

  return (
    <div className="w-[100%] h-screen relative font-sans-condensed">

      {/* Side Social media details */}
      <div className="h-28 md:h-40 w-10 fixed z-[10] bg-yellow-500 bg-opacity-50 hover:bg-opacity-90 rounded-tr-lg rounded-br-lg mt-11 md:mt-44 md:text-2xl text-sm flex flex-col justify-center gap-2 items-center m-0 p-0">
        <FaXTwitter className="hover:text-white  group/twit cursor-pointer " />
        <FaWhatsapp className="hover:text-green-500 group/what cursor-pointer" />
        <FaYoutube className="hover:text-red-600 group/you cursor-pointer" />
        <FaFacebook className="hover:text-blue-500 group/face cursor-pointer" />
      </div>
      <Banner />
      <About />
      {/* <Academic/> */}
      <Academics />
      <Education />
      <Courses />
      <Enroll />
      <EventUpdate />
      {/* <Facilities/> */}
      <Facility />
      <Videos />
      <News />
      <Testimonial />
      <ApplyForm />

    </div>
  );
}
