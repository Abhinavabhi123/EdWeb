import "./news.css";

export default function News() {
  return (
    <div className="w-fill md:h-[100%] h-fit bg-transparent flex items-center justify-center md:my-10 ">
      <div className="w-[80%] h-full bg-transparent flex justify-center items-center">
        <div className="w-[90%] h-[80%] bg-transparent flex-col flex justify-center items-center ">
          <h1 className="w-full text-center text-2xl font-serif uppercase">
            Latest NEWS
          </h1>
          <div className="md:w-[80%] w-full  relative h-full min-h-[40rem] bg-text_color pb-10 md:pb-0 ">
            <div className="absolute hidden md:flex md:w-[15rem] w-[8rem] md:h-[10rem] h-[5rem] md:right-[-10rem] right-[-5rem] md:top-[-5rem] top-[-3rem] shadow-2xl card_animation">
              <img
                src="/robotics.jpg"
                alt="image"
                title="News Image"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="flex justify-center mt-10 flex-col items-center ">
              <h1 className="text-white  md:text-3xl w-full md:w-96 text-center font-serif px-4 md:px-0">
                Exciting Robotics Workshop Ignites Student&apos;s Passion for
                Innovation
              </h1>

              <img
                src="/robotics.jpg"
                alt="news image"
                className="md:hidden transition-all duration-500 w-3/4 h-auto mt-2"
              />
              <p className="px-8 text-white text-sm md:text-base mt-5 text-center">
                In an effort to foster creativity and technological curiosity
                among our students, the school recently hosted an exhilarating
                robotics workshop. The event took place in the state-of-the-art
                STEM lab and saw enthusiastic participation from students across
                various grade levels.
              </p>
              <p className="px-8 text-white mt-5 text-center text-sm md:text-base">
                Under the guidance of experienced robotics experts, students
                engaged in hands-on activities, learning the fundamentals of
                coding, engineering, and problem-solving. The workshop aimed to
                ignite a passion for innovation and equip students with valuable
                skills for the future.
              </p>
              <p className=" absolute bottom-0 text-xs md:text-sm text-gray-400 italic ">
                Date: February 1, 2024
              </p>
            </div>
            <div className="absolute md:w-[15rem] hidden md:flex w-[8rem] md:bottom-[-5rem]  max-[1232px]:bottom-[-5rem] bottom-[-3rem] h-[5rem] md:left-[-10rem] left-[-5rem] md:h-[10rem] shadow-2xl card_animation">
              <img
                src="/robotics.jpg"
                alt="image"
                title="News Image"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
