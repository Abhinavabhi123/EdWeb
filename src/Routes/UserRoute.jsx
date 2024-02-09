import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Routes, Route } from "react-router-dom";


// import { AboutMission} from "../Pages/UserPages";

import { Footer, Header } from "../Components";
import AboutRoutes from "./AboutRoutes";
import { ContactUsPage, HomePage } from "../Pages/UserPages";

export default function UserRoute() {
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="w-[100%] h-screen flex justify-center items-center bg-opacity-15">
        <HashLoader color="#041261" />
      </div>
    );
  }
  

  return (
    <div>
      <div className="w-full md:h-[2.1rem] h-[5.5rem]">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_us/*" element={<AboutRoutes/>} />
        <Route path="/contact_us" element={<ContactUsPage />} />
      </Routes>
      <div className="w-full md:h-[7rem] mt-10 h-[5.5rem]">
        <Footer />
      </div>
    </div>
  );
}
