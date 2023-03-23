import { aboutUsData } from "../assets/data";

export default function Aboutus() {
  return (
    <div className="lg:flex lg:px-[10%] px-3 lg:py-[4rem] py-[1rem]">
      <div className="flex-1 lg:mr-12">
        {aboutUsData.map(about => (
          <div className='lg:mb-6 mb-4'>
            <h2 className="text-xl">{about.title}</h2>
            <p className="text-base">{about.text}</p>
          </div>
        ))}
      </div>
      <div className="lg:w-[38%] bg-gray-200 p-6">
        <h1 className="text-3xl font-bold">GET IN TOUCH</h1>
        <p className="text-xl">If you have feedback, questions or would like to get involved, we’d love to hear from you.</p>
        <form className='mt-6'>
          <div className="lg:h-[3.5rem] h-[3rem] flex items-center bg-white mb-4">
            <input type="text" placeholder="Your name" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
          </div>
          <div className="lg:h-[3.5rem] h-[3rem] flex items-center bg-white mb-4">
            <input type="email" placeholder="example@gmail.com" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
          </div>
          <div className="lg:h-[5.5rem] h-[4rem] flex items-center bg-white mb-4">
            <textarea className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3"></textarea>
          </div>
          <button className="w-full px-3 py-2 bg-orange text-white rounded mt-5">Send</button>
        </form>
      </div>
    </div>
  )
}
