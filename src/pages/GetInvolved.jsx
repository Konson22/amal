import { Link } from "react-router-dom";
import { getInvolveData } from "../assets/data";


export default function GetInvolved() {
  return (
    <div className='lg:py-[4rem] py-[1rem]'>
      <div className="lg:px-[25%] px-3 text-center">
        <h1 className="lg:text-4xl text-2xl">GET INVOLVED</h1>
        <p className="text-xl">There are numerous ways for you to support us. As a nonprofit, we depend on your support to carry out our mission.</p>
      </div>
      <div className="lg:px-[10%] px-3 mt-8 lg:grid grid-cols-3 gap-5">
        {getInvolveData.map(about => (
          <div className='bg-gray-200 px-4 py-6 text-center mb-6'>
            <div className="text-6xl flex justify-center">
              {about.icon}
            </div>
            <h2 className="text-xl">{about.title}</h2>
            <p className="text-base">{about.text}</p>
            <Link className="inline-block mt-6 text-white px-3 py-2 bg-orange rounded" to={about.path}>{about.btn}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
