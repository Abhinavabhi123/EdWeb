import Banner from "./Components/Banner/Banner";
import Body from "./Components/Body/Body";
import HeaderMain from "./Components/Header/HeaderMain";
import { FaXTwitter, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa6";

function App() {
  return (
    <div className="w-[100%] h-screen relative">
      <div className="w-full h-[7rem] ">
      <HeaderMain/>
      </div>
         {/* Side Social media details */}
         <div className="h-28 md:h-40 w-10 fixed z-[100] bg-yellow-500 bg-opacity-50 hover:bg-opacity-90 rounded-tr-lg rounded-br-lg mt-11 md:mt-44 md:text-2xl text-sm flex flex-col justify-center gap-2 items-center m-0 p-0">
          <FaXTwitter  className="hover:text-white  group/twit cursor-pointer " />
          <FaWhatsapp  className="hover:text-green-500 group/what cursor-pointer" />
          <FaYoutube  className="hover:text-red-600 group/you cursor-pointer" />
          <FaFacebook  className="hover:text-blue-500 group/face cursor-pointer" />
        </div>
        <Banner />
      <Body />
    </div>
  );
}

export default App;
