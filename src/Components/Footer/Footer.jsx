export default function Footer() {
  return (
    <div className="w-full h-fit bg-yellow-400 flex flex-col items-center mt-5">
      <div className="w-full h-fit bg-transparent">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-20 md:w-auto pt-6 ps-4 pb-4"
        />
      </div>
      <div className="md:w-[90%] h-fit flex flex-col md:flex-row px-3 justify-center items-center">
        {/* About */}
        <div className="w-full md:w-[30%] md:h-[10rem] bg-transparent">
          <h1 className="text-lg font-semibold underline">About</h1>
          <p>
            Our mission is to change the way education meets the future; to
            foster interdisciplinary, integrated thinking and innovative
            leadership; to engage fully in the global community; and to
            facilitate lifelong learning.
          </p>
        </div>
        {/* Products */}
        <div className="w-full md:w-[30%] md:h-[10rem] bg-transparent md:ps-5 mt-4 md:mt-0">
          <p className="text-lg font-semibold underline">Services</p>
          <ul>
            <li className="cursor-pointer">Apply</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Social Media</li>
            <li className="cursor-pointer">Contexts</li>
          </ul>
        </div>

        {/* contact */}
        <div className="w-full md:w-[30%] md:h-[10rem] bg-transparent mt-4 md:mt-0 mb-8 md:mb-0">
          <p className="text-lg font-semibold underline">Address</p>
          <ul className="ps-5 gap-1 list-disc">
            <li>18 Goodfriend Drive East Hampton, NY 11937</li>
            <li> 739 Butter Lane Bridgehampton, NY 1193</li>
            <li> 18 Goodfriend Drive East Hampton, NY 11937</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit bg-transparent flex flex-col items-center mb-6">
        <p>Privacy Policy</p>
        <p className="text-xs md:text-sm ps-3 md:px-20 flex justify-center w-full">
          © [2024] ed-web. All Rights Reserved. Unauthorized copying or
          reproduction of content without explicit permission is prohibited. The
          content, design, and logos are the exclusive property of ed-web. For
          inquiries,
        </p>
        <p className="text-sm"> please contact: [https://ed-web-one.vercel.app/]</p>
      </div>
    </div>
  );
}
