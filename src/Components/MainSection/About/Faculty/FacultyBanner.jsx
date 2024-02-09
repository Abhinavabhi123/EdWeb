import "./faculty.css";

export default function FacultyBanner() {
  return (
    <div className="w-full min-h-[35rem] faculty_banner flex items-center">
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Faculty and Staff
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
          At [School Name], we are proud to have a team of dedicated educators
          and support staff who are committed to providing an exceptional
          learning experience for our students. Our faculty members bring a
          wealth of knowledge, expertise, and passion to their roles, while our
          administrative and support staff ensure the smooth operation of the
          school on a daily basis.
        </p>
      </div>
    </div>
  );
}
