import {
  adminData,
  facultyContent,
  supportData,
  teachersData,
} from "../../../../Services/constants";
import TeacherSlideUp from "../../../Cards/TeacherSlideUp";

export default function FacultyContent() {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-10 py-5  md:px-20 px-5">
      {/* section 1 */}
      <div className="w-full">
        <div className="flex p-5">
          <h1 className="text-2xl text-[#12372A] font-semibold">
            Meet Our Team
          </h1>
        </div>
        <div className="flex md:px-10">
          <p className="tracking-wider">
            Our team consists of highly qualified and experienced professionals
            who are dedicated to nurturing the intellectual, social, and
            emotional growth of our students. From our passionate teachers who
            inspire a love for learning to our dedicated support staff who
            ensure the efficient functioning of the school, each member of our
            team plays a vital role in creating a positive and enriching
            environment for our students.
          </p>
        </div>
      </div>
      {/* section 2 teaching */}
      <div className="flex flex-col gap-5 md:p-5">
        <div>
          <h2 className="text-xl text-[#12372A] font-semibold">
            Teaching Faculty
          </h2>
        </div>
        <div className="flex md:px-5">
          <p className="tracking-normal">
            Our teaching faculty at [School Name] is the heart of our
            educational community. Comprised of passionate educators with
            diverse backgrounds and expertise, our faculty members are dedicated
            to inspiring and empowering students to reach their full potential.
            With a focus on fostering critical thinking, creativity, and a love
            for learning, our teachers create dynamic and engaging classroom
            environments where students thrive. Whether it&apos;s exploring
            complex concepts, guiding hands-on experiments, or providing
            personalized support, our teaching faculty goes above and beyond to
            ensure that every student receives the guidance and encouragement
            they need to succeed. Through their unwavering commitment to
            excellence and their genuine care for each student, our teaching
            faculty plays a pivotal role in shaping the minds and futures of our
            students.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-cols-auto md:grid-rows-2 h-fit bg-transparent p-0 md:p-5 gap-10 justify-center items-center md:justify-start md:items-start">
            {teachersData.map((item, i) => {
              return <TeacherSlideUp key={i} data={item} />;
            })}
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex flex-col h-fit gap-5 md:p-5">
        <div>
          <h2 className="text-xl text-[#12372A] font-semibold">
            Administrative Staff
          </h2>
        </div>
        <div className="flex md:px-5">
          <p className="tracking-normal">
            Our administrative staff members are the backbone of our school,
            working diligently behind the scenes to ensure the smooth operation
            of daily tasks and the overall efficiency of our educational
            institution. From managing school facilities and coordinating events
            to providing essential support services, our administrative staff
            play a crucial role in creating a positive and conducive learning
            environment for our students. With their dedication, attention to
            detail, and commitment to excellence, they contribute to the success
            and well-being of our entire school community.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-cols-auto h-fit bg-transparent gap-5 justify-center items-center md:justify-start md:items-start">
            {adminData.map((item, i) => {
              return <TeacherSlideUp key={i} data={item} />;
            })}
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="flex flex-col h-fit gap-5 md:p-5">
        <div>
          <h2 className="text-xl text-[#12372A] font-semibold">
            Support Staff
          </h2>
        </div>
        <div className="flex md:px-5">
          <p className="tracking-normal">
            Certainly! Here&apos;s a brief description about support staff:
            Support staff play a crucial role in the efficient functioning of
            our school. From administrative assistants and office managers to
            custodians and cafeteria staff, our support team works tirelessly
            behind the scenes to ensure that the day-to-day operations of the
            school run smoothly. With their dedication, attention to detail, and
            commitment to excellence, our support staff create a welcoming and
            organized environment that supports the overall mission and goals of
            our school. Their contributions are invaluable in creating a
            positive and nurturing learning environment for our students and
            staff alike.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row auto-cols-auto max-[px] h-fit bg-transparent gap-5 justify-center items-center md:justify-start md:items-start">
            {supportData.map((item, i) => {
              return <TeacherSlideUp key={i} data={item} />;
            })}
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-2 p-0 md:p-8">
        {facultyContent.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full h-fit md:h-full bg-text_color text-white flex flex-col p-10 space-y-6"
            >
              <h3 className="text-xl font-semibold">{item?.title}</h3>
              <div className="w-full h-fit content-start">
                <div className="w-28 h-1 rounded-md bg-gradient-to-r from-yellow-400  to-red-500"></div>
              </div>
              <p className="tracking-wider">{item?.content}</p>
            </div>
          );
        })}
      </div>
      {/* last section */}
      <div className="md:px-16 px-2 text-center">
        <div>
          <h2 className="text-xl text-[#12372A] font-semibold">Get in Touch</h2>
        </div>
        <p className="mt-4">
          Join us at Ed-Web and embark on a journey towards a rewarding career
          in medicine. Together, we can make a positive impact on the healthcare
          industry in India and fulfill the growing demand for skilled medical
          professionals. Let us guide you towards success in your future.
        </p>
      </div>
      <div className="flex justify-center mt-3">
        <button className="px-3 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white">
          Join Now
        </button>
      </div>
    </div>
  );
}
