import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/UserPages/HomePage";
import { AboutUs } from "../Pages/UserPages";
import { Footer, Header } from "../Components";

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
      <div className="w-full md:h-[4rem] h-[5.5rem]">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
      <div className="w-full md:h-[7rem] h-[5.5rem]">
        <Footer />
      </div>
    </div>
  );
}
