export default function Academic() {
  const data = [
    {
      title: "Lower School - K-4",
      content: "",
      img: "",
    },
    {
      title: "Middle School - 5-8",
      content: "",
      img: "",
    },
    {
      title: " High School - 9-12",
      content: "",
      img: "",
    },
  ];

  return (
    <div className="w-full h-[30rem] bg-green-500 px-28 py-1">
      <div className="flex justify-center my-2">
        <h1 className=" text-[20px] md:text-[30px] text-text_color underline font-semibold">
          Academic Results
        </h1>
      </div>
      <div className="w-full h-[80%] flex space-x-10">
        <div className="flex w-1/4 flex-col space-y-4 h-full bg-orange-600">
          <div>
            <h2 className="text-[10px] md:text-[20px] text-text_color font-semibold">
              Academics
            </h2>
          </div>
          {data.map((item, i) => {
            return (
              <div key={i} className="px-2 py-1">
                <p className="bg-red-500 w-fit px-3 py-1 rounded-md cursor-pointer">
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[100%] bg-yellow-400">
            <div className="w-full ">
                <h3>Lower School - K-4</h3>
            </div>
            <div className="w-full ">
                <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/smart-student-holding-file_1098-3425.jpg?t=st=1706967913~exp=1706968513~hmac=0ad7e54104a2a202f040754c46656c204b2e15435316da2052f266e10474e88d" alt="image" />
            </div>
        </div>
      </div>
    </div>
  );
}
