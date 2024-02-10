import { graduates, plusTwoData, subjectWise } from "../../Services/constants";
import "./academic.css";

export default function Academics() {
  return (
    <div className="w-full min-h-[40rem] bg-slate-200 py-5 md:mb-20 mb-10 md:px-10">
      <div className="flex justify-center">
        <h1 className="text-2xl underline font-semibold">Academic Results</h1>
      </div>
      {/*  */}
      <div className="flex justify-center items-center gap-2 ">
        <h2 className="font-semibold ">Grade 10 Results (2023-2024)</h2>
        <img src="/crown.png" alt="crown image" className="w-[2rem] md:w-14" />
      </div>
      {/* topper div */}
      <div>
        <div className="flex md:justify-start justify-center md:ps-40 py-4">
          <h3 className="font-semibold text-sm md:text-base">
            Overall Pass Percentage: 98%
          </h3>
        </div>
        <div className="flex flex-wrap  h-fit justify-center items-center gap-0 md:gap-20 ">
          {graduates?.map((item, i) => {
            return (
              <div
                key={i}
                className="w-[15rem] h-[15rem] bg-transparent flex justify-center  flex-col items-center gap-3"
                data-aos="zoom-in"
              >
                <div className="w-40 h-40 rounded-full">
                  <img
                    src={item?.img}
                    alt="image"
                    className=" rounded-full object-cover w-full h-full  hover:scale-90 transition-all duration-300 cursor-pointe"
                  />
                </div>

                <p className="flex justify-center items-center gap-2">
                  {item?.name}{" "}
                  <img src="/crown.png" alt="crown image" className="w-6" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}

      <div className="flex flex-col">
        <div className="flex md:justify-start justify-center md:ps-40 py-4">
          <h3 className="font-semibold">Subject-wise Performance:</h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-[768px]:w-[85%] w-full bg-transparent  flex items-center  justify-center flex-col md:flex-row gap-8">
            {/* max-[496px]:p-14 */}
            {subjectWise.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[15rem] h-[18rem] bg-transparent flex justify-center flex-col  items-center md:gap-3"
                  data-aos="zoom-in"
                >
                  <p className="text-center w-full md:h-10">{item?.subject}</p>
                  <div className="w-full h-[17rem] bg-slate-300 rounded-lg flex flex-col justify-center gap-3 items-center">
                    <div className="w-40 h-40 rounded-full">
                      <img
                        src={item?.img}
                        alt="image"
                        className="rounded-full w-full h-full hover:scale-90 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <p className="w-full text-center">{item?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex flex-col mt-5">
        <div className="flex justify-center items-center gap-2 ">
          <h2 className="font-semibold">Grade 12 Results (2023-2024)</h2>
          <img
            src="/crown.png"
            alt="crown image"
            className="w-[2rem] md:w-14"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="max-[768px]:w-[85%] w-full bg-transparent flex items-center justify-center flex-col md:flex-row flex-wrap md:gap-4 ">
            {plusTwoData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[15rem] h-[18rem] bg-transparent flex justify-center flex-col  items-center md:gap-3 "
                  data-aos="zoom-in"
                >
                  <p className="text-center w-full md:h-10">{item?.subject}</p>
                  <div className="w-full h-[17rem] bg-slate-300 rounded-lg flex flex-col justify-center gap-3 items-center">
                    <div className="w-40 h-40 rounded-full">
                      <img
                        src={item?.img}
                        alt="image"
                        className="rounded-full w-full h-full hover:scale-90 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <p className="w-full text-center">{item?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-4 mt-5">
        <button className="px-5 py-3 font-semibold bg-[#ddac4b] rounded-lg group/btn">
          <a className="group-hover/btn:underline transition-all duration-500">
            Know More
          </a>
        </button>
      </div>
    </div>
  );
}
