import { videoImages } from "../../Services/constants";
import "./Video.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Videos() {
  return (
    <div
      id="video"
      className="w-[100%] h-fit bg-slate-100 flex flex-col justify-center items-center mb-3 md:mb-10 mt-10 pb-7 text-text_color"
    >
      <div className="w-[100%] h-fit flex justify-center  items-center md:py-4">
        <h1 className="text-[20px] md:text-[30px] font-semibold underline">
          Videos
        </h1>
      </div>
      <div className="w-[90%] h-full bg-transparent grid grid-rows-1 md:ps-4 ps-1 md:grid-rows-2 md:gap-10 max-[1313px]:grid-rows-3 grid-flow-col gap-4 pt-5 md:pt-3">
        {videoImages.map((item, i) => {
          return (
            <div
              className="w-[100%] h-[100%] bg-transparent relative  rounded-lg cursor-pointer group overflow-hidden"
              key={i}
              data-aos="zoom-in-up"
            >
              <img
                src={item?.img}
                alt="video img"
                className="w-[100%] h-[100%] object-cover rounded-lg image_shadow transition-transform duration-300"
              />
              <div className="w-full md:h-20 h-8  absolute bottom-0 flex justify-center items-center color rounded-b-lg">
                <p className="text-white text-sm md:text-lg group-hover:opacity-30 transition-all duration-500">
                  {item.text}
                </p>
              </div>
              <div className="absolute w-full h-full hidden group-hover:flex rounded-lg bg-white bg-opacity-30 top-0 video justify-center items-center">
                <div className="px-2 py-1 rounded-md bg-[#D63484] flex  items-center gap-1">
                  <a href="#video" className="text-white text-sm md:text-base">
                    Watch Video
                  </a>
                  <MdOutlineSlowMotionVideo color="#fff" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
