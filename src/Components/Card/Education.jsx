import "./education.css";

export default function Education() {
  return (
    <div className="w-[100%] h-fit flex justify-center items-center flex-col md:flex-row gap-8 px-20 bg-transparent my-10 ">
      <div className="min-w-[20rem] md:max-w-[26rem] h-[18rem] card rounded-md">
        <img
          src="/Students 1.webp"
          alt="student img1"
          className="w-full h-full object-cover card_image rounded-md"
        />
        <h2 className="main_text">Elementary</h2>
        <div className="clip">
          <div className="w-full h-[25%] flex items-center justify-between ps-3 pe-20 pt-3 rounded-tl-md clip_text ">
            <div className="w-[50%] h-full">
              <img src="/book.gif" alt="" className="w-8 md:10" />
            </div>
            <div className="w-[50%] h-full flex justify-start">
              <h2>Elementary</h2>
            </div>
          </div>
          <div className="w-full h-[75%] bg-transparent p-8">
            <p className="text-white ">
              Elementary education is for a duration of 8 years. The children
              under elementary schooling cater to the age group of 6-13 years,
              from classes I-VIII.
            </p>
            <button className="py-2 px-5 bg-[#00bfff] mt-2 md:mt-4 rounded-md text-white">
              Click
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[20rem] md:max-w-[26rem] h-[18rem] card rounded-md">
        <img
          src="/Students 2.webp"
          alt="student img1"
          className="w-full h-full object-cover card_image rounded-md"
        />
        <h2 className="main_text">Middle School</h2>
        <div className="clip">
          <div className="w-full h-[25%] flex items-center justify-between ps-3 pe-20 pt-3 rounded-tl-md clip_text">
            <div className="w-[50%] h-full">
              <img src="/assignment.gif" alt="" className="w-8 md:10" />
            </div>
            <div className="w-[50%] h-full flex justify-start">
              <h2>Middle School</h2>
            </div>
          </div>
          <div className="w-full h-[75%] bg-transparent p-6">
            <p className="text-white ">
              Where students often stay with one or two teachers for most of the
              school day, middle school is usually the first time in which
              students change teachers after each class.
            </p>
            <button className="py-2 px-5 bg-[#00bfff] mt-2 md:mt-4 rounded-md text-white">
              Click
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[20rem] md:max-w-[26rem] h-[18rem] card rounded-md">
        <img
          src="/Students 3.webp"
          alt="student img1"
          className="w-full h-full object-cover card_image rounded-md"
        />
        <h2 className="main_text">High School</h2>
        <div className="clip">
          <div className="w-full h-[25%] flex items-center justify-between ps-3 pe-20 pt-3 rounded-tl-md clip_text">
            <div className="w-[50%] h-full">
              <img src="/success.gif" alt="" className="w-8 md:10" />
            </div>
            <div className="w-[50%] h-full flex justify-start">
              <h2>High School</h2>
            </div>
          </div>
          <div className="w-full h-[75%] bg-transparent p-8">
            <p className="text-white ">
              A high school is a secondary school, where teenagers are educated
              before starting college or getting jobs. Most high schools have
              four numbered grades.
            </p>
            <button className="py-2 px-5 bg-[#00bfff] mt-2 md:mt-4 rounded-md text-white">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
