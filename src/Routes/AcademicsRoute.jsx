import { Routes, Route } from "react-router-dom";
import { AcademicHome } from "../Pages/UserPages";

export default function AcademicsRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AcademicHome/>} />
      </Routes>
    </div>
  );
}
