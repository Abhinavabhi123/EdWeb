export default function AboutUpdated() {
  return (
    <section className="w-full relative h-fit flex justify-center flex-col items-center mt-32  mb-10">
      <div className="md:w-[60%] w-[80%] h-fit absolute bg-[#dfd6d1] flex-col flex justify-center  top-[-4rem] items-center md:p-8 px-4 py-2 shadow-xl shadow-black rounded-2xl">
        <h1 className="text-text_color text-2xl font-serif mb-2">About</h1>
        <p className="text-sm md:text-base">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to ED-Web, where education
          meets innovation and excellence. At ED-Web, we are committed to
          nurturing minds, fostering creativity, and empowering individuals to
          reach their full potential.Here&apos;s a glimpse into who we are and
          what sets us apart:
        </p>
      </div>
      <div className="w-full md:h-[80%] h-full bg-transparent flex justify-center px-2 md:px-0 items-center text-sm md:text-base mt-4">
        <div className="md:w-[70%] w-full h-fit pb-4 md:mt-0  bg-text_color rounded-2xl">
          <div className="w-full h-fit bg-orange- md:mt-36 mt-[8.5rem] px-10 text-white" data-aos="fade-up">
            <h4 className="text-lg font-semibold text-gray-500">Our Vision:</h4>
            <p className="text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At ED-Web, we envision a world
              where education transcends boundaries, empowers learners, and
              becomes a catalyst for positive change. Our vision is to create a
              dynamic learning ecosystem that prepares individuals to thrive in
              a rapidly evolving global landscape.
            </p>
            <h4 className="text-lg font-semibold text-gray-500">
              Mission Statement:
            </h4>
            <p className="">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our mission is to provide
              transformative educational experiences that inspire a love for
              learning, instill critical thinking skills, and equip individuals
              with the knowledge and skills needed to make a positive impact on
              society.
            </p>
            <h4 className="text-lg font-semibold text-gray-500">
              Core Values:
            </h4>
            <ul className="ms-6">

            <h3 className="font-semibold">Excellence</h3>
            <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We strive for excellence in every aspect of education, from
              curriculum design to teaching methodologies, ensuring a high
              standard of learning.
            </p>
            <h3 className="font-semibold">Innovation</h3>
            <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Embracing innovation in education, we integrate cutting-edge
              technologies and methodologies to enhance the learning experience.
            </p>
            <h3 className="font-semibold">Inclusivity</h3>
            <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We believe in creating an inclusive and diverse learning
              environment where every individual feels valued and supported.
            </p>
            <h3 className="font-semibold">Empowerment</h3>
            <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our goal is to empower learners to become confident, self-directed
              individuals who contribute meaningfully to their communities.
            </p>
            <h3 className="font-semibold">Collaboration</h3>
            <p className="text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We foster a culture of collaboration among students, educators,
              and the community, recognizing that collective efforts lead to
              greater achievements.
            </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
