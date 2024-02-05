import Classroom from "/facility/classroom.png";
import Cookie from "/facility/cookie.png";
import Laboratory from "/facility/laboratory.png";
import Library from "/facility/library.png";
import School from "/facility/school.png";
import Security from "/facility/security.png";
import Sports from "/facility/sports.png";
import Theatre from "/facility/theatre-mask.png";
import Transportation from "/facility/transportation.png";

export default function Facilities() {
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
    {
      img: Transportation,
      text: "Transportation Services",
    },
  ];

  return (
    <div className="w-full flex flex-col px-10 md:px-36 py-4">
      <div className="w-full flex flex-col">
        <div className="flex justify-center pb-2">
          <h1 className="text-[20px] md:text-[30px] text-text_color underline font-semibold">
            Facilities
          </h1>
        </div>
        <p className="text-sm md:text-base">
          At [School Name], we take pride in offering state-of-the-art
          facilities to create an enriching and conducive environment for our
          students. Our modern campus is equipped with spacious and
          well-ventilated classrooms that foster an optimal learning atmosphere.
          Our dedicated faculty members utilize advanced teaching aids to
          facilitate comprehensive learning experiences.
        </p>
        <p className="text-sm md:text-base">
          Our well-maintained library is a hub for academic resources, providing
          students with access to a diverse collection of books, research
          materials, and digital resources. We understand the importance of
          physical activity in a student&apos;s development, and thus, our
          school features well-equipped sports facilities, including a
          playground, sports fields, and indoor sports amenities.
        </p>
      </div>
      <div className="w-full flex py-4 bg-slate-100 justify-between px-4 items-center ps-4 rounded-md mt-2 max-[1023px]:flex-col max-[1023px]:items-start">
        {/* {data?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex justify-start items-center space-x-2 space-y-2 "
            >
              <img src={item?.img} alt={item?.img} className="w-6" />
              <p className="text-sm md:text-base pb-3 bg-red-00">{item?.text}</p>
            </div>
          );
        })} */}
        <div>
          <div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[0]?.img} alt={data[0]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[0]?.text}
            </p>
          </div>
          <div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[1]?.img} alt={data[1]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[1]?.text}
            </p>
          </div>
          <div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[2]?.img} alt={data[2]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[2]?.text}
            </p>
          </div>
        </div>
        <div>
        <div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[3]?.img} alt={data[3]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[3]?.text}
            </p>
          </div><div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[4]?.img} alt={data[4]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[4]?.text}
            </p>
          </div><div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[5]?.img} alt={data[5]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[5]?.text}
            </p>
          </div>
        </div>
        <div>
        <div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[6]?.img} alt={data[6]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[6]?.text}
            </p>
          </div><div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[7]?.img} alt={data[7]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[7]?.text}
            </p>
          </div><div className="flex justify-start items-center space-x-2 space-y-2 ">
            <img src={data[8]?.img} alt={data[8]?.img} className="w-6" />
            <p className="text-sm md:text-base pb-3 bg-red-00">
              {data[8]?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
