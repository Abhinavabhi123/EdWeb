export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row mb-8 items-center mt-40 md:mt-0">
      <div className="px-10 md:w-[50rem] w-full md:h-auto relative flex justify-center">
        <img
          className="md:h-64 h-52 w-auto absolute md:-right-20 md:-top-32 -top-32  drop-shadow-xl rounded shadow-black"
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D"
          alt="about image"
        />
      </div>
      <div className="p-2 md:pe-28">
        <div className=" border rounded-md border-gray-500 bg-slate-100 shadow-lg  md:p-10 md:ps-24 p-10 pt-20 md:space-y-6 flex flex-col space-y-6">
          <h1 className="text-[20px] md:text-[30px] text-text_color font-semibold underline ms-[40%] md:ms-[20%]">About Us</h1>
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to ED-Web, where education
            meets innovation and excellence. At ED-Web, we are committed to
            nurturing minds, fostering creativity, and empowering individuals to
            reach their full potential.Here&apos;s a glimpse into who we are and
            what sets us apart:
          </p>
          <p>
            At ED-Web, we envision a world where education transcends
            boundaries, empowers learners, and becomes a catalyst for positive
            change. Our vision is to create a dynamic learning ecosystem that
            prepares individuals to thrive in a rapidly evolving global
            landscape.
          </p>
          <div className="flex justify-end">
            <a className="bg-text_color text-white p-2 rounded-md w-fit"> Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
