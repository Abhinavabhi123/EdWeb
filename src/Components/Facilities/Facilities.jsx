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
      <div className="w-full flex flex-col py-4 bg-slate-100 ps-4 rounded-md mt-2">
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex justify-start items-center space-x-2 space-y-2 "
            >
              <img src={item?.img} alt={item?.img} className="w-6" />
              <p className="text-sm md:text-base pb-3 bg-red-00">{item?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
