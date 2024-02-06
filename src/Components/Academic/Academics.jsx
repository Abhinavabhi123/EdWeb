import "./academic";

export default function Academics() {
  const data = [
    {
      title: "Lower School - K-4",
      content:
        "Offering a classroom experience that is second to none, the values your child learns at home are reinforced at Wesleyan as we connect students with the best Christian educators and resources in Atlanta. Each child is known, encouraged, loved, and challenged within the appropriate developmental framework. This is part of our commitment to meet the academic, social, emotional, spiritual, and physical needs of our students.",
      img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654660_144957.jpg",
    },
    {
      title: "Middle School - 5-8",
      content:
        "Middle school is a time for students to explore new opportunities that are crucial to their development. Our campus, courses, and extracurricular activities are designed to help each child navigate their strengths, interests, and passions in an encouraging and supportive setting during these formative years.",
      img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654661_144958.jpg",
    },
    {
      title: " High School - 9-12",
      content:
        "The high school seeks to be a community of joy, where faculty and students share in the learning process, and where character, stewardship, and scholarship are held in high esteem. Encouraging students to be independent thinkers, faculty members are committed to instilling in students a love of learning and a concern for others by stressing the values of honesty, integrity, and personal responsibility. Ultimately, Wesleyan challenges and nurtures students to grow into responsible citizens prepared to lead and serve in an ever-changing world.",
      img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654662_144959.jpg",
    },
  ];

  return (
    <div className="w-full h-fit bg-slate-100 pb-5">
      <div className="flex justify-center pt-5">
        <h1 className="text-2xl font-semibold underline">Academic Result</h1>
      </div>
      <div className="w-full h-fit relative bg-transparent flex flex-col justify-center items-center md:flex-row md:px-20 p-10 border-b border-black md:border-none"  data-aos="fade-left">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="py-2">
            <h1 className="text-lg font-semibold">{data[0]?.title}</h1>
          </div>
          <div>
            <p>{data[0]?.content}</p>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
          <img src={data[0]?.img} alt="image" className="w-96" />
        </div>
      </div>
  
      <div className="w-full h-fit relative bg-transparent flex flex-col justify-center items-center md:flex-row md:px-20  p-10 border-b border-black  md:border-none" data-aos="fade-right">
        <div className="flex justify-center items-center md:w-1/2">
          <img src={data[1]?.img} alt="image" className="w-96" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center mt-2 md:mt-0">
          <div className="py-2">
            <h1 className="text-lg font-semibold">{data[1]?.title}</h1>
          </div>
          <div>
            <p>{data[1]?.content}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit relative bg-transparent flex flex-col justify-center items-center md:flex-row md:px-20  p-10 border-b" data-aos="fade-left">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="py-2">
            <h1 className="text-lg font-semibold">{data[2]?.title}</h1>
          </div>
          <div>
            <p>{data[2]?.content}</p>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2 mt-4 md:mt-0">
          <img src={data[2]?.img} alt="image" className="w-96" />
        </div>
      </div>
    </div>
  );
}
