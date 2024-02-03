import "./education.css";

const data = [
  {
    title: "Elementary",
    img: "/Students 1.webp",
    content:
      "Elementary education is for a duration of 8 years. The children under elementary schooling cater to the age group of 6-13 years, from classes I-VIII.",
    logo: "/book.gif",
  },
  {
    title: "Middle School",
    img: "/Students 2.webp",
    content:
      "Where students often stay with one or two teachers for most of the school day, middle school is usually the first time in which students change teachers after each class.",
    logo: "/assignment.gif",
  },
  {
    title: "High School",
    img: "/Students 3.webp",
    content:
      "A high school is a secondary school, where teenagers are educated before starting college or getting jobs. Most high schools have four numbered grades.",
    logo: "/success.gif",
  },
];

export default function Education() {
  return (
    <div className="w-full flex flex-col">
       <div className="w-full h-10 bg-white flex items-center mb-1 justify-center">
        <h1 className="text-[20px] md:text-[30px] font-bold underline text-text_color">
          Syllabus
        </h1>
      </div>
      <div className="w-[100%] h-fit flex  justify-center items-center flex-col md:flex-row flex-wrap px-3 gap-8 md:px-20 bg-transparent my-10 overflow-hidden">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="min-w-[20rem] md:max-w-[22rem] h-[18rem] card rounded-md"
              data-aos="fade-left"
            >
              <img
                src={item?.img}
                alt="student img1"
                className="w-full h-full object-cover card_image rounded-md"
              />

              <h2 className="main_text">{item?.title}</h2>
              <div className="clip">
                <div className="w-full h-[25%] flex items-center justify-between ps-3 pe-20 pt-3 rounded-tl-md clip_text ">
                  <div className="w-[50%] h-full">
                    <img src={item?.logo} alt="" className="w-8 md:10" />
                  </div>
                  <div className="w-[50%] h-full flex justify-start">
                    <h2>{item?.title}</h2>
                  </div>
                </div>
                <div className="w-full h-[75%] bg-transparent p-8">
                  <p className="text-white ">{item?.content}</p>
                  <button className="py-2 px-5 bg-[#00bfff] mt-2 md:mt-4 rounded-md text-white">
                    Click
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
