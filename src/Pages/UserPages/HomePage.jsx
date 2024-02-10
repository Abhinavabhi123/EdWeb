import {
  About,
  Academics,
  ApplyForm,
  Banner,
  Courses,
  Education,
  Enroll,
  EventUpdate,
  Facility,
  News,
  Testimonial,
  Videos,
} from "../../Components";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";

export default function HomePage() {
  window.scrollTo(0, 0);

  return (
    <div className="w-[100%] h-fit relative font-sans-condensed">
      {/* Side Social media details */}
      <div className="h-28 md:h-40 w-10 fixed z-[10] bg-yellow-500 bg-opacity-50 hover:bg-opacity-90 rounded-tr-lg rounded-br-lg mt-11 md:mt-44 md:text-2xl text-sm flex flex-col justify-center gap-2 items-center m-0 p-0">
        <FaXTwitter className="hover:text-white  group/twit cursor-pointer " />
        <FaWhatsapp className="hover:text-green-500 group/what cursor-pointer" />
        <FaYoutube className="hover:text-red-600 group/you cursor-pointer" />
        <FaFacebook className="hover:text-blue-500 group/face cursor-pointer" />
      </div>
      <Banner />
      <About />
      <Academics />
      <Education />
      <Courses />
      <Enroll />
      <EventUpdate />
      <Facility />
      <Videos />
      <News />
      <Testimonial />
      <ApplyForm />
    </div>
  );
}
