import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import "./Courses.css";
import { courseData } from "../../Services/constants";

export default function Courses() {
  const [view, setView] = useState(false);

  return (
    <section className="course_section">
      <div className="header flex flex-col justify-center items-center text-2xl">
        <h1 className="text-center md:text-4xl font-serif">
          Empower Your Future with the Perfect <br /> Course Selection
        </h1>
      </div>
      <div className="content text-center md:mx-32 my-4">
        Embark on a journey of knowledge and self-discovery by selecting the
        course that ignites your passion and fuels your aspirations. Choose the
        path that aligns with your dreams, and unlock the door to a future where
        every lesson is a stepping stone toward excellence. The power to shape
        your destiny is in your hands; dare to choose the extraordinary, and let
        your academic journey be a masterpiece of purpose and achievement.
      </div>
      <div className="show_div"></div>
      <div className="counter overflow-hidden">
        {courseData.map((item, index) => (
          <div key={index} className="counter_div" data-aos="fade-left">
            <img src={item?.icon} alt="card icon" />
            <ScrollTrigger
              onEnter={() => setView(true)}
              // onExit={() => setView(false)}
            >
              {view ? (
                <h1 className="font-bold text-2xl transition-all duration-1000">
                  <CountUp start={0} end={item?.count} duration={3} delay={0} />
                </h1>
              ) : (
                <h2 className="text-2xl font-bold">{item?.count}</h2>
              )}
            </ScrollTrigger>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
