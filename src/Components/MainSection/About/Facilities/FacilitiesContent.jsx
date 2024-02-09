import "./facilities.css";

export default function FacilitiesContent() {
  const data = [
    [
      {
        img: "https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Modern Classroom",
        text: "Our classrooms are equipped with the latest technology and resources to enhance teaching and learning. ",
      },
      {
        img: "https://img.freepik.com/free-photo/interior-empty-science-laboratory-with-modern-equipment-prepared-pharmaceutical-innovation-using-high-tech-microbiology-tools-scientific-research-vaccine-development-against-covid19-virus_482257-12800.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Science and Computer Labs",
        text: "Our fully equipped science laboratories offer students hands-on opportunities to explore and engage with scientific concepts.",
      },
      {
        img: "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Library and Resource Center",
        text: "Our library and resource center is a hub of knowledge and creativity, providing students with access to a wide range of resources, including books, e-books, digital databases, and multimedia materials.",
      },
      {
        img: "https://img.freepik.com/free-photo/running-tracks-empty-health-club_637285-8442.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Sports and Fitness Center",
        text: "Our school boasts top-notch athletic facilities to support our students' physical health and well-being. From well-maintained sports fields and courts to a fully equipped gymnasium.",
      },
    ],
    [
      {
        img: "https://img.freepik.com/free-photo/oil-paints-brushes-palette-wood-wall_176420-2800.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Arts and Cultural Space",
        text: "Our performing arts spaces provide a platform for students to showcase their talents and creativity. With a dedicated auditorium, music rooms, and rehearsal spaces.",
      },
      {
        img: "https://img.freepik.com/premium-photo/lunch-kindergarten-russia-table-setting-before-meals_182793-2666.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Cafeteria and Dining Facilities",
        text: "Our cafeteria and dining facilities provide nutritious and delicious meals to fuel our students' bodies and minds. With a variety of options to accommodate different dietary preferences and needs.",
      },
      {
        img: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631022.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Safety and Security",
        text: "We have established clear safety policies and procedures to govern conduct on campus and promote a culture of safety and respect. These policies cover areas such as bullying prevention, conflict resolution.",
      },
      {
        img: "https://img.freepik.com/premium-photo/hdr-tate-gallery-london_469558-36056.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
        title: "Good Campus",
        text: "We are committed to sustainability and environmental stewardship, and our Green Campus Initiative reflects our dedication to creating a greener and more eco-friendly learning environment.",
      },
    ],
  ];

  return (
    <div className="w-full mt-5 md:px-16  pt-5">
      <div className="w-full">
        <div className="flex p-5">
          <h1 className="text-2xl text-[#12372A] font-semibold">
            Empowering Tomorrow&apos;s Leaders Through Exceptional Facilities
          </h1>
        </div>
        <div className="flex md:px-10 flex-col p-8 space-y-5 rounded-lg bg-slate-200 ">
          <p>
            Discover the unparalleled facilities at [School Name], designed to
            foster holistic development and empower students for a future of
            success. Our state-of-the-art campus provides an enriching
            environment where learning extends beyond the classroom.
          </p>
          <p>
            At [School Name], we believe that a conducive atmosphere is
            essential for nurturing young minds. Our facilities are meticulously
            crafted to cater to the diverse needs and interests of our students,
            ensuring an immersive learning experience at every step of their
            educational journey.
          </p>
          <p>
            From well-equipped laboratories for hands-on scientific exploration
            to expansive libraries filled with a vast array of resources, we
            provide the tools necessary for students to explore their passions
            and expand their horizons. Our sports facilities promote physical
            health and teamwork, while art studios and performance spaces foster
            creativity and self-expression.
          </p>
          <p>
            Moreover, our commitment to sustainability is reflected in our
            eco-friendly campus initiatives, demonstrating our dedication to
            environmental stewardship and instilling in our students a sense of
            responsibility towards the planet.
          </p>
          <p>
            At [School Name], we understand that the learning environment plays
            a pivotal role in shaping students&apos; futures. That&apos;s why we
            continuously strive to enhance our facilities, ensuring that every
            student has the opportunity to thrive and reach their fullest
            potential in a supportive and inspiring setting.
          </p>
        </div>
      </div>
      <div className="w-full  md:h-[25rem] h-[15rem] bg-transparent mt-5">
        <div className="w-full h-full flex">
          {data[0]?.map((item, i) => {
            return (
              <div
                key={i}
                className="h-full relative  w-1/4 hover:w-full overflow-hidden  md:hover:w-1/2 group hover:bg-blue-300 transition-all duration-700"
              >
                <img
                  className="w-full h-full relative image_shade"
                  src={item?.img}
                  alt="image"
                />
                <div className="absolute w-full h-full bg-[#000000a5] top-0 hidden group-hover:block transition-all duration-500"></div>
                <div className="absolute w-full h-full top-0 flex  flex-col px-5 items-center translate-y-10 md:translate-y-32 gap-4">
                  <h1 className="text-white text-center font-semibold md:text-2xl">
                    {item?.title}
                  </h1>
                  <p className="text-white opacity-0 text-xs md:text-base group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-700 font-semibold text-center">
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:h-[25rem] h-[15rem] bg-transparent">
        <div className="w-full h-full flex">
          {data[1]?.map((item, i) => {
            return (
              <div
                key={i}
                className="h-full relative  w-1/4 hover:w-full md:hover:w-1/2 group hover:bg-blue-300 transition-all duration-700"
              >
                <img
                  className="w-full h-full relative image_shade"
                  src={item?.img}
                  alt="image"
                />
                <div className="absolute w-full h-full bg-[#000000a5] top-0 hidden group-hover:block transition-all duration-500"></div>
                <div className="absolute w-full h-full top-0 flex  flex-col px-5 items-center translate-y-10 md:translate-y-32 gap-4">
                  <h1 className="text-white text-center font-semibold md:text-2xl">
                    {item?.title}
                  </h1>
                  <p className="text-white opacity-0 text-xs md:text-base group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-700 font-semibold text-center">
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
