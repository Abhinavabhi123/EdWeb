import "./Event.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import { eventData } from "../../Services/constants";

export default function EventUpdate() {
  const [expandedItems, setExpandedItems] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sliderIdx, setSliderIdx] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  const toggleExpansion = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };
  const toggleCompression = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item === index)
        : [...prev, index]
    );
  };
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let scrollValue = 300;
  let width = "w-[78vw]";
  let gap = "gap-3";
  let px = "px-1";
  if (windowWidth === 360 && windowHeight == 640) {
    scrollValue = 286;
    px = "px-0";
    gap = "gap-2";
  } else if (windowWidth === 375 && windowHeight === 667) {
    width = "w-[80vw]";
    px = "px-0";
    gap = "gap-1";
    scrollValue = 303;
  } else if (windowWidth === 414 && windowHeight === 896) {
    scrollValue = 335;
  } else if (windowWidth === 390 && windowHeight === 844) {
    scrollValue = 317;
  } else if (windowWidth === 430 && windowHeight === 932) {
    scrollValue = 348;
  } else if (windowWidth === 412 && windowHeight === 915) {
    scrollValue = 334;
    width = "w-[80vw]";
    px = "px-0";
    gap = "gap-2";
  }

  function scrollRight() {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.scrollLeft += scrollValue;
    if (sliderIdx === eventData.length - 1) {
      setSliderIdx(eventData.length - 1);
    } else {
      setSliderIdx(sliderIdx + 1);
    }
  }
  function scrollLeft() {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.scrollLeft -= scrollValue;
    if (sliderIdx === 0) {
      setSliderIdx(0);
    } else {
      setSliderIdx(sliderIdx - 1);
    }
  }
  if (screenWidth <= 550) {
    width = `${screenWidth - 500}px`;
  }

  useEffect(() => {
    if (screenWidth >= 550) {
      const gridContainer = document.getElementById("gridContainer");
      const maxScrollValue =
        gridContainer.scrollWidth - gridContainer.clientWidth;

      const timer = setInterval(() => {
        if (gridContainer.scrollWidth > gridContainer.clientWidth) {
          if (gridContainer.scrollLeft >= maxScrollValue - 1) {
            gridContainer.scrollLeft = 0;
          } else {
            gridContainer.scrollLeft += scrollValue;
          }
        }
      }, 5000);

      return () => clearInterval(timer);
    } else {
      const timer = setInterval(() => {
        setSliderIdx((prevIdx) => (prevIdx + 1) % eventData.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [scrollValue]);

  return (
    <div className="w-full h-fit bg-slate-100">
      <div className="event">
        <p className="text-[20px] md:text-[30px] text-text_color underline">
          Events
        </p>
      </div>
      <div
        className="w-[100%] h-[18rem] flex ps-2 md:ps-0 justify-center items-center"
        data-aos="fade-up"
      >
        <div className=" w-[98%] md:w-[90%] h-[90%] bg--300 rounded-2xl flex">
          {/* Left Arrow */}
          <div className="h-full w-10 md:w-24 flex items-center justify-center">
            <FaCircleArrowLeft
              size={30}
              color="gray"
              className="cursor-pointer"
              onClick={scrollLeft}
            />
          </div>
          {/* image slider section */}
          <div
            className={`h-full w-full bg-white grid ${
              sliderIdx <= 550 && "px-0"
            } ${px} ${gap} grid-flow-col overflow-x-scroll scroll-smooth gridContainer pt-2`}
            id="gridContainer"
          >
            {screenWidth >= 550 ? (
              eventData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`md:w-72 ${width} h-[15rem]  rounded-lg relative`}
                  >
                    <div
                      className={`rounded-t-lg bg-transparent overflow-hidden ${
                        !expandedItems.includes(i)
                          ? "img_full block"
                          : "img_null hidden"
                      }`}
                    >
                      <img
                        src={item?.img}
                        alt="image"
                        className={`w-full object-cover rounded-t-lg h-full ease-in-out relative transform duration-700 hover:scale-105`}
                      />
                    </div>
                    <div
                      className={`event_content w-full rounded-b-lg h-[20%] absolute bg-[#0A1D56] group-hover/${i}:h-full text-white  ${
                        expandedItems.includes(i) ? "expanded" : ""
                      }`}
                    >
                      <div className="h-10 w-full flex items-center justify-between px-4">
                        <p className="text-sm text-yellow-300">{item?.title}</p>
                        {expandedItems.includes(i) ? (
                          <IoIosArrowUp
                            className="cursor-pointer up_down"
                            onClick={() => toggleExpansion(i)}
                          />
                        ) : (
                          <IoIosArrowUp
                            className="cursor-pointer"
                            onClick={() => toggleCompression(i)}
                          />
                        )}
                      </div>
                      <div
                        className={`${
                          expandedItems.includes(i) ? "block" : "hidden"
                        } text-sm px-2 overflow-hidden`}
                      >
                        {item?.desc}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                className={`${width}  h-[15rem] snap-start rounded-lg  relative transition-all duration-500`}
              >
                <div
                  className={`rounded-lg h-full bg-transparent overflow-hidden ${
                    !expandedItems.includes(sliderIdx)
                      ? "img_full block"
                      : "img_null hidden"
                  }`}
                >
                  <img
                    src={eventData[sliderIdx]?.img}
                    alt="image"
                    className={`w-full h-full ease-in-out relative object-cover transform duration-700 hover:scale-105`}
                  />
                </div>
                <div
                  className={` w-full rounded-b-lg h-[20%] absolute bg-[#0A1D56] text-white ${
                    expandedItems.includes(sliderIdx)
                      ? "expanded_mob -translate-y-0"
                      : " -translate-y-[3rem]"
                  }`}
                >
                  <div className="h-10 w-full flex items-center justify-between px-4">
                    <p className="text-sm text-yellow-300">
                      {eventData[sliderIdx]?.title}
                    </p>
                    {expandedItems.includes(sliderIdx) ? (
                      <IoIosArrowUp
                        className="cursor-pointer up_down"
                        onClick={() => toggleExpansion(sliderIdx)}
                      />
                    ) : (
                      <IoIosArrowUp
                        className="cursor-pointer"
                        onClick={() => toggleCompression(sliderIdx)}
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      expandedItems.includes(sliderIdx) ? "block" : "hidden"
                    } px-2 text-xs overflow-hidden`}
                  >
                    {eventData[sliderIdx]?.desc}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Right Arrow */}
          <div className="h-full w-10 md:w-24 flex pe-2 ps-[1px] items-center justify-center">
            <FaCircleArrowRight
              size={30}
              color="gray"
              className="cursor-pointer"
              onClick={scrollRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
