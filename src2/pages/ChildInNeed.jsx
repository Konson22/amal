import { FiChevronDown } from 'react-icons/fi'
import { LazyImage } from '../components/LazyImage';
import { useChildren } from '../contexts/ChildrenContextProvider'


export default function ChildInNeed() {

  const { loading, error, childrenData } = useChildren();

  return (
    <div className='lg:px-[4%] px-3'>
      <div className="flex items-center justify-between my-8">
        <div className="text-2xl font-bold">Children in need</div>
        <div className="flex">
          <div className="bg-blue-200 flex align-center relative z-20 rounded cursor-pointer px-3 py-2">
            Gender
            <FiChevronDown className='text-xl ml-2' />
          </div>
          <div className="bg-blue-200 flex align-center relative z-20 rounded cursor-pointer px-3 py-2 mx-3">
            Age
            <FiChevronDown className='text-xl ml-2' />
          </div>
          <div className="bg-blue-200 flex align-center relative z-20 rounded cursor-pointer px-3 py-2">
            Country
            <FiChevronDown className='text-xl ml-2' />
          </div>
        </div>
      </div>
      <div className="mt-6">
        {loading && 'Loading...'}
        {error && 'Error...'}
        {(!loading && !error && childrenData.length >= 1) && 
          <div className="lg:grid grid-cols-4 gap-5">
            {childrenData.map(child => (
              <div className="border" key={child.id}>
                <LazyImage className="h-[230px] w-full" src={'https://amal-api.onrender.com/'+child.avatar} alt={child.name} />
                {/* <LazyImage className="h-[230px] w-full" src={process.env.REACT_APP_BACK_END_URL+child.avatar} alt={child.name} /> */}
                <div className="p-3">
                  <h3 className="text-xl">{child.name}</h3>
                  <p className="text-base">{child.about}</p>
                  <div className="flex mt-4">
                    <button className="px-2 py-1 bg-teal-500 text-white mr-2">{child.name.split(' ')[0]} Story</button>
                    <button className="px-2 py-1 bg-teal-500 text-white">Sponsor</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}
