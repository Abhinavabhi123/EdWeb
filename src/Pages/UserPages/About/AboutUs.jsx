import { AboutBody, AboutHead } from "../../../Components";

export default function AboutUs() {
  window.scrollTo(0, 0);
  return (
    <div className="w-full h-fit md:py-10 relative">
      <AboutHead />
      <AboutBody />
    </div>
  );
}
