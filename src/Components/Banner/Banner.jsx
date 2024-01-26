import { useEffect, useState } from "react";
import "./Banner.css";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";

export default function Banner() {
  const [show, setShow] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (show === 5) {
        setShow(1);
      } else {
        setShow(show + 1);
      }
    }, 5000);
  }, [show]);
  return (
    <>
      <div className="w-full md:h-[36rem] h-[15rem] z-0  bg-slate-600 relative flex mb-20">
        <img
          src="/Education 1.avif"
          alt="banner1"
          className={`${
            show === 1 ? "block" : "hidden"
          } banner_image image-animation`}
        />
        <img
          src="/education 2.avif"
          alt="banner2"
          className={`${
            show === 2 ? "block" : "hidden"
          } banner_image image-animation`}
        />
        <img
          src="/Education 3.avif"
          alt="banner3"
          className={`${
            show === 3 ? "block" : "hidden"
          } banner_image image-animation`}
        />
        <img
          src="/Education 4.avif"
          alt="banner4"
          className={`${
            show === 4 ? "block" : "hidden"
          } banner_image image-animation`}
        />
        <img
          src="/Education 5.avif"
          alt="banner5"
          className={`${
            show === 5 ? "block" : "hidden"
          } banner_image image-animation`}
        />
        {/* Side Social media details */}
        <div className="h-28 md:h-40 w-5 md:w-10 absolute z-90 bg-yellow-500 bg-opacity-50 hover:bg-opacity-90 rounded-tr-lg rounded-br-lg mt-11 md:mt-44 md:text-2xl text-sm flex flex-col justify-center gap-2 items-center m-0 p-0">
          <FaXTwitter className="hover:text-white  group/twit cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 group/what cursor-pointer" />
          <FaYoutube className="hover:text-red-600 group/you cursor-pointer" />
          <FaFacebook className="hover:text-blue-500 group/face cursor-pointer" />
        </div>
      </div>
    </>
  );
}
