import { useEffect, useState } from "react";
import "./Banner.css";
import { bannerData } from "../../Services/constants";

export default function Banner() {
  const [show, setShow] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (show === 5) {
        setShow(1);
      } else {
        setShow(show + 1);
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div className="w-[100%] md:mb-5 md:h-[38rem] overflow-hidden h-[15rem] z-0 relative banner_container">
      {bannerData.map((item, i) => {
        return (
          <div
            key={i}
            className={`${
              show === i + 1 ? "block" : "hidden"
            } w-full h-full overflow-hidden`}
          >
            <p
              className={`${
                show === i + 1 ? "block" : "hidden"
              } text_animation text-shadow-md banner_text md:top-[50%] overflow-hidden md:left-[38%] top-[25%] left-[20%]`}
            >
              {item?.title}
            </p>
            <div className="gradient"></div>
            <img
              id={`img${i + 1}`}
              src={item?.img}
              alt={`banner${i + 1}`}
              className={`${
                show === i + 1 ? "block" : "hidden"
              } w-full h-full object-cover image-animation`}
            />
          </div>
        );
      })}
    </div>
  );
}
