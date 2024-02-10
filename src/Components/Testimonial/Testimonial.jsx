import { testimonials } from "../../Services/constants";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="w-full  relative  h-fit overflow-x-hidden mt-7 bg-slate-200 pb-6">
      <div className="w-full text-3xl flex justify-center pt-2">
        <h1 className="text-center font-serif text-[20px] md:text-[30px] mt-2 underline">
          Our Testimonials
        </h1>
      </div>
      {/* card container */}
      <div className="card_wrapper w-full overflow-hidden md:min-h-[33rem] h-fit bg-transparent pb-5 flex justify-center md:gap-10 items-center flex-wrap">
        {testimonials.map((item, i) => {
          return (
            <div
              key={i}
              className=" text-card mt-20 md:mt-0 bg-white"
              data-aos="fade-left"
            >
              <div className="imgBx w-56 h-10">
                <img
                  src={item?.img}
                  alt=""
                  className="rounded-lg w-full h-ful object-cover"
                />
              </div>
              <div className="content">
                <h2>{item?.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, eligendi.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
