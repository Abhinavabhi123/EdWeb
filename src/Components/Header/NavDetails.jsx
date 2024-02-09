import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

export default function NavDetails() {
  return (
    <div className="flex text-sm">
      <Link to={"/contact_us"}>
        <div className="flex items-center justify-center rounded-3xl gap-3 w-fit md:w-40 h-8 bg-transparent cursor-pointer group me-3">
          <BiSolidPhoneCall size={20} />
          <p className="border-b-2 border-transparent mt-3 group-hover:border-yellow-400 h-full w-fit">
            Contact Us
          </p>  
        </div>
      </Link>
      <div className="flex items-center justify-center rounded-3xl gap-3 w-20 md:w-40 h-8 bg-transparent cursor-pointer group">
        <MdEmail size={20} />
        <p className="border-b-2 border-transparent mt-3 group-hover:border-yellow-400 h-full w-fit">
          Email
        </p>
      </div>
    </div>
  );
}
