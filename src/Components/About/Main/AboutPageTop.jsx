import "./about.css";

export default function AboutPageTop() {
  return (
    <div className="w-full min-h-[40rem] flex justify-start py-3 about_container ">
        <div className="md:w-1/2 w-full min-h-1/2 md:h-full flex items-center text-white flex-col z-10 p-10 px-5 md:m-20 space-y-10 overflow-hidden">
          <h1 className="text-2xl md:text-5xl font-serif " data-aos="fade-up" data-aos-duration="1000">
            Empowering Minds, Building Futures: Discover Our <br /> Journey of
            Excellence
          </h1>
          <div className="w-full h-fit content-start"> 
          <div className="w-32 h-1 rounded-md bg-gradient-to-r from-yellow-400  to-red-500">

            </div></div>
          <p className="leading-7" data-aos="fade-up" data-aos-duration="1200">
            This caption succinctly encapsulates the school&apos;s commitment to
            providing quality education, nurturing students&apos; potential, and
            fostering a supportive learning environment. It emphasizes the
            school&apos;s dedication to empowering students to excel
            academically and personally, while also highlighting the
            institution&apos;s reputation for excellence and continuous growth.
          </p>
          <div className="slide_up_image left-8 -bottom-96">
            <img
              src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150710028.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph"
              alt="teacher image"
              className=" slide_up_image w-full h-full object-cover rounded-[15px] shadow-2xl shadow-gray-500"
            />
          </div>
          <div className="slide_up_image right-8 -bottom-60">
            <img
              src="https://img.freepik.com/free-photo/view-3d-female-teacher_23-2150710016.jpg?size=626&ext=jpg&ga=GA1.1.1981747240.1706546885&semt=sph"
              alt="teacher image"
              className=" slide_up_image w-full h-full object-cover rounded-[15px] shadow-2xl shadow-gray-500"
            />
          </div>
        </div>
      </div>
  )
}
