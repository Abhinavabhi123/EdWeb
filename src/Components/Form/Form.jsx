export default function Form() {
  return (
    <div className="w-[100%] h-fit bg-slate-200 py-2 flex flex-col justify-center items-center mt-5 md:mt-10 ">
      <p className="text-lg font-serif md:text-2xl md:mb-3">
        Keep Touch with Us...
      </p>

      <form className="md:w-[81%] w-[95%] md:h-[50%] md:py-5 pt-6 flex flex-col md:flex-row justify-around gap-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Please"
            className="w-[99%] md:w-[28rem] focus:outline-none h-10 placeholder:text-sm ps-4 border outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col">
            <label htmlFor="message" className="text-sm">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message area"
          className="md:w-96 w-[99%] h-20 border ps-2 pt-2 placeholder:text-sm resize-none rounded-md mt-2 md:mt-0 focus:outline-none"
          ></textarea>
          </div>
        <div className="w-full md:w-fit h-20 flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 w-fit h-fit p-3 rounded-md text-white hover:bg-blue-600 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
