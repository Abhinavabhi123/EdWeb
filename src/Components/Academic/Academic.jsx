// import { useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";


// export default function Academic() {
//   const [view, setView] = useState(0);
//   const data = [
//     {
//       title: "Lower School - K-4",
//       content:
//         "Offering a classroom experience that is second to none, the values your child learns at home are reinforced at Wesleyan as we connect students with the best Christian educators and resources in Atlanta. Each child is known, encouraged, loved, and challenged within the appropriate developmental framework. This is part of our commitment to meet the academic, social, emotional, spiritual, and physical needs of our students.",
//       img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654660_144957.jpg",
//     },
//     {
//       title: "Middle School - 5-8",
//       content:
//         "Middle school is a time for students to explore new opportunities that are crucial to their development. Our campus, courses, and extracurricular activities are designed to help each child navigate their strengths, interests, and passions in an encouraging and supportive setting during these formative years.",
//       img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654661_144958.jpg",
//     },
//     {
//       title: " High School - 9-12",
//       content:
//         "The high school seeks to be a community of joy, where faculty and students share in the learning process, and where character, stewardship, and scholarship are held in high esteem. Encouraging students to be independent thinkers, faculty members are committed to instilling in students a love of learning and a concern for others by stressing the values of honesty, integrity, and personal responsibility. Ultimately, Wesleyan challenges and nurtures students to grow into responsible citizens prepared to lead and serve in an ever-changing world.",
//       img: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/995/link/large_link654662_144959.jpg",
//     },
//   ];

//   console.log(view, "viewwww");

//   return (
//     <div className="w-full flex flex-col h-fit bg-transparent md:px-28 px-8 py-1">
//       <div className="flex justify-center my-2">
//         <h1 className=" text-[20px] md:text-[30px] text-text_color underline font-semibold">
//           Academic Results
//         </h1>
//       </div>
//       <div className="w-full h-[80%] flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0">
//         <div className="flex w-full md:w-1/4  flex-col pe-5 space-y-4 h-full pb-5 bg-text_color rounded-lg">
//           <div>
//             <h2 className="ps-3 pt-3 md:text-[20px]  text-white font-semibold">
//               Academics
//             </h2>
//           </div>
//           {data.map((item, i) => {
//             return (
//               <div key={i} className="px-2 py-1 " onClick={() => setView(i)}>
//                 <p className=" w-fit px-3 py-1 bg-[#BFD8AF] text-sm rounded-md cursor-pointer">
//                   {item?.title}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <div className="w-full h-[100%] bg-slate-100  rounded-lg">
//           <div className="w-full flex justify-center my-4">
//             <h3 className="text-xl transition-all duration-500">{data[view]?.title}</h3>
//           </div>
//           <div className="w-full flex flex-col md:flex-row justify-center items-center">
//             <div className="w-full md:w-1/2 px-6">
//               <p className="transition-all duration-500">{data[view]?.content}</p>
//               <div className="flex w-full justify-end pe-4 my-4">
//                 <a className="px-3 py-2 bg-text_color rounded-md flex items-center  gap-2 group text-white cursor-pointer"> Read More
//                 <FaArrowRightLong className="hidden group-hover:block transition-all duration-[3s] ease-in-out" />
//                  </a>
//               </div>
//             </div>
//             <div className="md:w-1/2 w-[90%] md:h-[19rem] mt-3">
//               <img
//                 src={data[view]?.img}
//                 className="w-full h-full object-cover transition-all duration-500"
//                 alt="academic image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
