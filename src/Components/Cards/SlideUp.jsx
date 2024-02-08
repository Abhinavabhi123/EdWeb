
export default function SlideUp(Props) {
    const { data, heading, details } = Props;

    return (
      <div className="flex flex-col  mb-5">
        <div className="w-full ps-5 md:ps-24">
          <h1 className="text-2xl text-[#12372A] font-semibold">{heading}</h1>
        </div>
        {details && (
          <div className="flex md:px-36 mt-10 px-5">
            <p className="text-center tracking-wider">{details}</p>
          </div>
        )}

        <div className="flex md:p-10 flex-wrap justify-center items-center md:space-x-7 gap-10 mt-5 md:gap-28">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="w-80 group/card relative h-96 shadow-2xl shadow-gray-500 cursor-pointer shade overflow-hidden transition-all duration-1000"
                data-aos="slide-left"
              >
                <img
                  src={item?.img}
                  alt="image"
                  className="w-full relative h-full z-0 object-cover "
                />
                <div className="w-full absolute -translate-y-16 group-hover/card:-translate-y-60 z-10 transition duration-700  min-h-60 bg-black bg-opacity-70 p-5 space-y-4 text-white ">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p>{item?.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}
