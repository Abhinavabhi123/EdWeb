import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { sliderData } from "../../../../Services/constants";

export default function TestimonialContent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const SliderComponent = (Props) => {
    const { image, content } = Props;
    return (
      <div className="testimonial-slide">
        <div className="md:w-[90%] w-full h-full bg-transparent">
          {/* image div */}
          <div className="md:w-[25%] w-[50%] md:h-[70%] md:float-left float-top">
            <img
              className="w-full h-full object-cover ms-[50%] md:ms-0"
              src={image}
              alt="image"
            />
          </div>
          {/* Content div */}
          <div className="md:w-[75%] h-[70%] float-left bg-transparent space-y-5 p-10">
            <h1 className="text-3xl">********</h1>
            <div className="w-28 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-md"></div>
            <p>{content}</p>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mt-5 md:px-16">
      <div className="px-5">
        <h1 className="text-2xl text-[#12372A] font-semibold">Testimonials</h1>
      </div>
      <div className="w-full h-[28rem] mt-10 md:mt-0 flex justify-center items-center ">
        <Slider {...settings} className="w-[90%]">
          <SliderComponent
            image={sliderData[0].image}
            content={sliderData[0].content}
          />
          <SliderComponent
            image={sliderData[1].image}
            content={sliderData[1].content}
          />
          <SliderComponent
            image={sliderData[2].image}
            content={sliderData[2].content}
          />
          <SliderComponent
            image={sliderData[3].image}
            content={sliderData[3].content}
          />
        </Slider>
      </div>
      <div className="px-5">
        <div className="p-5">
          <h1 className="text-2xl text-[#12372A] font-semibold">Conclusion</h1>
        </div>
      </div>
      <div className="px-10 md:px-20 space-y-5 rounded-lg bg-slate-200 py-7">
        <p>
          At [School Name], our community is built on a foundation of shared
          experiences, achievements, and moments of growth. Our testimonials
          section is a testament to the incredible journeys of our students,
          parents, alumni, and partners who have been touched by the
          transformative power of education within our school walls.
        </p>
        <p>
          Each testimonial is a heartfelt reflection of the unique and
          meaningful connections forged within our vibrant learning community.
          From students who have discovered their passions and unlocked their
          potential to parents who have witnessed their children thrive
          academically and personally, these testimonials offer a glimpse into
          the profound impact of a [School Name] education.
        </p>
        <p>
          Through inspiring stories of perseverance, triumph, and personal
          growth, our testimonials showcase the unwavering dedication of our
          faculty and staff who go above and beyond to support student success.
          They highlight the innovative programs, enriching experiences, and
          nurturing environment that define the [School Name] experience and
          empower our students to reach new heights.
        </p>
      </div>
    </div>
  );
}
