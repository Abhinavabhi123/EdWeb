import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoBagHandleSharp } from "react-icons/io5";

export default function MenuOpen(Props) {
  const { menuOpen } = Props;
  const [show, setShow] = useState([
    { id: 1, show: false },
    { id: 2, show: false },
    { id: 3, show: false },
    { id: 4, show: false },
    { id: 5, show: false },
    { id: 6, show: false },
  ]);

  function showHandler(index, status) {
    setShow((prevShow) =>
      prevShow.map((item) =>
        item.id === index ? { ...item, show: status } : item
      )
    );
  }

  return (
    <div
      className={`${
        menuOpen === true ? "block" : "hidden"
      } h-fit bg-text_color z-50 absolute nav_animate w-full min-[1290px]:hidden pb-5 px-5 mt-[5.5rem]`}
    >
      <ul className="w-full h-full text-lg font-semibold text-white transition-all duration-500 ease-in-out">
        <div className="menu_details">
          <p>We Are GEMS</p>
          {show[0].id === 1 && show[0].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(1, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(1, false)}
            />
          )}
        </div>
        {/* responsive nav 1 list */}
        <ul
          className={`${
            show[0].id === 1 && show[0].show === true ? "block" : "hidden"
          } w-full h-fit `}
        >
          <li className="nav1 nav2">Message From Our Founder</li>
          <li className="nav1 nav2">Mission & Values</li>
          <li className="nav1 nav2">Over 60 Years of Legacy</li>
          <li className="nav1 nav2">Our Company</li>
          <li className="nav1 nav2">Our Leadership</li>
          <li className="nav1 nav2">Our Accreditations and Affiliations</li>
          <li className="nav1 nav2">Social Responsibility</li>
          <li className="nav1 nav2">Our Partners</li>
          <li className="nav1 nav2">Investor Relations</li>
          <li className="nav1 nav2 ">Career at GEMS</li>
        </ul>
        <div className="menu_details">
          <p>Our Promise</p>
          {show[1].id === 2 && show[1].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(2, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(2, false)}
            />
          )}
        </div>
        {/* responsive nav 2 list */}
        <ul
          className={`${
            show[1].id === 2 && show[1].show === true ? "block" : "hidden"
          } w-full h-fit`}
        >
          <li className="nav1 nav2">The Gems Difference</li>
          <li className="nav1 nav2">Great Teachers</li>
          <li className="nav1 nav2">Values-led Education</li>
          <li className="nav1 nav2">Academic Excellence</li>
          <li className="nav1 nav2">Beyond the Classroom</li>
        </ul>
        <div className="menu_details">
          <p>Our Schools</p>
          {show[2].id === 3 && show[2].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(3, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(3, false)}
            />
          )}
        </div>
        {/* responsive nav 3 list */}
        <ul
          className={`${
            show[2].id === 3 && show[2].show === true ? "block" : "hidden"
          } w-full h-fit`}
        >
          <li className="nav1 nav2">School By Curriculum</li>
          <li className="nav1 nav2">Schools in UAE</li>
          <li className="nav1 nav2">All Schools</li>
          <li className="nav1 nav2">KHDA OUtstanding School in Dubai</li>
          <li className="nav1 nav2">What Our Admission Say</li>
          <li className="nav1 nav2">Contact out Admissions Team</li>
          <li className="nav1 nav2">Scholarship</li>
        </ul>
        <div className="menu_details">
          <p>Our Students</p>
          {show[3].id === 4 && show[3].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(4, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(4, false)}
            />
          )}
        </div>
        {/* responsive nav 4 list */}
        <ul
          className={`${
            show[3].id === 4 && show[3].show === true ? "block" : "hidden"
          } w-full h-fit`}
        >
          <li className="nav1 nav2">Our Alumni - Where are they now?</li>
          <li className="nav1 nav2">Student Experiences</li>
        </ul>
        <div className="menu_details">
          <p>Names & Events</p>
          {show[4].id === 5 && show[4].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(5, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(5, false)}
            />
          )}
        </div>
        {/* responsive nav 5 list */}
        <ul
          className={`${
            show[4].id === 5 && show[4].show === true ? "block" : "hidden"
          } w-full h-fit`}
        >
          <li className="nav1 nav2">News</li>
          <li className="nav1 nav2">GEMS Education Blogs</li>
          <li className="nav1 nav2">Open School Events</li>
        </ul>
        <div className="menu_details">
          <p>For Parents</p>
          {show[5].id === 6 && show[5].show === false ? (
            <FaPlus
              className="cursor-pointer"
              onClick={() => showHandler(6, true)}
            />
          ) : (
            <FaMinus
              className="cursor-pointer"
              onClick={() => showHandler(6, false)}
            />
          )}
        </div>
        {/* responsive nav 6 list */}
        <ul
          className={`${
            show[5].id === 6 && show[5].show === true ? "block" : "hidden"
          } w-full h-fit`}
        >
          <li className="nav1 nav2">School of Thought: Podcast</li>
          <li className="nav1 nav2">Choosing the Right School</li>
          <li className="nav1 nav2">Age-Grade Placement Guide</li>
          <li className="nav1 nav2">Fees by Grade</li>
          <li className="nav1 nav2">Choosing Options / Pathways</li>
          <li className="nav1 nav2">How to save on your fees</li>
          <li className="nav1 nav2">GEMS Rewards</li>
          <li className="nav1 nav2">GEMS Ambassador Programme</li>
          <li className="nav1 nav2">GEMS Alumni App</li>
          <li className="nav1 nav2">Feedback & Suggestion</li>
        </ul>
      </ul>
      <div className="w-full h-6 text-white px-5 mt-5 flex items-center gap-2 cursor-pointer">
        <BiSolidPhoneCall/>
        Contact</div>
      <div className="w-full h-6 text-white px-5 mt-5 flex items-center gap-2 cursor-pointer">
        <IoBagHandleSharp/>
        Career</div>
    </div>
  );
}
