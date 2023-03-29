import Carousel from 'react-elastic-carousel'
import { useChildren } from '../../contexts/ChildrenContextProvider';
import { ChildCard } from '../ChildInNeed';

const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:4,
    itemsToScroll:1
  },
]

export default function ChildrenSection() {

  const { loading, error, childrenData } = useChildren();

  return (
    <div className="lg:px-[5%] lg:py-[4rem] bg-gray-800 py-[2rem]">
        <div className="lg:w-[60%] mx-auto text-white mb-10">
            <div className="flex items-center">
              <div className="lg:h-2 h-1 bg-gradient-to-r to-white from-gray-800 rounded-full flex-1"></div>
              <h2 className="lg:text-5xl text-2xl lg:font-bold text-center mx-3">Sponsor Child</h2>
              <div className="lg:h-2 h-1 bg-gradient-to-l to-white from-gray-800 rounded-full flex-1"></div>
            </div>
            <p className="text-xl text-center mt-6">
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
            </p>
        </div>
        {/* <h2 className="lg:text-4xl text-3xl font-bold px-[1rem]">Children</h2> */}
        <div className="my-[1.5rem]">
            {loading && 'Loading...'}
            {error && 'Error...'}
            {(!loading && !error && childrenData.length >= 1) &&
                <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='children-slide-wraper relative'>
                    {childrenData.map(child => <ChildCard child={child} cName='mx-2' />)}
                    {childrenData.map(child => <ChildCard child={child} cName='mx-2' />)}
                    {childrenData.map(child => <ChildCard child={child} cName='mx-2' />)}
                    {childrenData.map(child => <ChildCard child={child} cName='mx-2' />)}
                </Carousel>
            }
        </div>
    </div>
  )
}