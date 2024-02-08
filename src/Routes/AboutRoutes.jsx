import { Routes, Route } from "react-router-dom";
import { AboutMission, AboutUs } from "../Pages/UserPages";

export default function AboutRoutes() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/mission" element={<AboutMission />} />
      </Routes>
    </div>
  );
}
