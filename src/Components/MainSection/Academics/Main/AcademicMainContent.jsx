import "./academic_main.css";
import { MdOutlineSportsScore,MdOutlineClass } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { SiChianetwork } from "react-icons/si";


export default function AcademicMainContent() {
    const data = [
        {
          image: <MdOutlineSportsScore  size={50}/>,
          content:
            "Our students consistently achieve high scores on standardized tests, demonstrating their mastery of core academic subjects and readiness for college and career success.",
          title: "High Test Scores",
        },
        {
          image: <FaAward  size={40}/>,
          content:
            "Many of our students are recipients of prestigious scholarship awards, recognizing their academic achievements, leadership qualities, and contributions to the community.",
          title: "Scholarship Awards",
        },
        {
          image: <MdOutlineClass  size={40}/>,
          content:
            "Our graduates are routinely accepted into top colleges and universities across the country and around the world, reflecting the quality of education they receive at [School Name].",
          title: "College Acceptances",
        },
        {
          image: <GiLevelFourAdvanced  size={40}/>,
          content:
            "Our AP and IB programs have a track record of success, with students earning impressive scores on exams and receiving college credit for their coursework.",
          title: "Advanced Placement Success",
        },
        {
          image: <FaBookReader  size={40}/>,
          content:
            "Our students regularly participate and excel in STEM competitions, showcasing their innovation, problem-solving skills, and teamwork.",
          title: "STEM Competitions",
        },
        {
          image: <MdDraw  size={40}/>,
          content:
            "Our arts programs have received recognition at the local, regional, and national levels, with students earning awards and accolades for their creativity and artistic talent.",
          title: "Arts Recognition",
        },
        {
          image: <IoMdSearch  size={40}/>,
          content:
            "Our students and faculty engage in cutting-edge research and scholarly activities, contributing to advancements in their fields and earning recognition for their work.",
          title: "Research and Publications",
        },
        {
          image: <SiChianetwork  size={40}/>,
          content:
            "We emphasize the importance of giving back to the community, and our students actively participate in service projects and initiatives that make a positive impact on society.",
          title: "Community Engagement",
        },
      ];

  return (
    <div className="w-full md:px-16 mt-10">
      <div className="flex p-5">
        <h1 className="text-2xl text-[#12372A] font-semibold">
          Explore Our Academic Programs
        </h1>
      </div>
      <div className="w-full p-5 flex justify-center items-center">
        <div className=" w-full md:w-[90%] relative rounded-lg p-5 md:p-20 bg-slate-300">
          <p className="Academic_intro tracking-wide text-sm md:text-base">
            <span>&#8220;</span>
            &#8201; Embark on a Journey of Intellectual Discovery: Dive into the
            World of [School Name]&apos;s Academic Excellence. Delve into our
            Diverse and Enriching Curriculum, Where Innovation Meets Tradition,
            and Every Student&apos;s Potential is Nurtured. From the Foundations
            of Knowledge to the Heights of Achievement, We Inspire Lifelong
            Learning and Prepare Tomorrow&apos;s Leaders. Join us on a Path of
            Academic Excellence, Where Every Mind Finds Its Wings to Soar.
            &#8201;<span>&quot;</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="p-5">
          <h1 className="text-2xl text-[#12372A] font-semibold">
            Academic Programs Overview:
          </h1>
        </div>
        <div className="md:mx-10 px-4">
          <p>
            At [School Name], we are committed to offering a diverse range of
            academic programs that cater to the individual needs and interests
            of our students. Our primary and secondary education levels provide
            a solid foundation for lifelong learning and success, emphasizing
            critical thinking, creativity, and collaboration.
          </p>
        </div>
        <div className="w-full h-fit md:h-[30rem] bg-transparent flex justify-center items-center">
          <div className="md:w-[80%] h-full bg-transparent rounded-lg overflow-hidden flex flex-col md:flex-row px-3 md:px-0">
            <div className="w-full md:w-1/2 relative h-1/2 md:h-full flex justify-center items-center bg-transparent group transition-all duration-500">
              <img
                className="w-full max-w-[30rem] md:max-w-full h-full object-cover"
                src="https://img.freepik.com/free-vector/colorful-education-concept-with-flat-design_23-2147898685.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais"
                alt="image"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-[#2120207f] hidden bg-opacity-25 group-hover:flex transition-all duration-500 justify-center text-white items-center">
                <h1 className="text-3xl font-semibold text-center">
                  Curriculum Structure and <br /> Approach
                </h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-[30rem] h-[18rem] md:max-w-full md:h-full bg-violet-400 flex justify-center items-center md:p-10 p-3 text-sm md:text-base">
              <p className="text-center md:tracking-wider">
                Our curriculum is designed to be rigorous, relevant, and
                responsive to the needs of the 21st-century learner. We follow a
                holistic approach to education, integrating core academic
                subjects with interdisciplinary learning experiences. Our
                innovative teaching methods and inquiry-based approach foster a
                love of learning and encourage students to explore their
                passions and interests.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5">
            <h1 className="text-xl md:text-2xl text-[#12372A] font-semibold">
              Academic Achievements
            </h1>
          </div>
          <div className="w-full min-h-[40rem] bg-transparent  flex justify-center items-center">
            <div className="w-[90%] grid  max-[566px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-cols-auto md:grid-rows-2 h-fit bg-transparent p-0 md:p-5 gap-10 justify-center items-center md:justify-start md:items-start">
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-64 relative overflow-hidden max-[566px]:m-auto  h-80 bg-blue-600"
                  >
                    <div className="academic_grid_card_inner flex justify-center items-center">
                    {item.image}
                    </div>
                    <div className="mt-[5.5rem] flex flex-col justify-center items-center px-5 gap-3">
                      <h1 className="text-center font-semibold">{item?.title}</h1>
                      <p className="text-center">{item?.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
