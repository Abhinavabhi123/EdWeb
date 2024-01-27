import "./Body.css";

export default function Body() {
  return (
    <div className="body_card_wrapper pb-20 md:pt-[7rem]">
      <div className="body_card mb-10  w-[90%] md:w-[380px]">
        <img src="/Students 1.webp" alt="img1" />
        <div className="static_text">
          <h1>Elementary </h1>
        </div>
        <div className="card_info md:h-72">
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
      <div className="body_card w-[90%] mb-10 md:w-[380px] md:h-fit">
        <img src="/Students 2.webp" alt="img2" />
        <div className="static_text">
          <h1>Middle School</h1>
        </div>
        <div className="card_info">
          <h1>Middle School</h1>
          <p>
            Where students often stay with one or two teachers for most of the
            school day, middle school is usually the first time in which
            students change teachers after each class of usually about one hour.
            Students often study 6 subjects. They will be taught by a different
            teacher for each subject.
          </p>
          <p
            className="w-20 text-center pt-2 rounded-md h-10 bg-text_color"
            href=""
          >
            Check
          </p>
        </div>
      </div>
      <div className="body_card w-[90%] md:w-[380px] md:h-[25rem]">
        <img src="/Students 3.webp" alt="img3" />
        <div className="static_text">
          <h1>High School</h1>
        </div>
        <div className="card_info">
          <h1>High School</h1>
          <p>
            A high school is a secondary school, where teenagers are educated
            before starting college or getting jobs. Most high schools have four
            numbered grades, from ninth to twelfth. After middle school or
            junior high comes high school.
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
  );
}
