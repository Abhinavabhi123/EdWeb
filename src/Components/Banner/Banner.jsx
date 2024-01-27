import { useEffect, useState } from "react";
import "./Banner.css";


export default function Banner() {
  const [show, setShow] = useState(1);
  const image1 = document.getElementById("img1");
  useEffect(() => {
    if (show === 2) {
      image1.classList.add("image-animation");
    }
  }, [show]);

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
      <div className="w-full md:h-[38rem] h-[15rem] z-0  bg-slate-300 bg-blur relative flex mb-20">
        <>
          <p className={`${show === 1 ? "block" : "hidden"} img_animation banner_text md:top-[50%] md:left-[38%] top-[25%] left-[25%]`}>
            Quality Teaching
          </p>
          <img
            id="img1"
            src="/Education 1.jpg"
            alt="banner1"
            className={`${show === 1 ? "block" : "hidden"} banner_image image-animation`}
          />
        </>
        {/* image 2 */}
        <>
          <p
            className={` ${
              show === 2 ? "block" : "hidden"
            } banner_text img_animation  text-black md:top-[50%] md:left-[35%] top-[25%] left-[25%]`}
          >
            Labs & Technology
          </p>

          <img
            src="/Education 2.jpeg"
            alt="banner2"
            className={`${
              show === 2 ? "block" : "hidden"
            } banner_image image-animation`}
          />
        </>
        {/* image 3 */}
        <>
          <p
            className={` ${
              show === 3 ? "block" : "hidden"
            } banner_text img_animation text-yellow-400 md:top-[50%] md:left-[38%] top-[25%] left-[25%] `}
          >
            Amazing Campus
          </p>
          <img
            src="Education 3.jpeg"
            alt="banner3"
            className={`${
              show === 3 ? "block" : "hidden"
            } banner_image image-animation`}
          />
        </>
        {/* image 4 */}
        <>
          <p
            className={` ${
              show === 4 ? "block" : "hidden"
            } banner_text img_animation text-orange-500 md:top-[50%] md:left-[38%] top-[25%] left-[30%]`}
          >Are You Ready</p>
          <img
            src="/Education 4.jpg"
            alt="banner4"
            className={`${
              show === 4 ? "block" : "hidden"
            } banner_image image-animation`}
          />
        </>
        {/*image 5  */}
        <>
          <p
            className={` ${
              show === 5 ? "block" : "hidden"
            } banner_text img_animation md:top-[50%] md:left-[38%] top-[25%] left-[30%]`}
          >You Are The Best</p>
          <img
            src="/Education 5.jpg"
            alt="banner5"
            className={`${
              show === 5 ? "block" : "hidden"
            } banner_image image-animation`}
          />
        </>
     
      </div>
    </>
  );
}
