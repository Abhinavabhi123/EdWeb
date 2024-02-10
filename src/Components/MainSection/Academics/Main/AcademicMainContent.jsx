import "./academic_main.css";
import { MdOutlineSportsScore, MdOutlineClass } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { PiGraphBold } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

export default function AcademicMainContent() {
  const data = [
    {
      image: <MdOutlineSportsScore size={50} />,
      content:
        "Our students consistently achieve high scores on standardized tests, demonstrating their mastery of core academic subjects and readiness for college and career success.",
      title: "High Test Scores",
    },
    {
      image: <FaAward size={40} />,
      content:
        "Many of our students are recipients of prestigious scholarship awards, recognizing their academic achievements, leadership qualities, and contributions to the community.",
      title: "Scholarship Awards",
    },
    {
      image: <MdOutlineClass size={40} />,
      content:
        "Our graduates are routinely accepted into top colleges and universities across the country and around the world, reflecting the quality of education they receive at [School Name].",
      title: "College Acceptances",
    },
    {
      image: <BsGraphUpArrow size={30} />,
      content:
        "Our AP and IB programs have a track record of success, with students earning impressive scores on exams and receiving college credit for their coursework.",
      title: "Advanced Placement Success",
    },
    {
      image: <FaBookReader size={40} />,
      content:
        "Our students regularly participate and excel in STEM competitions, showcasing their innovation, problem-solving skills, and teamwork.",
      title: "STEM Competitions",
    },
    {
      image: <MdDraw size={40} />,
      content:
        "Our arts programs have received recognition at the local, regional, and national levels, with students earning awards and accolades for their creativity and artistic talent.",
      title: "Arts Recognition",
    },
    {
      image: <IoMdSearch size={40} />,
      content:
        "Our students and faculty engage in cutting-edge research and scholarly activities, contributing to advancements in their fields and earning recognition for their work.",
      title: "Research and Publications",
    },
    {
      image: <PiGraphBold size={40} />,
      content:
        "We emphasize the importance of giving back to the community, and our students actively participate in service projects and initiatives that make a positive impact on society.",
      title: "Community Engagement",
    },
  ];

  const extraData = [
    {
      image:
        "https://img.freepik.com/free-photo/front-view-trainer-talking-players_23-2149742084.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Sports Teams",
      desc: "We offer a wide range of sports teams for students to participate in, including basketball, soccer, volleyball, track and field, swimming, tennis, and more. Our dedicated coaches provide expert instruction and guidance, helping students develop teamwork, discipline.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/artist-using-watercolor-paint-his-art-studio_23-2150213622.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Fine Arts Programs",
      desc: "Our fine arts programs encompass a variety of artistic disciplines, including visual arts, performing arts, and music. Students can participate in art clubs, theater productions, choir, band, orchestra, and dance, allowing them to express their creativity and showcase their talents.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/diverse-education-shoot_53876-54692.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Academic Clubs",
      desc: "We offer a diverse array of academic clubs and organizations that cater to students' interests and passions. From math and science clubs to debate and robotics teams, these clubs provide opportunities for intellectual growth, collaboration, and friendly.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/medium-shot-volunteers-helping-environment_23-2149181964.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Community Service",
      desc: "Giving back to the community is an integral part of the [School Name] experience. Students have the opportunity to participate in community service projects and initiatives, such as volunteering at local charities, organizing fundraisers, and participating in environmental clean-up efforts.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/group-diverse-kids-drawing-chalkboard-together_53876-42174.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Cultural Clubs",
      desc: " Our school celebrates diversity and multiculturalism through cultural clubs and organizations. Students can join clubs dedicated to exploring different cultures, languages, and traditions, fostering cross-cultural understanding and appreciation.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-students-learning-library-bookshelves_1150-10555.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Leadership Opportunities",
      desc: "We empower students to become leaders in their school and community through leadership development programs and opportunities. Students can participate in student government, peer mentoring programs, and leadership workshops, gaining valuable leadership skills.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/full-shot-happy-kids-playing-bowling_23-2149199860.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      title: "Special Interest Clubs",
      desc: "From photography and chess clubs to gardening and coding clubs, we offer a variety of special interest clubs to cater to students' unique hobbies and interests. These clubs provide a supportive and inclusive environment for students to pursue their passions and connect. ",
    },
    {
      image:
        "https://img.freepik.com/free-photo/team-mates-holding-golden-trophy-together_23-2148631464.jpg?w=996&t=st=1707537237~exp=1707537837~hmac=781c451919b794d9a51ac75fb8ceee756d2a8dcdf2008e7e375b106fe338652b",
      title: "Competitions and Events",
      desc: "Throughout the year, we host a variety of competitions, events, and extracurricular activities that allow students to showcase their talents and interests. These include academic competitions, talent shows, cultural festivals, and more, providing students with opportunities to shine.",
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
                    className="w-64 relative overflow-hidden max-[566px]:m-auto  h-80 bg-slate-200"
                    data-aos="slide-up"
                  >
                    <div className="academic_grid_card_inner flex justify-center items-center">
                      {item.image}
                    </div>
                    <div className="mt-[5.5rem] flex flex-col justify-center items-center px-5 gap-3">
                      <h1 className="text-center font-semibold">
                        {item?.title}
                      </h1>
                      <p className="text-center">{item?.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full space-y-5">
          <div className="p-5">
            <h1 className="text-xl md:text-2xl text-[#12372A] font-semibold">
              Extracurricular Activities
            </h1>
          </div>
          <div className="md:mx-10 px-6">
            <p>
              Extracurricular Activities at [School Name]: At [School Name], we
              believe that education extends beyond the classroom walls. Our
              extracurricular activities offer students the opportunity to
              explore their interests, develop new skills, and build meaningful
              connections with their peers. From sports and arts to clubs and
              community service, there&apos;s something for everyone to enjoy.
              Here are some of the extracurricular activities available at our
              school:
            </p>
          </div>
          <div className="w-full min-h-[30rem] bg-transparent flex justify-center items-center">
            <div className="w-[90%] bg-transparent grid  max-[566px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-cols-auto md:grid-rows-2 h-fit p-0 md:p-5 gap-10 justify-center items-center md:justify-start md:items-start">
              {extraData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-64 relative h-80 max-[566px]:m-auto group overflow-hidden"
                    data-aos="fade-left "
                  >
                    <img
                      src={item?.image}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute w-full h-full bg-[#00000082] top-0 left-0 flex justify-center items-center flex-col">
                      <div className="w-full h-16 flex justify-center items-center">
                        <h2 className="text-xl text-white font-semibold">
                          {item?.title}
                        </h2>
                      </div>
                      <div className="w-full h-60 bg-transparent px-4">
                        <p className="text-center text-white translate-y-28 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                          {item?.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* curriculum and courses */}
        <div className="w-full space-y-5">
          <div className="p-5">
            <h1 className="text-xl md:text-2xl text-[#12372A] font-semibold">
              Curriculum and Courses
            </h1>
          </div>
          <div className="md:mx-10 px-6">
            <p>
              At [School Name], we offer a comprehensive and dynamic curriculum
              designed to prepare students for success in an ever-changing
              world. Our curriculum emphasizes academic excellence, critical
              thinking, creativity, and practical skills development.
              Here&apos;s an overview of our curriculum and the courses we
              offer:
            </p>
          </div>
          <div className="w-full md:h-[27rem] h-fit bg-transparent p-5 md:p-0 flex flex-col md:flex-row justify-center">
            <div className="w-full  md:w-fit h-1/2 md:h-full bg-transparent flex justify-center items-center">
              <img
                className="md:max-w-full h-full object-contain"
                src="https://img.freepik.com/premium-vector/education-concept-background-icons-education-equipment-graduation-science-abstract-education-background-vector-illustration_153097-3121.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais"
                alt="image"
              />
            </div>
            <div className="w-full md:w-2/3 h-fit md:h-full relative bg-transparent">
              {/* <img
                src="/background.svg"
                className="w-full relative h-full"
                alt="image"
              /> */}
              <div className="w-full  h-full bg-[#0000001b] top-0 left-0 md:p-10 p-4 space-y-6">
                <h3 className="font-semibold">Core Academic Subjects</h3>
                <p className="text-sm md:text-base">
                  We offer a range of Advanced Placement (AP) and International
                  Baccalaureate (IB) courses for students seeking advanced
                  academic challenges and college-level coursework. These
                  programs provide students with the opportunity to earn college
                  credit and demonstrate their readiness for higher education.
                </p>
                <ul className="text-sm md:text-base list-disc ps-5">
                  <li>English Language Arts</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Studies</li>
                  <li>Foreign Languages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Career and Technical Education  */}
        <div className="w-full ">
          <div className="md:p-10 p-4">
            <h3 className="font-semibold">
              Career and Technical Education (CTE)
            </h3>
            <div className="p-5">
              <p className="text-sm md:text-base">
                At [School Name], we understand the importance of preparing
                students for success in both college and career pathways. Our
                Career and Technical Education (CTE) program offers students the
                opportunity to explore various career fields, gain hands-on
                experience, and develop valuable skills that are in high demand
                in today&apos;s workforce. Whether students are interested in
                business, technology, healthcare, or the trades, our CTE program
                provides pathways to success and empowers students to achieve
                their goals.
              </p>
            </div>
            <div className="w-full md:min-h-[35rem] md:px-16 bg-transparent  flex flex-col md:flex-row">
              <div className="md:w-[60%] h-full bg-transparent ">
                <div className="w-full h-2/3 bg-[#EEEDEB] md:rounded-tl-lg p-2 ps-9 space-y-3">
                  <h2 className="font-semibold"> Diverse Course Offerings</h2>
                  <p className="text-sm md:text-base">
                    Our CTE program features a diverse range of courses designed
                    to meet the needs and interests of our students. From
                    introductory courses to advanced training programs, students
                    have the opportunity to explore a wide variety of career
                    pathways. Some of our most popular CTE courses include:
                  </p>
                  <ul className="ps-8 list-disc text-sm">
                    <li>Business Management and Entrepreneurship</li>
                    <li>Information Technology and Computer Science</li>
                    <li>Health Sciences and Medical Careers</li>
                    <li>Culinary Arts and Hospitality Management</li>
                    <li>Automotive Technology and Engineering</li>
                    <li>Construction Trades and Building Technology</li>
                    <li>Graphic Design and Digital Media</li>
                    <li>Environmental Science and Sustainability</li>
                  </ul>
                </div>
                <div className="w-full h-1/3 bg-[#BFD8AF] md:rounded-bl-lg md:p-[2.4rem] p-5">
                  <h2 className="font-semibold">
                    Hands-On Learning Experiences
                  </h2>
                  <p className="text-sm md:text-base">
                    One of the hallmarks of our CTE program is its emphasis on
                    hands-on learning experiences. Through internships, job
                    shadowing opportunities, and work-based learning
                    experiences, students have the chance to apply classroom
                    knowledge in real-world settings and gain valuable industry
                    experience. Our state-of-the-art facilities and
                    industry-standard equipment provide students with the tools
                    and resources they need to succeed in their chosen career
                    fields.
                  </p>
                </div>
              </div>
              <div className="md:w-[40%] h-full bg-[#EBE3D5] md:rounded-r-lg p-5">
                <h2 className="font-semibold">
                  Industry Partnerships and Certifications
                </h2>
                <p className="text-sm md:text-base">
                  We are proud to partner with local businesses, industry
                  organizations, and professional associations to enhance our
                  CTE program and provide students with valuable networking
                  opportunities and industry connections. Many of our CTE
                  courses offer industry-recognized certifications and
                  credentials, giving students a competitive edge in the job
                  market and opening doors to exciting career opportunities. Our
                  dedicated faculty and staff are committed to supporting
                  students every step of the way as they explore their
                  interests, develop their skills, and pursue their career
                  aspirations through our CTE program.
                </p>
                <div className="justify-center items-center mt-6 flex">
                  <img
                    className="w-80"
                    src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595850.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* Last Section */}
            <div className="px-5 py-10">
              <div className="pb-5">
                <h2 className="font-semibold">Conclusion</h2>
              </div>
              <div>
                <p className="text-center">
                  At [School Name], we believe that extracurricular activities
                  are an essential component of a well-rounded education.
                  Through participation in these activities, students develop
                  important life skills, form lasting friendships, and create
                  cherished memories that will stay with them long after
                  graduation. We encourage all students to get involved and make
                  the most of their [School Name] experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
