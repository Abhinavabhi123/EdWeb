export default function News() {
  return (
    <article className="w-full h-fit bg-slate-100 flex flex-col justify-center items-center py-3 pb-7">
      <h1 className="text-2xl font-semibold md:text-3xl md:font-serif">News</h1>
      {/* Date */}
      <div className="w-[90%] h-full md:w-[80%] md:h-[80%] rounded-md bg-[#D0B8A8] bg-opacity-50">
        <div className="w-full h-fit flex justify-end pe-3">
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            <i>Date: February 1, 2024</i>
          </p>
        </div>
        <div className="w-full flex justify-center flex-col items-center gap-7  ">
          <h1 className="text-2xl font-serif px-2">
            Exciting Robotics Workshop Ignites Student&apos;s Passion for
            Innovation
          </h1>
          <img src="/robotics.jpg" alt="news image" className="w-96" />
          <div className="w-full h-fit pt-4 ps-2 md:px-20 md:leading-7 md:flex">
            <p className="pe-1 border-r border-black">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <b>In</b> an effort to foster creativity and technological
              curiosity among our students, the school recently hosted an
              exhilarating robotics workshop. The event took place in the
              state-of-the-art STEM lab and saw enthusiastic participation from
              students across various grade levels.
            </p>
            <br />
            <p className="ps-3 border-r border-black pe-1">
              Under the guidance of experienced robotics experts, students
              engaged in hands-on activities, learning the fundamentals of
              coding, engineering, and problem-solving. The workshop aimed to
              ignite a passion for innovation and equip students with valuable
              skills for the future.
            </p>
            <p className="ps-3">
              The atmosphere buzzed with excitement as teams collaborated to
              design and build their own robots. From navigating obstacle
              courses to solving real-world challenges, participants showcased
              their ingenuity and teamwork throughout the day.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col items-center  ps-2 md:px-32 md:leading-7 mb-4 md:mb-10">
            <p className="text-center">
              The school administration expressed gratitude to the guest
              instructors and emphasized the importance of such initiatives in
              preparing students for the ever-evolving landscape of technology
              and science.
            </p>
            <p>
              Stay tuned for more updates on our school&apos;s commitment to
              providing enriching experiences that go beyond the classroom!
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
