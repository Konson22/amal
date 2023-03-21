import Carousel from 'react-elastic-carousel'


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
    <div className='lg:px-[8%] px-4 py-[3rem]'>
      <h2 className="text-3xl ml-2">Meet refugees</h2>
      <div className="mt-8">
        <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='images-carousel relative'>
          {[...new Array(10)].map(() => (
            <div className="border p-3 lg:mx-2">
              <img className='h-[170px] w-[170px] rounded-full border-2 mx-auto my-0' src={process.env.PUBLIC_URL+'./images/kon.png'} alt='' />
              <div className="text-center">
                <span className="text-2xl my-2">Kon Akech</span>
                <p>
                  affect brain development and long-term well-being. Your support during this vulnerable time helps children and youth
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
