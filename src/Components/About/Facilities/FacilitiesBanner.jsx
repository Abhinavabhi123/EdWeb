import "./facilities.css";

export default function FacilitiesBanner() {
  return (
    <div className="w-full min-h-[35rem] facilities_banner flex items-center">
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Facilities at Our School
          </h1>
        </div>
        <div className="w-full h-fit content-start">
          <div className="w-32 h-1 rounded-md bg-gradient-to-r from-yellow-400  to-red-500"></div>
        </div>
        <p
          className="leading-7 tracking-wider"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Welcome to [School Name], where we pride ourselves on providing
          state-of-the-art facilities to support the academic, athletic, and
          extracurricular needs of our students. Our commitment to excellence
          extends beyond the classroom, ensuring that every aspect of our school
          environment contributes to a positive and enriching educational
          experience.
        </p>
      </div>
    </div>
  );
}
