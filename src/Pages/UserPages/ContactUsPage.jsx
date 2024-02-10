import { ContactUsBanner, ContactUsContent } from "../../Components";


export default function ContactUsPage() {
  window.scrollTo(0, 0);
  return (
    <div className="w-full h-full md:mt-20">
        <ContactUsBanner/>
        <ContactUsContent/>
    </div>
  )
}
