import "./Facility.css";
import Classroom from "/facility/classroom.png";
import Cookie from "/facility/cookie.png";
import Laboratory from "/facility/laboratory.png";
import Library from "/facility/library.png";
import School from "/facility/school.png";
import Security from "/facility/security.png";
import Sports from "/facility/sports.png";
import Theatre from "/facility/theatre-mask.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Facility() {
  const data = [
    {
      img: Classroom,
      text: "State-of-the-Art Classrooms",
    },
    {
      img: Laboratory,
      text: "Science and Computer Labs",
    },
    {
      img: Library,
      text: "Library and Resource Center",
    },
    {
      img: Sports,
      text: "Sports and Fitness Facilities",
    },
    {
      img: Theatre,
      text: "Arts and Cultural Spaces",
    },
    {
      img: Cookie,
      text: "Cafeteria and Nutrition",
    },
    {
      img: Security,
      text: "Safety and Security",
    },
    {
      img: School,
      text: "Green Campus",
    },
  ];

  return (
    <div className=" facility_main">
      <div>
        <h2 className="my-6 text-white relative text-2xl font-serif underline">
          Facilities
        </h2>
      </div>
      <div className="md:px-20 px-3 text-sm md:text-base">
        <p className="text-center text-white relative">
          {" "}
          At [School Name], we take pride in offering state-of-the-art
          facilities to create an enriching and conducive environment for our
          students. Our modern campus is equipped with spacious and
          well-ventilated classrooms that foster an optimal learning atmosphere.
          Our dedicated faculty members utilize advanced teaching aids to
          facilitate comprehensive learning experiences.
        </p>
      </div>
      <div className="w-full h-fut bg-transparent flex justify-center items-center">
        <div className="w-full h-fit bg-transparent flex justify-center items-center">
          <div className="w-[80%] h-[90%] bg-transparent grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-[1280px]:pt-8 pb-8">
            {data.map((item, i) => {
              return (
                <div key={i} className="cards py-3 px-1 gap-2 m-auto"  data-aos="fade-left">
                  <h2 className="text-white text-center">{item?.text}</h2>
                  <img src={item?.img} alt="image" className="w-10 mx-auto" />
                  <button>
                    <FaArrowRight className="text-white hover:scale-110 transition-all duration-500" size={20} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
