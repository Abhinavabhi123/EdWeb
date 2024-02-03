import "./testimonial.css";

const Testimonial = () => {

    const  testimonials = [
        {
            img:"https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=900&t=st=1706862410~exp=1706863010~hmac=8f99c6762f687c418b39c20c4794d278647b0e6c9086179fccb3d23d804bc84e",
            title:"******"
        },
        {
            img:"https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?t=st=1706862320~exp=1706862920~hmac=5e70391d7cbce9f1bc618cd8f0654a8e63404a75e52ae4584ed2e71378da8d60",
            title:"******"
        },{
            img:"https://img.freepik.com/free-photo/beautiful-business-woman-with-dark-short-hair-white-shirt-holding-black-folder-hands-while-joyfully-looking-camera-blue-background_574295-3492.jpg?w=996&t=st=1706862499~exp=1706863099~hmac=925f0eb073786cabdabac05d7808379b364712ed458e82151c1e34e978840977",
            title:"******"
        },
        {
            img:"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=996&t=st=1706862530~exp=1706863130~hmac=bfeeac83def438119ed2c3e456be437b386ffcb69f7bf3a139b4b42a2bba3b78",
            title:"******"
        }
    ]
  return (
    <section className="w-full  relative  h-fit mt-7 bg-slate-200 pb-6">
      <div className="w-full text-3xl flex justify-center pt-2">
        <h1 className="text-center font-serif text-[20px] md:text-[30px] mt-2 underline">
          Our Testimonials
        </h1>
      </div>
      {/* card container */}
      <div className="card_wrapper w-full overflow-hidden md:min-h-[33rem] h-fit bg-transparent pb-5 flex justify-center md:gap-10 items-center flex-wrap">
        {
            testimonials.map((item,i)=>{
                return(
                    <div key={i} className=" text-card mt-20 md:mt-0 bg-white" data-aos="fade-left" >
                    <div className="imgBx w-56 h-10">
                      <img
                        src={item?.img}
                        alt=""
                        className="rounded-lg w-full h-ful object-cover"
                      />
                    </div>
                    <div className="content">
                      <h2>{item?.title}</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                        eligendi.
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                )
            })
        }
      </div>
    </section>
  );
};

export default Testimonial;
