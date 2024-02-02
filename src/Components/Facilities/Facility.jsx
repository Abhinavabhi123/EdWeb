import "./Facility.css";
import classroom from "/facility/classroom.png";
import laboratory from "/facility/laboratory.png";
import library from "/facility/library.png";
import sports from "/facility/sports.png";
import mask from "/facility/theatre-mask.png";
import cookie from "/facility/cookie.png";
import security from "/facility/security.png";
import school from "/facility/school.png";
import transportation from "/facility/transportation.png";
import { useEffect, useState } from "react";

const Card = (Props) => {
    const {img,title,text} =Props
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const targetScrollPosition = 1550; 
  
        if (scrollTop > targetScrollPosition) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className="w-full md:min-h-[17.2rem] max-h-[10rem] overflow-hidden bg-[#BFD8AF] bg-opacity-50 flex pb-5 rounded-lg" data-aos="fade-up">
      <div className="h-full w-[50px] bg-transparent pt-6 flex  justify-center items-start">
        <img src={img} alt="" className={`${isScrolled?"animate":""} w-8`} />
      </div>
      <div className="h-full w-[100%] bg-transparent flex items-center  justify-center">
        <div className="bg-transparent w-[90%] h-[90%] p-4 flex flex-col items-center rounded-lg ">
          <h2 className="">{title}</h2>
          <p className="text-sm md:text-base">
           {text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default function Facility() {
    
  return (
    <div className="w-100% md:min-h-[56rem] h-fit bg-[#E1F0DA] bg-opacity-50 pb-8 mt-3">
      <div className="w-full h-20 bg-transparent flex justify-center items-center">
        <h1 className="text-text_color text-xl md:text-3xl font-semibold">Facilities</h1>
      </div>
      {/* wrapper */}
      <div className="facility_wrapper w-full h-fit bg-transparent flex  px-16 max-[760px]:px-5 max-[760px]:flex-col gap-1">
        {/* left section */}
        <div className="w-1/3 max-[760px]:w-full h-full bg-transparent flex flex-col gap-1">
          {/* section 1 */}
          <Card img={classroom} title={"State-of-the-Art Classrooms"} text={"Our school is equipped with modern, spacious classrooms that provide a comfortable and engaging learning environment. Each classroom is furnished with ergonomic seating, interactive whiteboards, and cutting-edge technology to enhance the learning experience."}/>
          {/* section 2 */}
          <Card img={laboratory} title={"Science and Computer Labs s"} text={"Explore the wonders of science and technology in our well-equipped laboratories. Our dedicated science labs are stocked with the latest equipment and tools, fostering hands-on experimentation and scientific inquiry. Additionally, our computer labs are equipped with high-speed internet and up-to-date software."}/>
          {/* section 3 */}
          <Card img={library} title={"Library and Resource Center"} text={"Immerse yourself in a world of knowledge at our extensive library. Our collection includes a diverse range of books, journals, and multimedia resources to support academic research and recreational reading. The library serves as a quiet and inspiring space for independent study."}/>
        </div>
        {/* center section */}
        <div className="w-1/3 max-[760px]:w-full h-full bg-transparent flex flex-col border-l-2 border-r-2 gap-1">
          {/* section 1 */}
          <Card img={sports} title={"Sports and Fitness Facilities"} text={"Promoting a healthy and active lifestyle, our school offers top-notch sports and fitness facilities. From well-maintained sports fields to indoor fitness areas, students have the opportunity to participate in various physical activities, promoting teamwork and well-being."} />
          {/* section 2 */}
          <Card img={mask} title={"Arts and Cultural Spaces"} text={"Nurture creativity and self-expression in our dedicated arts and cultural spaces. Our school boasts art studios, music rooms, and performance spaces where students can explore their artistic talents. Regular cultural events and performances showcase the diverse talents within our school community."} />
          {/* section 3 */}
          <Card  img={cookie} title={"Cafeteria and Nutrition"} text={"Our school cafeteria provides nutritious and delicious meals to fuel the minds and bodies of our students. We prioritize offering a variety of healthy food options to accommodate different dietary needs and preferences."} /> 
        </div>
        {/* Right section */}
        <div className="w-1/3 max-[760px]:w-full h-full bg-transparent flex flex-col gap-1">
          {/* section 1 */}
          <Card  img={security} title={"Safety and Security"} text={"The safety of our students is our top priority. Our school is equipped with state-of-the-art security systems, including surveillance cameras, secure entry points, and trained security personnel, ensuring a safe and secure learning environment."} /> 
          {/* section 2 */}
          <Card img={school} title={"Green Campus"} text={"We take pride in our eco-friendly campus, surrounded by greenery and sustainable landscaping. Our commitment to environmental stewardship is reflected in initiatives such as recycling programs, energy-efficient facilities, and outdoor learning spaces."} />
          {/* section 3 */}
          <Card img={transportation} title={"Transportation Services"} text={"To ensure convenience for our students, we offer reliable transportation services. Our fleet of buses is equipped with safety measures, and experienced drivers ensure a secure and comfortable commute to and from school."} />
        </div>
      </div>
    </div>
  );
}
