import { BiSolidPhoneCall } from "react-icons/bi";
import { IoBagHandleSharp } from "react-icons/io5";

export default function NavDetails() {
  return (
    <div className="md:flex hidden text-base">
      <div className="flex items-center justify-center rounded-3xl gap-3 w-40 h-8 bg-transparent cursor-pointer group">
        <BiSolidPhoneCall size={23} />
        <p className="border-b-2 border-transparent mt-3 group-hover:border-yellow-400 h-full w-fit">
          Contact Us
        </p>
      </div>
      <div className="flex items-center justify-center rounded-3xl gap-3 w-40 h-8 bg-transparent cursor-pointer group">
        <IoBagHandleSharp size={23} />
        <p className="border-b-2 border-transparent mt-3 group-hover:border-yellow-400 h-full w-fit">
          Career
        </p>
      </div>
    </div>
  );
}
