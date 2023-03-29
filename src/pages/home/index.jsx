import { FaSuitcase, FaThLarge } from "react-icons/fa";
import { FiSettings, FiSearch, FiMenu } from "react-icons/fi";
import { FcAutomatic } from "react-icons/fc";
import EducationImage from '../../assets/images/school.jpeg'

export default function HomePage() {
  return (
    <div className='h-full'>
      <div className="flex justify-between px-4 py-3 bg-gray-50 shadow-md shadow-gray-200 sticky top-0 left-0 right-0 z-50">
        <div className="bg-bgcol text-white h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl p-1 text-2xl">
          <FiMenu />
        </div>
        <div className="border border-bgcol h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl text-2xl">
          <FiSearch />
        </div>
      </div>
      <div className='px-[8%] mt-5'>
        {/* Start of header section */}
        <div className="bg-bgcol mb-8 px-5 py-6 rounded-3xl text-white text-center">
          <h1 className="text-2xl font-bold">Start Your Own Funding</h1>
          <div className="text-xl">Create your own donation post</div>
          <button className="bg-white text-bgcol rounded mt-4 py-2 px-3">
            Start Now
          </button>
        </div>
        {/* Start of navi links section */}
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full text-2xl">
              <FaThLarge />
            </span>
            <span className='text-sm mt-2'>All</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full text-2xl">
              <FaSuitcase />
            </span>
            <span className='text-sm mt-2'>Medical</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full text-2xl">
              <FcAutomatic />
            </span>
            <span className='text-sm mt-2'>Education</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full text-2xl">
              <FiSettings />
            </span>
            <span className='text-sm mt-2'>Pandemic</span>
          </div>
        </div>
        {/* Start of section  */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Popular</h2>
            <span className="text-sm">View All</span>
          </div>
          {[...new Array(10)].map(() => (
            <div className="shadow-md bg-gray-50 rounded-xl p-2 mb-5">
              <img className="h-[150px] w-full rounded-xl my-3" src={EducationImage} alt='' />
              <p>Education Dono for poor child</p>
              <span className="text-sm text-gray-400">By: Sosima</span>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-semibold text-bgcol">$251 Raised</span>
                <span className="text-sm">Target - $3500</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
