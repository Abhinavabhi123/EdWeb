import { FacilitiesBanner, FacilitiesContent } from "../../../Components";

export default function About_Facility() {
  window.scrollTo(0, 0);
  return (
    <div className="w-full md:mt-20">
      <FacilitiesBanner />
      <FacilitiesContent />
    </div>
  );
}
