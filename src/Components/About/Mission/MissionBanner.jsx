import "./mission.css";

export default function Mission() {
  return (
    <div className="w-full h-[35rem] mission_banner ">
      {/* Banner div */}
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            School Mission and Vision:
          </h1>
        </div>
        <div className="w-full h-fit content-start">
          <div className="w-32 h-1 rounded-md bg-gradient-to-r from-yellow-400  to-red-500"></div>
        </div>
        <p className="leading-7 tracking-wider" data-aos="fade-up" data-aos-duration="1200">
          At [School Name], our mission is to inspire a passion for learning,
          empower students to reach their full potential, and foster a sense of
          curiosity, creativity, and resilience. We envision a future where
          every student emerges as a confident and compassionate global citizen,
          equipped with the knowledge, skills, and values to thrive in an
          ever-changing world.
        </p>
      </div>
    </div>
  );
}
