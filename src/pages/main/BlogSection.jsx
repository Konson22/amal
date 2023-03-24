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
      <div className="px-[24%]">
        <h2 className="text-4xl text-center font-bold ml-2 mb-2">Testimonials</h2>
        <p className='text-xl text-center'>
          Every contribution makes a real difference in the lives of vulnerable Refugees and displace families, will you be the answer to their prayers today?
        </p>
      </div>
      <div className="mt-8">
        <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='images-carousel relative'>
          {[...new Array(10)].map(() => (
            <div className="border p-3 lg:mx-2">
              <img className='h-[170px] w-[170px] rounded-full border-2 mx-auto my-0' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
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
