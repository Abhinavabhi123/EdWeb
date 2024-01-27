import { useState } from "react";
// import { LiaSchoolSolid } from "react-icons/lia";
import NavDetails from "./NavDetails";
// import Search, { SearchModal } from "./Search";
import NavBottom from "./NavBottom";
import "./Header.css";
import MenuOpen from "./MenuOpen";

export default function HeaderMain() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function menuHandler() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className="w-[100%] h-[7rem] fixed bg-transparent pb-3 dark:bg-white max-[1290px]:h-[5.5rem] flex items-center justify-between px-2 shadow-md min-[1207px]:px-[15%] z-40 ">
        <div className="w-fit h-full flex items-end">
          <img src="/logo.svg" alt="logo" className="w-24 md:w-28 h-auto cursor-pointer" />
        </div>
        <div className="w-[90%] h-full bg-transparent flex flex-col items-end justify-center">
          <div className="w-[100%] h-[50%] bg-transparent flex items-center justify-end md:gap-3 gap-2 text-text_color text-lg">
            {/* details */}
            <NavDetails />
            {/* Search */}
            {/* <Search setIsModalOpen={setIsModalOpen} /> */}
            {/* find school */}
            {/* <div className="flex justify-center items-center max-[1290px]:h-19 w-40 gap-2 bg-yellow-400 rounded-3xl px-3 py-2 cursor-pointer">
              <p className="font-thin text-sm">Find a school</p>
              <LiaSchoolSolid size={20} />
            </div> */}
            {/* Menu open in responsive design */}
            <label className="menuButton " htmlFor="check">
              <input type="checkbox" id="check" onClick={menuHandler} />
              <span className="top"></span>
              <span className="mid"></span>
              <span className="bot"></span>
            </label>
          </div>
          {/* Nav bottom section */}
          <NavBottom />
        </div>
        {/* modal for Search */}
        {/* <SearchModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        /> */}
      </div>
      {/* Responsive menu details */}
      <MenuOpen menuOpen={menuOpen} />
    </>
  );
}
