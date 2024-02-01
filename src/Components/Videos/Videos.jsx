// import "./Video.css";

export default function Videos() {
  const images = [
    {
      img: "/video_img 1.jpg",
      text: "Handicraft",
    },
    {
      img: "/video_img 2.jpg",
      text: "Creativity",
    },
    {
      img: "/video_img 3.jpg",
      text: "Drawings",
    },
    {
      img: "/video_img 4.jpg",
      text: "Musical Event",
    },
    {
      img: "/video_img 5.jpg",
      text: "Pared",
    },
    {
      img: "/vidoe_img 6.jpg",
      text: "School Teacher",
    },
  ];
  return (
    <div className="w-[100%] h-fi bg-slate-100 flex flex-col justify-center items-center mb-3 md:mb-10 mt-10 pb-7 text-text_color">
      <div className="w-[100%] h-fit flex justify-center  items-center md:py-4">
        <h1 className="text-[20px] md:text-[30px] font-sans-condensed ">Videos</h1>
      </div>
      <div className="w-[90%] h-full bg-transparent grid grid-rows-1 md:ps-4 ps-1 md:grid-rows-2 md:gap-10 max-[1313px]:grid-rows-3 grid-flow-col gap-4 pt-5 md:pt-3">
        {images.map((item, i) => {
          return (
            <div
              className="w-[100%] h-[100%] bg-transparent relative  rounded-lg cursor-pointer group"
              key={i}
            >
              <img
                src={item?.img}
                alt="video img"
                className="w-[100%] h-[100%] object-cover rounded-lg image_shadow hover:scale-90 transition-transform duration-300"
              />
              <p className="absolute md:bottom-6 bottom-1 left-[50%] -translate-x-[50%] text-sm md:text-lg text-white font-semibold hidden group-hover:block transition-all duration-700 text-shadow">
                {item?.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
