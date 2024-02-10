import { AcademicMainBanner, AcademicMainContent } from "../../../Components";

export default function AcademicHome() {
  window.scrollTo(0, 0);
  return (
    <div className="w-full h-full md:mt-20">
      <AcademicMainBanner/>
      <AcademicMainContent/>
    </div>
  )
}
