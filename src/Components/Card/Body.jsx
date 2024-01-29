import "./Body.css";

export default function Body() {
  return (
    <div className="body_card_wrapper pb-10 md:pb-5 md:pt-[2rem]">
      <div className="body_card mb-10  overflow-hidden w-[90%] md:w-[380px] group/item1 md:h-[20rem]">
        <div className="static_text">
          <h1>Elementary </h1>
        </div>
        <img src="/Students 1.webp" alt="img1" />
        <div className="card_info  ">
          <div className="inner p-2 flex flex-col  md:px-5 md:pt-5 md:h-[16rem] h-[17rem] transform rounded-2xl ">
            <h1>Elementary </h1>
            <p>
              Elementary education is for a duration of 8 years. The children
              under elementary schooling cater to the age group of 6-13 years,
              from classes I-VIII. 
            </p>
            <p
              className="w-20 text-center  md:h-20 py-2  rounded-md bg-text_color"
              href=""
            >
              Check
            </p>
          </div>
        </div>
      </div>
      <div className="body_card w-[90%] mb-5 md:w-[380px] md:mb-0 md:h-[20rem]">
        <div className="static_text">
          <h1 className="text-yellow-400 ">Middle School</h1>
        </div>
        <img src="/Students 2.webp" alt="img2" />
        <div className="card_info">
          <div className="inner px-2 md:px-5  rounded-2xl h-[16rem] md:h-[16rem] transform ">
            <h1>Middle School</h1>
            <p>
              Where students often stay with one or two teachers for most of the
              school day, middle school is usually the first time in which
              students change teachers after each class.
            </p>
            <p
              className="w-20 text-center mt-[-10px] pt-2 md:mt-2 rounded-md h-10 bg-text_color"
              href=""
            >
              Check
            </p>
          </div>
        </div>
      </div>
      <div className="body_card w-[90%] md:w-[380px] md:h-[20rem]">
        <div className="static_text">
          <h1>High School</h1>
        </div>
        <img src="/Students 3.webp" alt="img3" />
        <div className="card_info">
          <div className="inner px-3 rounded-2xl md:pt-2 pt-1   h-[16rem] transform">
            <h1>High School</h1>
            <p>
              A high school is a secondary school, where teenagers are educated
              before starting college or getting jobs. Most high schools have
              four numbered grades.
            </p>
            <p
              className="w-20 text-center pt-2 mt-[-10px] md:mt-3 h-10 rounded-md bg-text_color"
              href=""
            >
              Check
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
