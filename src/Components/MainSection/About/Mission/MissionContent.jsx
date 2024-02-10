import {
  content,
  details,
  vision,
  visionData,
} from "../../../../Services/constants";
import SlideUp from "../../../Cards/SlideUp";
import "./mission.css";

export default function MissionContent() {
  return (
    <div className="w-full mt-5 md:px-16 bg-slate-200 pt-5 overflow-hidden">
      <SlideUp data={visionData} heading={"Our Mission :"} details={details} />
      <div className="mt-10 md:mt-0">
        <SlideUp data={vision} heading={"Our Vision :"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-2 md:grid-rows-2 px-5 md:p-14">
        {content.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full h-fit md:h-full bg-text_color text-white flex flex-col p-10 space-y-6"
            >
              <h3 className="text-xl font-semibold">{item?.title}</h3>
              <div className="w-full h-fit content-start">
                <div className="w-28 h-1 rounded-md bg-gradient-to-r from-yellow-400  to-red-500"></div>
              </div>
              <p className="tracking-wider">{item?.content}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center flex-col py-5">
        <div className="py-4">
          <h2 className="text-xl font-semibold text-[#12372A]">
            Join the Ed-Web Family
          </h2>
        </div>
        <div className="px-3 md:px-16 text-center">
          <p>
            Join us at Ed-Web and embark on a journey towards a rewarding career
            in medicine. Together, we can make a positive impact on the
            healthcare industry in India and fulfill the growing demand for
            skilled medical professionals. Let us guide you towards success in
            your future.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-3 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
