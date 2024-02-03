export default function ApplyForm() {
  return (
    <div
      className="w-full md:flex flex-shrink justify- md:pb-5"
      style={{
        backgroundImage:
          "url('https://www.nnmacademy.org/upload/search-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      }}
    >
      <div className="hidden md:block w-[50%] h-full bg-transparent"></div>
      <div className="p-6 ">
        <h1 className="p-3 text-3xl font-bold text-white drop-shadow-lg shadow-black">Apply</h1>
        <form className="w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b] outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b] outline-none mt-3 md:mt-0"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:mt-2 ">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b] outline-none mt-3 md:mt-0"
              />
            </div>
            <div>
              <select className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b]  text-slate-400 outline-none mt-3 md:mt-0">
                <option value="" className="w-36">
                  Please Select
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:mt-2">
            <div>
              <select className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b] text-slate-400 outline-none mt-3 md:mt-0">
                <option value="" className="w-36">
                  Please Select State
                </option>
              </select>
            </div>
            <div className="flex-wrap">
              <select className="w-full md:w-72 ps-3 py-5 bg-[#3b4b6b] text-slate-400 outline-none mt-3 md:mt-0  pr-10">
                <option value="" className="w-36">
                  Please Select City
                </option>
              </select>
            </div>
          </div>
          <div>
            <button className="bg-red-600 w-full md:w-[37rem] px-4 py-4 mt-3 rounded-none text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
