import { Link } from "react-router-dom";
import EducationImage from '../assets/images/every-body-can-help.jpg'


export default function OnboardingPage3() {
  return (
    <div className='px-8 py-4'>
      <img className="h-[340px] rounded-3xl" src={EducationImage} alt='' />
      <div className="text-center mt-5">
        <h2 className="text-3xl font-semibold mb-3">Every One Can Help Someone</h2>
        <p className="text-xl text-gray-500">When we give Cheerfully and accept gratefully, everyone is blessed!</p>
        <div className="mt-6">
          <Link className="bg-primary px-10 py-3 rounded-xl text-white" to='/donate'>Get Start</Link>
        </div>
      </div>
      {/* <Link className='flex px-3 py-2 bg-rose-500' to='/'>Home</Link> */}
    </div>
  )
}
