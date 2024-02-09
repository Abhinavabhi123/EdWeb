import "./academic_main.css";

export default function AcademicMainBanner() {
  return (
    <div className="w-full min-h-[35rem] flex items-center academic_main_banner">
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Nurturing Minds, Shaping Futures
          </h1>
        </div>
        <div className="w-full h-fit content-start">
          <div className="w-32 h-1 rounded-md bg-gradient-to-r from-blue-400  to-violet-500"></div>
        </div>
        <p
          className="leading-7 tracking-wider"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          At [School Name], academic excellence is at the heart of everything we
          do. Our dedicated faculty and staff are committed to providing a
          dynamic and enriching learning environment where students are
          empowered to explore, discover, and achieve their full potential. With
          a rigorous curriculum, innovative teaching methods, and a focus on
          personalized learning, we inspire a lifelong love of learning and
          equip students with the knowledge, skills, and values
        </p>
      </div>
    </div>
  );
}
