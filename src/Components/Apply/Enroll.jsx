import "./Apply.css";

export default function Enroll() {
  return (
    <div className="w-full h-fit md:h-60 flex justify-center ">
      <div className="md:w-[80%]  w-full h-full bg-slate-100 md:bg-slate-200">
        <div className="w-full flex justify-center h-10 pt-4">
          <p className="uppercase border-b-2 border-gray-500 w-44 text-center">
            enroll now
          </p>
        </div>
        <div className="w-full  flex justify-center items-center px-3">
          <div className="md:w-[60%] w-[95%] flex justify-center bg-transparent items-center h-full">
            <p className="text-center transition-colors duration-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              natus corporis nobis ex autem facilis veritatis unde quae. Quaerat
              aspernatur dolorum aut et, nihil eos aperiam minima error!
              Similique, sapiente?
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
