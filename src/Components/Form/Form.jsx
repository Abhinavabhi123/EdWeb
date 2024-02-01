export default function Form() {
  return (
    <div className="w-[100%] h-fit bg-slate-200 py-2 flex flex-col justify-center items-center mt-5 md:mt-10 md:pb-4 ">
      <p className="text-lg font-serif md:text-2xl md:mb-3 text-text_color">
        Keep Touch with Us...
      </p>

      <form className="md:w-[81%] w-[95%] md:h-[50%] md:pt-5 pt-6 flex flex-col md:flex-row justify-around gap-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-2 md:mb-0">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Please"
            className="w-[99%] md:w-[90%] focus:outline-none h-10 placeholder:text-sm ps-4 border outline-none rounded-md"
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
            className="bg-text_color w-fit h-fit p-3 rounded-md text-white hover:bg-blue-600 md:mt-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
