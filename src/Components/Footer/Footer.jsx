export default function Footer() {
  return (
    <>
      <div className="w-full h-fit md:pb-10 bg-text_color text-sm md:text-base text-white flex flex-col items-center mt-5">
        <div className="w-full h-fit bg-transparent">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-20 md:w-auto pt-6 ps-4 pb-4"
          />
        </div>
        <div className="md:w-[90%] h-fit flex flex-col md:flex-row px-3 justify-center items-center">
          {/* About */}
          <div className="w-full md:w-[30%] md:h-[10rem] bg-transparent flex justify-center flex-col">
            <h1 className="text-lg font-semibold underline mb-3">About</h1>
            <p className="text-sm leading-7">
              Our mission is to change the way education meets the future; to
              foster interdisciplinary, integrated thinking and innovative
              leadership; to engage fully in the global community; and to
              facilitate lifelong learning.
            </p>
          </div>
          {/* Products */}
          <div className="w-full md:w-[30%] md:h-[90%] bg-transparent mt-4 md:mt-0 md:ps-36">
            <p className="text-lg font-semibold underline mb-3">Services</p>
            <ul className="text-sm leading-7">
              <li className="cursor-pointer">Apply</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Social Media</li>
              <li className="cursor-pointer">Contexts</li>
            </ul>
          </div>

          {/* contact */}
          <div className="w-full md:w-[30%] md:h-[10rem] bg-transparent mt-2 mb-8 md:mb-0">
            <p className="text-lg font-semibold underline mb-3">Address</p>
            <ul className="ps-5 gap-1 list-disc text-sm leading-7">
              <li>18 Goodfriend Drive East Hampton, NY 11937</li>
              <li> 739 Butter Lane Bridgehampton, NY 1193</li>
              <li> 18 Goodfriend Drive East Hampton, NY 11937</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-fit text-white flex flex-col items-center pb-6 bg-text_color">
        <p className="text-xs">Privacy Policy</p>
        <p className="text-xs ps-3 md:px-20 flex justify-center w-full">
          © [2024] ed-web. All Rights Reserved. Unauthorized copying or
          reproduction of content without explicit permission is prohibited. The
          content, design, and logos are the exclusive property of ed-web. For
          inquiries,
        </p>
        <p className="text-xs">
          {" "}
          please contact: [https://ed-web-one.vercel.app/]
        </p>
      </div>
    </>
  );
}
