import "./testimonial.css";

export default function TestimonialBanner() {
  return (
    <div className="w-full h-[35rem] testimonial_banner">
      {/* Banner div */}
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Celebrating Success Stories
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
          At [School Name], our community is built on a foundation of shared
          experiences, achievements, and moments of growth. Our testimonials
          section is a testament to the incredible journeys of our students,
          parents, alumni, and partners who have been touched by the
          transformative power of education within our school walls.
        </p>
      </div>
    </div>
  );
}
