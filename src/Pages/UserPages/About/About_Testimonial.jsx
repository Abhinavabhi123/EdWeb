import { TestimonialBanner, TestimonialContent } from "../../../Components";


export default function About_Testimonial() {
  window.scrollTo(0, 0);
  return (
    <div className="w-full h-full md:mt-20">
      <TestimonialBanner/>
      <TestimonialContent/>
    </div>
  )
}
