import { Routes, Route } from "react-router-dom";
import { AboutMission, AboutUs, FacultyAndStaff } from "../Pages/UserPages";

export default function AboutRoutes() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/mission" element={<AboutMission />} />
        <Route path="/faculty" element={<FacultyAndStaff/>} />
      </Routes>
    </div>
  );
}
