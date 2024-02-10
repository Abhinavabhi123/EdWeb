import { Link } from "react-router-dom";
import "./Header.css";
export default function NavBottom() {
  return (
    <div className="w-[100%] h-[50%] bg-transparent max-[1290px]:hidden">
      <nav className="w-full h-full flex justify-end items-center">
        <ul className="flex justify-end items-center w-full h-full text-lg font-semibold gap-10 pt-3 pe-2  text-text_color">
          <li className="navList group relative">
            <Link to="/about_us">About Us</Link>
            <ul className=" w-72 h-fit nav_animate z-50 absolute bg-white left-0 top-[2.4rem] border shadow-md rounded-md hidden group-hover:block hover:block">
              <Link to={"/about_us/mission"}>
                <li className="nav1 rounded-t-md">School Mission and Vision</li>
              </Link>
              <Link to={"/about_us/faculty"}>
                <li className="nav1">Faculty and Staff</li>
              </Link>
              <Link to={"/about_us/facilities"}>
                <li className="nav1">Facilities</li>
              </Link>
              <Link to={"/about_us/testimonials"}>
                <li className="nav1">Testimonials and Success Stories</li>
              </Link>
              <li className="nav1">Our Accreditation and Affiliation</li>
              <li className="nav1">Social Responsibility</li>
            </ul>
          </li>
          <li className="navList group relative">
            Courses
            <ul className="w-72 nav_animate h-fit z-50 absolute bg-white top-[2.4rem] left-0 hidden border shadow-md rounded-md group-hover:block group-hover/suite:block">
              <li className="nav1 rounded-t-md">The GEMS Difference</li>
              <li className="nav1">Great Teachers</li>
              <li className="nav1">Values-led Education</li>
              <li className="nav1">Academic Excellence</li>
              <li className="nav1">Beyond the Classroom</li>
              <li className="nav1 group/suite relative flex justify-between pe-2 items-center">
                Sustainable Development
                <p>&#62;</p>
                <ul className="absolute nav_animate z-50 bg-white left-[18rem] top-0 w-72 h-fit border hidden rounded-md shadow-md group-hover/suite:block group/suite">
                  <li className="text-black nav1 rounded-t-md">
                    Green Growth Statistics
                  </li>
                  <li className="text-black nav1">Climate Literacy Lessons </li>
                  <li className="text-black nav1">Sustainable Initiatives</li>
                  <li className="text-black nav1 rounded-b-md">
                    Sustainability Events
                  </li>
                </ul>
              </li>
              <li className="nav1 rounded-b-md">
                {" "}
                University & Career Pathway
              </li>
            </ul>
          </li>
          <li className="navList group relative">
            <Link to={"/academics"}>Academics</Link>
            <ul className=" w-72 nav_animate h-fit z-50 absolute bg-white top-[2.2em] left-0 hidden group-hover:block group-hover/our:block shadow-md border rounded-md ">
              <li className="nav1 relative flex justify-between pe-2 items-center group/our rounded-t-md">
                Schools by Curriculum
                <p>&#62;</p>
                <ul className="absolute nav_animate bg-white left-[18rem] top-0 w-72 h-fit border hidden rounded-md shadow-md group-hover/our:block group/our">
                  <li className="text-black nav1">American Curriculum</li>
                  <li className="text-black nav1">British Curriculum</li>
                  <li className="text-black nav1">IB Curriculum</li>
                  <li className="text-black nav1">Indian Curriculum</li>
                </ul>
              </li>
              <li className="nav1 relative group/UAE flex justify-between pe-2 items-center">
                Schools in UAE
                <p>&#62;</p>
                <ul className="absolute nav_animate z-50 bg-white left-[18rem] top-0 w-72 h-44 border hidden rounded-md shadow-md group-hover/UAE:block group/our">
                  <li className="nav1 text-black rounded-t-md">
                    All Schools in Dubai
                  </li>
                  <li className="nav1 text-black">
                    All Schools in Abu Dhabi & Al Aii
                  </li>
                  <li className="nav1 text-black">All Schools in Sharjah</li>
                  <li className="nav1 text-black h-14 rounded-b-md">
                    {" "}
                    All Schools in Ras Al Khaimah and Fujairah
                  </li>
                </ul>
              </li>
              <li className="nav1">All Our Schools</li>
              <li className="nav1">KHDA Outstanding Schools in Dubai</li>
              <li className="nav1 rounded-b-md">What Our Parents Say</li>
            </ul>
          </li>
          <li className="navList relative group">
            Students Life
            <ul className=" nav_animate w-72 h-fit z-50 absolute bg-white left-0 top-[2.44rem] rounded-md shadow-md border hidden group-hover:block">
              <li className="nav1 rounded-t-md">
                Our Alumni - where are tye now ?
              </li>
              <li className="nav1 rounded-b-md">Student Experiences</li>
            </ul>
          </li>
          <li className="navList  relative group">
            Admission
            <ul className="w-72 nav_animate h-fit z-50 absolute bg-white left-0 top-[2.45rem] rounded-md shadow-md border hidden group-hover:block">
              <li className="nav1 rounded-t-md">News</li>
              <li className="nav1">GEMS Education Blogs</li>
              <li className="nav1 rounded-b-md">Open School Events</li>
            </ul>
          </li>
          <li className="navList relative group">
            <Link to={"/contact_us"}>Contact Us</Link>
            {/* <ul className="w-72 nav_animate h-fit z-50 absolute top-[2.4rem] bg-white rounded-md border shadow-md hidden group-hover:block">
              <li className="nav1 rounded-t-md">School of Thought: Podcast</li>
              <li className="nav1">Choosing the Right School</li>
              <li className="nav1">Age-Grade Placement Guide</li>
              <li className="nav1">Fees by Grade</li>
              <li className="nav1">Choosing Option / Pathways</li>
              <li className="nav1">GEMS Rewards</li>
              <li className="nav1">GEMS Ambassador Programme</li>
              <li className="nav1 rounded-b-md">GEMS Alumni App</li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
