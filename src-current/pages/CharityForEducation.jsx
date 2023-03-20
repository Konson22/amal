import { data } from "./home/OurFocus";

export default function CharityForEducation() {
  return (
    <div>
      <header className="education-header flex items-center lg:h-[35vh] bg-teal-300 px-[6%] lg:py-0 py-[3.5rem]">
        <div className="lg:w-[70%] text-white">
           {/* <h1 className="text-8xl font-bold">Change Child Life</h1> */}
          <h1 className="lg:text-7xl text-4xl font-bold">Educate Child Today</h1>
          {/* <h1 className="lg:text-7xl text-3xl font-bold">Building a better world for and with children</h1> */}
        </div>
      </header>
      <div className="lg:px-[22%] px-3 my-6">
        <h2 className="lg:text-5xl text-3xl font-bold text-center mb-4">Building a better world for and with children</h2>
        <p className="text-base text-center">
          Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
        </p>
      </div>
      <div className="lg:px-[12%] px-3 py-[4rem] my-6">
        <h2 className="lg:text-5xl text-3xl font-bold text-center mb-8">What I get as sponsor?</h2>
        <div className="lg:grid grid-cols-2 gap-8">
          {data.slice(1).map(category => (
            <div className='bg-amber-100 lg:mb-0 mb-8'>
              <img className='lg:h-[270px] h-[260px] w-full' src={category.image} alt='' />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p>{category.text} </p>
                <div className="mt-5">
                  <button className=" px-3 py-1 bg-teal-500 text-white" to={category.path}>Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
