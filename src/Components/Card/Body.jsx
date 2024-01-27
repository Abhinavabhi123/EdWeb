import "./Body.css";

export default function Body() {
  return (
    <div className="body_card_wrapper pb-10 md:pb-5 md:pt-[2rem]">
      <div className="body_card mb-10 overflow-hidden w-[90%] md:w-[380px] group/item1 md:h-[29rem]">
        <img src="/Students 1.webp" alt="img1" />
        <div className="static_text">
          <h1>Elementary </h1>
        </div>
        <div className="card_info md:h-72 ">
          <div className="inner p-2 flex flex-col md:px-5 md:pt-5 h-[23rem] transform rounded-2xl md:group-hover/item1:translate-y-[-6rem]">
            <h1>Elementary </h1>
            <p>
              Elementary education is for a duration of 8 years. The children
              under elementary schooling cater to the age group of 6-13 years,
              from classes I-VIII. Secondary education is for a duration of 4
              years and caters to the age group of 14-18 years, from classes
              IX-XII
            </p>
            <p
              className="w-20 text-center pt-2 h-10 rounded-md bg-text_color"
              href=""
            >
              Check
            </p>
          </div>
        </div>
      </div>
      <div className="body_card w-[90%] mb-5 md:w-[380px] md:h-fit md:mb-0 ">
        <img src="/Students 2.webp" alt="img2" />
        <div className="static_text">
          <h1>Middle School</h1>
        </div>
        <div className="card_info">
          <div className="inner px-2 md:px-5 md:pt-5 rounded-2xl h-[23rem] transform group-hover/item1:translate-y-[-3.6rem]">
            <h1>Middle School</h1>
            <p>
              Where students often stay with one or two teachers for most of the
              school day, middle school is usually the first time in which
              students change teachers after each class of usually about one
              hour. Students often study 6 subjects. They will be taught by a
              different teacher for each subject.
            </p>
            <p
              className="w-20 text-center pt-2 rounded-md h-10 bg-text_color"
              href=""
            >
              Check
            </p>
          </div>
        </div>
      </div>
      <div className="body_card w-[90%] md:w-[380px] md:h-[29rem]">
        <img src="/Students 3.webp" alt="img3" />
        <div className="static_text">
          <h1>High School</h1>
        </div>
        <div className="card_info">
          <div className="inner px-5 pt-5 rounded-2xl  h-[23rem] transform group-hover/item1:translate-y-[-3.6rem]">
            <h1>High School</h1>
            <p>
              A high school is a secondary school, where teenagers are educated
              before starting college or getting jobs. Most high schools have
              four numbered grades, from ninth to twelfth. After middle school
              or junior high comes high school.
            </p>
            <p
              className="w-20 text-center pt-2 h-10 rounded-md bg-text_color"
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
