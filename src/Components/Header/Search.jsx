import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Search(Props) {
  const { setIsModalOpen } = Props;

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div
        className="w-8 md:w-10 pt-[1px] ps-[1px] cursor-pointer hover:bg-yellow-500 h-8 md:h-10 bg-text_color rounded-full text-white flex justify-center items-center "
        onClick={openModal}
      >
        <IoSearch size={25} className="font-extrabold" />
      </div>
    </>
  );
}

// Opened Modal
export const SearchModal = (Props) => {
  const [searchValue, setSearchValue] = useState("");
  const { isModalOpen, setIsModalOpen } = Props;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  function formHandler(e) {
    e.preventDefault();
    setSearchValue("");
    setIsModalOpen(false);
  }
  return (
    <div
      className={`${
        isModalOpen ? "flex" : "hidden"
      } absolute flex-wrap inset-0 h-[100%] bg-black bg-opacity-25 backdrop-blur-sm  justify-center pt-20`}
    >
      <div className="bg-text_color flex flex-col mt-4 p-2 rounded-2xl w-[90%] md:w-[60%]  h-fit">
        <div className="w-full h-8 border-b border-white bg-transparent flex justify-end items-center pe-2">
          <button className="text-white">
            <IoMdClose size={20} onClick={closeModal} />
          </button>
        </div>
        <form
          className="w-full h-36 bg-transparent flex justify-center items-center gap-3"
          onSubmit={formHandler}
        >
          <input
            type="text"
            className="w-[60%] h-10 rounded-md border-2 border-slate-700 focus:outline-none ps-4 text-white bg-transparent"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="h-10 w-32 rounded-md bg-yellow-400 hover:bg-yellow-500 font-semibold text-white"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
