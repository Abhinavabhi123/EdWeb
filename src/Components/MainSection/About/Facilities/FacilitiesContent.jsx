import { facilityData } from "../../../../Services/constants";
import "./facilities.css";

export default function FacilitiesContent() {
  return (
    <div className="w-full mt-5 md:px-16  pt-5">
      <div className="w-full">
        <div className="flex p-5">
          <h1 className="text-2xl text-[#12372A] font-semibold">
            Empowering Tomorrow&apos;s Leaders Through Exceptional Facilities
          </h1>
        </div>
        <div className="flex md:px-10 flex-col p-8 space-y-5 rounded-lg bg-slate-200 ">
          <p>
            Discover the unparalleled facilities at [School Name], designed to
            foster holistic development and empower students for a future of
            success. Our state-of-the-art campus provides an enriching
            environment where learning extends beyond the classroom.
          </p>
          <p>
            At [School Name], we believe that a conducive atmosphere is
            essential for nurturing young minds. Our facilities are meticulously
            crafted to cater to the diverse needs and interests of our students,
            ensuring an immersive learning experience at every step of their
            educational journey.
          </p>
          <p>
            From well-equipped laboratories for hands-on scientific exploration
            to expansive libraries filled with a vast array of resources, we
            provide the tools necessary for students to explore their passions
            and expand their horizons. Our sports facilities promote physical
            health and teamwork, while art studios and performance spaces foster
            creativity and self-expression.
          </p>
          <p>
            Moreover, our commitment to sustainability is reflected in our
            eco-friendly campus initiatives, demonstrating our dedication to
            environmental stewardship and instilling in our students a sense of
            responsibility towards the planet.
          </p>
          <p>
            At [School Name], we understand that the learning environment plays
            a pivotal role in shaping students&apos; futures. That&apos;s why we
            continuously strive to enhance our facilities, ensuring that every
            student has the opportunity to thrive and reach their fullest
            potential in a supportive and inspiring setting.
          </p>
        </div>
      </div>
      <div className="w-full  md:h-[25rem] h-[15rem] bg-transparent mt-5">
        <div className="w-full h-full flex">
          {facilityData[0]?.map((item, i) => {
            return (
              <div
                key={i}
                className="h-full relative  w-1/4 hover:w-full overflow-hidden  md:hover:w-1/2 group hover:bg-blue-300 transition-all duration-700"
              >
                <img
                  className="w-full h-full relative image_shade"
                  src={item?.img}
                  alt="image"
                />
                <div className="absolute w-full h-full bg-[#000000a5] top-0 hidden group-hover:block transition-all duration-500"></div>
                <div className="absolute w-full h-full top-0 flex  flex-col px-5 items-center translate-y-10 md:translate-y-32 gap-4">
                  <h1 className="text-white text-center font-semibold md:text-2xl">
                    {item?.title}
                  </h1>
                  <p className="text-white opacity-0 text-xs md:text-base group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-700 font-semibold text-center">
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:h-[25rem] h-[15rem] bg-transparent">
        <div className="w-full h-full flex">
          {facilityData[1]?.map((item, i) => {
            return (
              <div
                key={i}
                className="h-full relative  w-1/4 hover:w-full md:hover:w-1/2 group hover:bg-blue-300 transition-all duration-700"
              >
                <img
                  className="w-full h-full relative image_shade"
                  src={item?.img}
                  alt="image"
                />
                <div className="absolute w-full h-full bg-[#000000a5] top-0 hidden group-hover:block transition-all duration-500"></div>
                <div className="absolute w-full h-full top-0 flex  flex-col px-5 items-center translate-y-10 md:translate-y-32 gap-4">
                  <h1 className="text-white text-center font-semibold md:text-2xl">
                    {item?.title}
                  </h1>
                  <p className="text-white opacity-0 text-xs md:text-base group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-700 font-semibold text-center">
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
