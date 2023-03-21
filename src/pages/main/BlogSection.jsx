import Carousel from 'react-elastic-carousel'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

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


export default function BlogSection() {
  return (
    <div className='lg:px-[8%] px-1 py-[3rem]'>
      <h2 className="text-4xl text-center font-bold ml-2">Testimonials</h2>
      <div className="mt-8">
        <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='images-carousel relative'>
          {[...new Array(10)].map(() => (
            <div className="border p-3 lg:mx-2">
              <img className='h-[170px] w-[170px] rounded-full border-2 mx-auto my-0' src={process.env.PUBLIC_URL+'./images/kon.png'} alt='' />
              <div className="text-center">
                <span className="text-2xl my-2">Kon Akech</span>
                <FaQuoteLeft className='block text-sm mr-2' />
                <p className='px-3'>
                  affect brain development and long-term well-being. Your this vulnerable time helps children and youth
                </p>
                <div className="flex justify-end">
                  <FaQuoteRight className='block text-sm text-right ml-2' />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
