import SlideUp from "../../Cards/SlideUp";
import "./mission.css";

export default function MissionContent() {
  const data = [
    {
      title: "Inspiring Excellence",
      content:
        "We are committed to providing a rigorous and innovative educational experience that challenges students to think critically, communicate effectively, and embrace lifelong learning.",
      img: "https://img.freepik.com/premium-photo/reach-summit-with-study-concept-school-education_207634-1688.jpg?w=740",
    },
    {
      title: "Empowering Leadership",
      content:
        "We nurture leadership qualities in our students, encouraging them to take initiative, collaborate with others, and make positive contributions to their communities.",
      img: "https://img.freepik.com/premium-photo/back-school_854558-1364.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
    },
    {
      title: "Fostering Diversity",
      content:
        " We celebrate diversity and cultivate an inclusive environment where students from all backgrounds feel valued, respected, and supported.",
      img: "https://img.freepik.com/premium-photo/colorful-image-hands-holding-circle-with-word-love-it_883586-177.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
    },
  ];

  const vision = [
    {
      title: "Holistic Development",
      content:
        "Our vision is to cultivate well-rounded individuals who excel not only academically but also in character, creativity, and compassion.",
      img: "https://img.freepik.com/free-photo/woman-kid-with-devices-medium-shot_23-2149056207.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
    },
    {
      title: "Global Citizenship",
      content:
        "We aspire to develop global citizens who are culturally aware, socially responsible, and equipped to address the challenges and opportunities of a interconnected world.",
      img: "https://img.freepik.com/free-photo/brunette-woman-holding-globe-gray_114579-40001.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
    },
    {
      title: "Continuous Innovation",
      content:
        " We embrace innovation and embrace new technologies, methodologies, and pedagogies to enhance teaching and learning and prepare students for the demands of the 21st century.",
      img: "https://img.freepik.com/free-photo/problem-solving-concept-with-gear-wheels_23-2149908703.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=ais",
    },
  ];
  const details =
    "At Ed-Web, our mission is to transform the landscape of medical education in India by empowering aspiring doctors to achieve their dreams. We understand the challenges faced by medical students, especially when it comes to excelling in exams.";

  const content = [
    {
      title: "Our Commitment to Excellence",
      content:
        "We have witnessed a concerning trend of declining passing percentages in the 10th exam over the years. This trend not only impacts the aspirations of individual students but also affects the overall quality of medical professionals in our country. Ed-Web is committed to reversing this trend and ensuring a brighter future for our medical graduates.",
    },
    {
      title: "Expert Guidance for Success",
      content:
        "At Ed-Web, we have assembled a team of highly experienced professionals dedicated to preparing the doctors of tomorrow. Our comprehensive coaching program is designed to equip students with the knowledge, skills, and confidence needed to excel in 10th and 12th exams. With personalized attention and innovative teaching methods, we aim to achieve the highest passing ratio among our students.",
    },
    {
      title: "Your Path to Success Starts Here",
      content:
        "We believe that success in medical exams requires not only a strong foundation of education but also the right guidance and support. That's why we offer a meticulously crafted course curriculum, supplemented by the expertise of our exceptional faculty. Our goal-oriented approach ensures that every student receives the guidance they need to fulfill their potential and achieve their goals.",
    },
    {
      title: "Experience the Ed-Web Advantage",
      content:
        "Experience the Ed-Web advantage and take the first step towards a successful career in medicine. With our top-notch coaching, dedicated faculty, and unwavering commitment to excellence, we are confident that you will achieve the score of your dreams. Join the Ed-Web family today and unlock your potential for success!",
    },
  ];

  return (
    <div className="w-full mt-5 md:px-16 bg-slate-200 pt-5 overflow-hidden">
      <SlideUp data={data} heading={"Our Mission :"} details={details} />
      <div className="mt-10 md:mt-0">
        <SlideUp data={vision} heading={"Our Vision :"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-2 md:grid-rows-2 px-5 md:p-14">
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
      <div className="flex justify-center items-center flex-col py-5">
        <div className="py-4">
          <h2 className="text-xl font-semibold text-[#12372A]">
            Join the Ed-Web Family
          </h2>
        </div>
        <div className="px-3 md:px-16 text-center">
          <p>
            Join us at Ed-Web and embark on a journey towards a rewarding career
            in medicine. Together, we can make a positive impact on the
            healthcare industry in India and fulfill the growing demand for
            skilled medical professionals. Let us guide you towards success in
            your future.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-3 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
