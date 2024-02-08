import TeacherSlideUp from "../../Cards/TeacherSlideUp";

export default function FacultyContent() {
  const teachersData = [
    {
      name: "Dr. Emily Johnson ",
      image:
        "https://img.freepik.com/free-photo/smiley-woman-holding-book-front-view_23-2149915887.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Head of Science Department",
      subject: "Biology",
      desc: "Dr. Emily Johnson brings over 15 years of experience in teaching Biology to our school. With a Ph.D. in Biological Sciences, she is passionate about exploring the wonders of the natural world with her students. ",
    },
    {
      name: "Mr. David Patel",
      image:
        "https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-884.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Mathematics Teacher",
      subject: "Mathematics",
      desc: "Mr. David Patel is a dedicated Mathematics teacher with a knack for making complex concepts accessible to all students. With a Master's degree in Mathematics Education.",
    },
    {
      name: "Ms. Sarah Thompson",
      image:
        "https://img.freepik.com/free-photo/confident-smiling-businesswoman-writing-notes_176420-16602.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "English Language Arts Instructor",
      subject: "English Language Arts",
      desc: "Ms. Sarah Thompson is an enthusiastic English Language Arts instructor who believes in the power of literature to broaden horizons and foster empathy",
    },
    {
      name: "Mr. James Rodriguez",
      image:
        "https://img.freepik.com/premium-photo/portrait-young-male-teacher-light-background_99433-2422.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Social Studies Teacher",
      subject: "Social Studies",
      desc: " Mr. James Rodriguez is a passionate Social Studies teacher who brings history to life in his classroom. With a deep knowledge of world cultures and events.",
    },
    {
      name: "Ms. Rachel Chang",
      image:
        "https://img.freepik.com/premium-photo/smiling-young-indian-female-math-teacher-sitting-desk-generative-ai_849906-11822.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Visual Arts Teacher",
      subject: "Visual Arts",
      desc: "Ms. Rachel Chang is a talented Visual Arts teacher who believes in the power of creativity to inspire and transform. With a background in fine arts.",
    },
    {
      name: "Dr. Michael Lee",
      image:
        "https://img.freepik.com/free-photo/man-teacher-wearing-glasses-sitting-school-desk-checking-class-register-front-blackboard-classroom-looking-camera-with-angry-face_141793-132978.jpg?w=996&t=st=1707388865~exp=1707389465~hmac=4c4b23ac8d88c7338fb82c0a3df3431dcd3a27b97b608e9e5024e2eec20830dd",
      position: "Physics Instructor",
      subject: "Physics",
      desc: "Dr. Michael Lee is an experienced Physics instructor with a passion for exploring the fundamental laws of the universe. With a Ph.D. in Physics, he brings a wealth of knowledge and enthusiasm to his classes.",
    },
    {
      name: "Ms. Jessica Nguyen",
      image:
        "https://img.freepik.com/premium-photo/young-beautiful-woman-teacher-posing-with-gesture_1258-12099.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Physical Education Teacher",
      subject: "Physical Education",
      desc: " Ms. Jessica Nguyen is a dedicated Physical Education teacher who believes in the importance of fostering lifelong health and wellness habits. With a background in sports science.",
    },
    {
      name: "Mr. Kevin Smith",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph",
      position: "Technology Education Instructor",
      subject: "Technology Education",
      desc: "Mr. Kevin Smith is a forward-thinking Technology Education instructor who is passionate about preparing students for the digital age. With expertise in coding and robotics.",
    },
  ];

  const adminData = [
    {
      name: "Ms. Jennifer Thompson",
      image:
        "https://img.freepik.com/premium-photo/senior-indian-asian-business-women-saving-holding-calculating-currency-coins-business-finance-investment-concept_466689-27009.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: "Principal",
      desc: " Ms. Jennifer Thompson serves as the Principal's Assistant at our school, providing invaluable support to the administrative team. With her exceptional organizational skills and attention to detail.",
    },
    {
      name: "Mr. Andrew Davis",
      image:
        "https://img.freepik.com/free-photo/focused-businessman-looking-new-solutions_329181-19264.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: "Facilities Manager",
      desc: "Mr. Andrew Davis is our dedicated Facilities Manager, responsible for overseeing the maintenance and upkeep of our school facilities. With his expertise in facility management.",
    },
    {
      name: "Ms. Michelle Garcia",
      image:
        "https://img.freepik.com/free-photo/fashion-young-brunette-woman-posing_144627-46966.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: " School Counselor",
      desc: "Ms. Michelle Garcia is our compassionate School Counselor, providing support and guidance to students as they navigate academic, social, and personal challenges.",
    },
    {
      name: "Mr. Robert Johnson",
      image:
        "https://img.freepik.com/free-photo/young-businessman-happily-looking-camera-office-desk_114579-28370.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: "IT Coordinator",
      desc: "Mr. Robert Johnson serves as our IT Coordinator, overseeing the technology infrastructure and digital resources at our school. With his technical expertise and problem-solving skills.",
    },
  ];

  const supportData = [
    {
      name: "Ms. Lisa Thompson",
      image:
        "https://img.freepik.com/free-photo/top-view-young-female-office-worker-sitting-her-desk-folding-page_140725-106297.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: "Administrative Assistant",
      desc: "Ms. Lisa Thompson serves as our Administrative Assistant, providing essential support to the administrative team. With her organizational skills and attention to detail.",
    },
    {
      name: "Mr. John Smith",
      image:
        "https://img.freepik.com/free-photo/hotel-receptionist-work_23-2149661589.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
      position: "Custodian",
      desc: "Mr. John Smith is our dedicated Custodian, responsible for maintaining the cleanliness and safety of our school facilities. With his hard work and attention to detail.",
    },
  ];

  const content = [
    {
      title: "Commitment to Excellence",
      content:
        "At [School Name], we prioritize excellence in education and strive to provide our students with the highest quality learning experiences. Our faculty members are committed to staying updated on the latest pedagogical practices and instructional methods to ensure that our students receive a well-rounded education that prepares them for success in the future.",
    },
    {
      title: "Collaboration and Support",
      content:
        "We believe in the power of collaboration and teamwork in achieving our goals. Our faculty and staff work closely together to develop innovative teaching strategies, create a supportive learning environment, and address the individual needs of each student. Through open communication, mutual respect, and shared goals, we foster a culture of collaboration and support that benefits our entire school community.      ",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 md:gap-10 py-5 min-[768px]:px-5 md:px-20 px-5">
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
        {content.map((item, i) => {
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
          <h2 className="text-xl text-[#12372A] font-semibold">
          Get in Touch
          </h2>
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
