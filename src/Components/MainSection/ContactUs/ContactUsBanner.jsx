import "./ContactUs.css";

export default function ContactUsBanner() {
  return (
    <div className="w-full min-h-[30rem] contact_us_banner">
      <div className="md:w-1/2 w-full min-h-1/2 relative md:h-full flex items-center justify-center text-white flex-col p-10 px-5 md:m-20 space-y-10 overflow-hidden">
        <div className="w-full">
          <h1
            className="text-[30px] md:text-5xl font-serif "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Reach Out and Connect <br /> with Us
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
          At [School Name], we value open communication and welcome the
          opportunity to connect with you. Whether you&apos;re a prospective
          student, parent, alumni, or community member, we&apos;re here to
          answer your questions, address your concerns, and assist you in any
          way we can.
        </p>
      </div>
    </div>
  );
}
