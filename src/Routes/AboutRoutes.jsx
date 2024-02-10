import { Routes, Route } from "react-router-dom";
import {
  AboutMission,
  AboutTestimonial,
  AboutUs,
  About_Facility,
  FacultyAndStaff,
} from "../Pages/UserPages";

export default function AboutRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/mission" element={<AboutMission />} />
        <Route path="/faculty" element={<FacultyAndStaff />} />
        <Route path="/facilities" element={<About_Facility />} />
        <Route path="/testimonials" element={<AboutTestimonial />} />
      </Routes>
    </div>
  );
}
