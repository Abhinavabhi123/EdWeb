import "./Event.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function Event() {
  const [expandedItems, setExpandedItems] = useState([]);

  const images = [
    {
      img: "/Event 1.jpg",
      title: "Annual Function",
      desc:
        "In educational institutions, an annual function is often a " +
        "grand event where students showcase their talents through " +
        "cultural programs, performances, and various artistic " +
        "displays. It is an opportunity to celebrate academic " +
        "achievements and foster a sense of community.",
    },
    {
      img: "/Event 2.jpg",
      title: "Basket Ball",
      desc: " The main objective of basketball is to score points by"+
      "shooting a ball through the opponent's hoop. The team with the"+
      "most points at the end of the game wins. The main objective of basketball"+
      "is to score points by shooting a ball through the opponent's hoop."
    },
    {
      img: "/Event 3.jpg",
      title: "Badminton",
      desc:"Badminton is a racket sport played either in singles (one player per side)"+
      "or doubles (two players per side) across a rectangular court divided by a net."+
      "The game is played with a shuttlecock, a feathered projectile with an open conical shape."
    },
    {
      img: "/Event 4.jpg",
      title: "Ice skating",
      desc:"Ice skating is a popular recreational and competitive activity that"+
      "involves moving on ice, usually wearing ice skates. It is enjoyed by people"+
      "of various skill levels and is practiced both for fun and as a competitive sport."+
      "figure skating and speed skating."
    },
    {
      img: "/Event 5.jpg",
      title: "Reading",
      desc:"Reading is a cognitive process that involves decoding symbols to derive"+
      "meaning from written or printed text. It is a fundamental skill and an essential"+
      "aspect of education, information consumption, and personal development. Reading can"+
      "take various forms, including reading."
    },
  ];

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

  return (
    <div className="w-full h-[25rem] bg-transparent">
      <div className="event">
        <p>Events</p>
      </div>
      <div className="w-[100%] h-[18rem] bg-slate-100 flex justify-center items-center">
        <div className=" w-[90%] md:w-[80%] h-[90%] bg-gray-300 rounded-2xl flex">
          {/* Left Arrow */}
          <div className="h-full w-10 md:w-24 flex items-center justify-center">
            <FaCircleArrowLeft
              size={30}
              color="gray"
              className="cursor-pointer"
            />
          </div>
          {/* image slider section */}
          <div className="h-full w-ful bg-white flex items-center px-3 gap-3 overflow-hidden md:overflow-hidden">
            {images.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`w-96 h-[95%]  rounded-lg relative group `}
                >
                  <div
                    className={`rounded-t-lg bg-pink-500  ${
                      !expandedItems.includes(i)
                        ? "img_full block"
                        : "img_null hidden"
                    }`}
                  >
                    <img
                      src={item?.img}
                      alt="image"
                      className={`w-full object-cover rounded-t-lg h-full ease-in-out relative`}
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
                          className="cursor-pointer  "
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
            })}
          </div>
          {/* Right Arrow */}
          <div className="h-full w-10 md:w-24 flex items-center justify-center">
            <FaCircleArrowRight
              size={30}
              color="gray"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
