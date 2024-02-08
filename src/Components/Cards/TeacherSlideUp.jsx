

export default function TeacherSlideUp(Props) {
    const {name,position,subject,desc,image} = Props.data
  return (
    <div className="min-w-72  h-80 relative bg-transparent overflow-hidden group">
      <img className="w-full h-full object-cover" src={image} alt={name} title={name}/>
        <div className="absolute w-full h-full py-4 top-0 bg-yellow-500 translate-y-64 group-hover:-translate-y-0 transition-all duration-[600ms] ease-in-out flex flex-col pt-5 items-center px-5 gap-2">
            <h3 className="font-semibold py-2">{name}</h3>
            <h2>{position}</h2>
            {
                subject&& <h2>Sub: {subject}</h2>
            }
            <p className="text-center text-[14px] ">{desc}</p>
        </div>
    </div>
  )
}
