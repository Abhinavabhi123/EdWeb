import { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

export default function About() {
  const [openState, setOpenState] = useState([
    {
      item: 1,
      state: false,
    },
    {
      item: 2,
      state: false,
    },
    {
      item: 3,
      state: false,
    },
    {
      item: 4,
      state: false,
    },
    {
      item: 5,
      state: false,
    },
  ]);

  function openDropDown(item) {
    console.log("opening");
    setOpenState((prevOpenState) =>
      prevOpenState.map((dropdown) =>
        dropdown.item === item ? { ...dropdown, state: true } : dropdown
      )
    );
  }
  console.log(openState, "ppp");
  function closeDropDown(item) {
    setOpenState((prevOpenState) =>
      prevOpenState.map((dropdown) =>
        dropdown.item === item ? { ...dropdown, state: false } : dropdown
      )
    );
  }

  return (
    <div className="w-full h-fit bg-transparent 500 flex flex-col md:flex-row">
      {/* left side */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full ">
        <div className="w-[100%] h-fit bg-transparent">
          <div className="w-[100%] h-20 bg-transparent flex justify-center items-center text-2xl font-bold text-text_color">
            About Us
          </div>
          <div className="w-[100%]  h-fit pb-5 flex justify-center items-center flex-col bg-transparent">
            <div className=" w-[100%] h-fit md:w-[80%]">
              <div className="w-[100%] h-fit ">
                <p className="px-10 bg-transparent first-letter:font-bold first-letter:text-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to ED-Web, where
                  education meets innovation and excellence. At ED-Web, we are
                  committed to nurturing minds, fostering creativity, and
                  empowering individuals to reach their full
                  potential.Here&apos;s a glimpse into who we are and what sets
                  us apart:
                </p>
              </div>
              <div className="w-[100%] h-fit px-10 mt-4">
                <h4 className="text-lg font-semibold text-gray-500">
                  Our Vision:
                </h4>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At ED-Web, we envision a world
                  where education transcends boundaries, empowers learners, and
                  becomes a catalyst for positive change. Our vision is to
                  create a dynamic learning ecosystem that prepares individuals
                  to thrive in a rapidly evolving global landscape.
                </p>
              </div>
              <div className="w-[100%] h-fit px-10 mt-4 transition ease-in-out">
                <h4 className="text-lg font-semibold text-gray-500">
                  {" "}
                  Mission Statement:{" "}
                </h4>
                <p className="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our mission is to provide
                  transformative educational experiences that inspire a love for
                  learning, instill critical thinking skills, and equip
                  individuals with the knowledge and skills needed to make a
                  positive impact on society.
                </p>
              </div>
              <div className="w-full h-fit  px-10 mt-4">
                <h4 className="text-lg font-semibold text-gray-500">
                  Core Values:
                </h4>
              </div>
              <div className="w-full h-fit bg-transparent flex justify-center items-center">
                <div className="w-full px-5 md:px-0 md:w-[80%] h-fit bg-transparent">
                  {/* item1 */}
                  <div className="border mt-5 rounded-md mb-2">
                    <div className="border rounded-t-md w-full h-12 flex items-center px-5 justify-between transition-transform duration-700 ease-linear">
                      <h3 className="font-semibold">Excellence</h3>
                      {openState[0]?.item === 1 &&
                      openState[0]?.state === true ? (
                        <IoCaretDownSharp
                          className="rotate-180 cursor-pointer"
                          onClick={() => closeDropDown(1)}
                        />
                      ) : (
                        <IoCaretDownSharp
                          className=" cursor-pointer"
                          onClick={() => openDropDown(1)}
                        />
                      )}
                    </div>
                    <div
                      className={`w-full h-fit px-5 py-8 transition-transform duration-700 ease-in-out ${
                        openState[0]?.item === 1 && openState[0]?.state === true
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="text-black">
                        We strive for excellence in every aspect of education,
                        from curriculum design to teaching methodologies,
                        ensuring a high standard of learning.
                      </p>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div className="border rounded-md mb-2">
                    <div className="border rounded-t-md w-full h-12 flex items-center px-5 justify-between">
                      <h3 className="font-semibold">Innovation</h3>
                      {openState[1]?.item === 2 &&
                      openState[1]?.state === true ? (
                        <IoCaretDownSharp
                          className="rotate-180  cursor-pointer"
                          onClick={() => closeDropDown(2)}
                        />
                      ) : (
                        <IoCaretDownSharp
                          className=" cursor-pointer"
                          onClick={() => openDropDown(2)}
                        />
                      )}
                    </div>
                    <div
                      className={`w-full h-fit px-5 py-8 transition-transform duration-700 ease-in-out ${
                        openState[1]?.item === 2 && openState[1]?.state === true
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="text-black">
                        Embracing innovation in education, we integrate
                        cutting-edge technologies and methodologies to enhance
                        the learning experience.
                      </p>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div className="border rounded-md mb-2">
                    <div className="border rounded-t-md w-full h-12 flex items-center px-5 justify-between">
                      <h3 className="font-semibold">Inclusivity</h3>
                      {openState[2]?.item === 3 &&
                      openState[2]?.state === true ? (
                        <IoCaretDownSharp
                          className="rotate-180  cursor-pointer"
                          onClick={() => closeDropDown(3)}
                        />
                      ) : (
                        <IoCaretDownSharp
                          className=" cursor-pointer"
                          onClick={() => openDropDown(3)}
                        />
                      )}
                    </div>
                    <div
                      className={`w-full h-fit px-5 py-8 transition-transform duration-700 ease-in-out ${
                        openState[2]?.item === 3 && openState[2]?.state === true
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="text-black">
                        We believe in creating an inclusive and diverse learning
                        environment where every individual feels valued and
                        supported.
                      </p>
                    </div>
                  </div>
                  {/* item 4 */}
                  <div className="border rounded-md mb-2">
                    <div className="border rounded-t-md w-full h-12 flex items-center px-5 justify-between">
                      <h3 className="font-semibold">Empowerment</h3>
                      {openState[3]?.item === 4 &&
                      openState[3]?.state === true ? (
                        <IoCaretDownSharp
                          className="rotate-180  cursor-pointer"
                          onClick={() => closeDropDown(4)}
                        />
                      ) : (
                        <IoCaretDownSharp
                          className=" cursor-pointer"
                          onClick={() => openDropDown(4)}
                        />
                      )}
                    </div>
                    <div
                      className={`w-full h-fit px-5 py-8 transition-transform duration-700 ease-in-out ${
                        openState[3]?.item === 4 && openState[3]?.state === true
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="text-black">
                        Our goal is to empower learners to become confident,
                        self-directed individuals who contribute meaningfully to
                        their communities.
                      </p>
                    </div>
                  </div>
                  {/* item 5 */}
                  <div className="border rounded-md">
                    <div className="border rounded-t-md w-full h-12 flex items-center px-5 justify-between">
                      <h3 className="font-semibold">Collaboration</h3>
                      {openState[4]?.item === 5 &&
                      openState[4]?.state === true ? (
                        <IoCaretDownSharp
                          className="rotate-180  cursor-pointer"
                          onClick={() => closeDropDown(5)}
                        />
                      ) : (
                        <IoCaretDownSharp
                          className=" cursor-pointer"
                          onClick={() => openDropDown(5)}
                        />
                      )}
                    </div>
                    <div
                      className={`w-full h-fit px-5 py-8 transition-transform duration-700 ease-in-out ${
                        openState[4]?.item === 5 && openState[4]?.state === true
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="text-black">
                        We foster a culture of collaboration among students,
                        educators, and the community, recognizing that
                        collective efforts lead to greater achievements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center px-3 ">
        {/* <div className="w- h-[90%] bg-pink-500 flex justify-center items-center"> */}
          <img src="/2794.jpg" alt="" className="w-full h-full object-cover border-t-2 border-gray-600"/>
        {/* </div> */}
      </div>
    </div>
  );
}
