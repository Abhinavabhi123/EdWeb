import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutAchievements, aboutData } from "../../../../Services/constants";

export default function AboutPageBody() {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="w-full p- h-fit pb-5 bg-slate-200 md:mt-[10rem] mt-56">
        <div className="flex justify-center p-5">
          <h1 className="text-3xl font-serif ">About Us</h1>
        </div>
        {/* welcome section */}
        <div className="w-full px-5  md:px-36 py-5 flex flex-col space-y-8">
          <h2 className="text-xl text-[#12372A] font-semibold">
            Welcome to Ed-Web :
          </h2>
          <p className="px-5">
            At [School Name], we believe in nurturing young minds and empowering
            students to reach their fullest potential. With a rich history of
            academic excellence and a commitment to holistic education, we
            strive to create a nurturing and inclusive learning environment
            where every student can thrive.
          </p>
        </div>
        {/* mission */}
        <div className="w-full px-5 md:px-32 py-5 flex flex-col pb-10 bg-text_color md:flex-row space-y-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-xl text-[#fff] pb-3 font-semibold">
              Our Mission :
            </h2>
            <p className="px-5 text-white">
              Our mission at [School Name] is to provide a transformative
              educational experience that inspires intellectual curiosity,
              fosters critical thinking, and promotes lifelong learning. We aim
              to cultivate well-rounded individuals who are equipped with the
              knowledge, skills, and values to succeed in a rapidly changing
              world.
            </p>
          </div>
          <div className="w-full h-[100%] md:w-1/2 flex justify-center items-center">
            <img
              className="w-96 h-auto shadow-lg"
              src="/about mission.avif"
              alt="our mission"
              title="Our mission"
            />
          </div>
        </div>
        {/* Why choose */}
        <div className="w-full h-fit py-10">
          <div className="flex justify-start md:px-36 p-5 mb-3">
            <h1 className="text-xl text-[#12372A] font-semibold">
              Why Choose Our School?
            </h1>
          </div>
          <ScrollTrigger onEnter={() => setView(true)}>
            {view && (
              <div className="w-full h-[830px] min-[414px]:h-[43rem] min-[412px]:h-[10rem] md:h-[28rem] bg-transparent flex justify-center items-center">
                <div className="w-fit h-[90%] bg-transparent flex justify-center items-center py-3">
                  <div className="w-[2px] bg-black line h-0 transition-all"></div>
                  <div className="w-fit h-full bg-transparent py-3 flex flex-col justify-between">
                    {[1, 2, 3, 4].map((item, i) => {
                      return (
                        <ScrollTrigger key={i} onEnter={() => setView(true)}>
                          {view && (
                            <div
                              key={i}
                              className="arrow w-8 h-8 bg-transparent flex justify-start items-center"
                            >
                              <FaArrowRightLong />
                            </div>
                          )}
                        </ScrollTrigger>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[80%] h-full bg-transparent gap-5 flex flex-col justify-center overflow-hidden">
                  {aboutData.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-slate-300 flex md:h-24 h-fit py-5 flex-col justify-center ps-2 rounded-md space-y-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h3 className="font-semibold">{item?.title}</h3>
                        <p className="text-sm">{item?.content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </ScrollTrigger>
        </div>
        {/* Academic Excellence */}
        <div className="w-full mb-10">
          <div className="flex justify-start md:px-36 p-5 mb-3">
            <h1 className="text-xl text-[#12372A] font-semibold">
              Our Achievements :
            </h1>
          </div>
          <div className="w- flex flex-col md:flex-row  justify-center items-center gap-10 md:gap-32 flex-wrap overflow-hidden">
            {aboutAchievements.map((item, i) => {
              return (
                <div
                  className="w-80 h-80 relative achieve_image group cursor-pointer overflow-hidden drops shadow-[#12372A] rounded-md"
                  data-aos="fade-left"
                  key={i}
                >
                  <img
                    src={item?.img}
                    className="w-full h-full object-cover"
                    alt={item?.title}
                    title={item?.title}
                  />
                  <div className="flex flex-col justify-center items-center  w-full h-full translate-y-10 group-hover:-translate-y-2 transition-all duration-500 z-10 ps-[-10px] space-x-4 left-[-10px] absolute p-10 top-0 gap-5 ">
                    <h1 className="text-center  font-semibold text-xl  text-white">
                      {item?.title}
                    </h1>
                    <p className="opacity-0  text-center group-hover:opacity-100 text-white  transition-all duration-300">
                      {item?.content}
                    </p>
                    {item?.button && (
                      <button className="px-3 opacity-0  group-hover:opacity-100 py-2  transition-all duration-300 bg-yellow-500 text-white rounded-lg">
                        Know More
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Community Management */}
      <div className="flex flex-col community  mt-5 md:px-32 px-3">
        <div className="flex  justify-start mb-3">
          <h1 className="text-xl text-[#12372A] font-semibold">
            Community Engagement
          </h1>
        </div>
        <div>
          <p>
            At [School Name], we recognize the importance of fostering strong
            partnerships with parents, alumni, and the wider community. We
            actively encourage parental involvement in their child&apos;s
            education and offer opportunities for community service and outreach
            initiatives.
          </p>
        </div>
      </div>
      {/* Join */}
      <div className="flex flex-col community  mt-10 md:px-32 px-2">
        <div className="flex  justify-start mb-3">
          <h1 className="text-xl text-[#12372A] font-semibold">Join Us!</h1>
        </div>
        <div>
          <p>
            We invite you to join the [School Name] family and experience the
            difference of a truly exceptional education. Whether you&apos;re a
            prospective student, parent, educator, or community member, we
            welcome you to explore our website, visit our campus, and discover
            all that [School Name] has to offer.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-3 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}
