import "./Apply.css";

export default function Enroll() {
  return (
    <div className="w-full h-fit md:h-fit flex justify-center mb-10">
      <div className="md:w-[80%]  w-full h-full bg-slate-100 md:bg-slate-200 rounded-lg">
        <div className="w-full flex justify-center h-10 pt-4">
          <p className="uppercase border-b-2 border-gray-500 w-44 text-center text-text_color font-bold">
            enroll now
          </p>
        </div>
        <div className="w-full  flex justify-center items-center mt-2 px-3">
          <div className="md:w-[80%] w-[95%] bg-transparent h-full">
            <p className=" transition-colors duration-500">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Applications for the 2024-2025 school year are open as of October
              1, 2023. The lottery for the 2023-2024 school year took place on
              February 1, 2024. All applications submitted by January 31, 2024
              were included in the lottery. Students must be 5 years old on or
              before September 1, 2024 in order to attend school for the
              2024-2025 school year. All applications received after January 31,
              2024 will go on a wait list and will be contacted as space becomes
              available.
            </p>
          </div>
        </div>
        <div className="w-full h-20 bg-transparent flex justify-center items-center">
          <button className="learn-more bg-gray-300">
            {/*  focus:bg-yellow-400 */}
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-black font-semibold">Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
