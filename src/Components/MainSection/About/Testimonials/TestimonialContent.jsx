import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";

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

  const sliderData = [
    {
      image:
        "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=900&t=st=1706862410~exp=1706863010~hmac=8f99c6762f687c418b39c20c4794d278647b0e6c9086179fccb3d23d804bc84e",
      content:
        "Sending my child to [School Name] was the best decision I ever made. The caring teachers, engaging curriculum, and supportive community have truly made a difference in my child's life. - Parent",
    },
    {
      image:
        "https://img.freepik.com/free-photo/businessman-black-suit-makes-thumbs-up_114579-15900.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      content:
        "I'll always be grateful to [School Name] for helping me discover my passion for learning. The opportunities for growth and the encouragement from teachers have shaped me into the person I am today. - Alumni",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/businesswoman-suit-against-staircase-created-with-generative-ai-technology_132358-13230.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      content:
        "I've watched my child flourish at [School Name]. The nurturing environment, challenging academics, and emphasis on character development have prepared my child for success. - Parent",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/woman-holds-laptop-with-white-background_124185-4367.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      content:
        "The dedication and commitment of the faculty at [School Name] are unmatched. They not only teach subjects but also instill values that guide us throughout our lives. - Alumni",
    },
  ];

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
