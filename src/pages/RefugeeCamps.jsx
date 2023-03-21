import Carousel from 'react-elastic-carousel'

const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  }
]

export default function RefugeeCamps() {
  return (
    <div>
      <div className='causes-header text-center text-white lg:px-[25%] px-4 lg:py-[4rem] py-[2rem]'>
        <h1 className="lg:text-6xl text-3xl font-bold">Refugees camps</h1>
        <p className="lg:text-xl lg:mt-6 mt-3">
          the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being.
        </p>
      </div>
      <div className="lg:px-[8%] px-4 py-10">
        <div className="lg:grid grid-cols-3 gap-6">
          {camps.map(camp => <CampCArd camp={camp} />)}
        </div>
      </div>
    </div>
  )
}

const camps = [
  {
    name:'Kakuma',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
  {
    name:'Check point',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
  {
    name:'Malambo',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
  {
    name:'Kakuma',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
  {
    name:'Kakuma',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
  {
    name:'Kakuma',
    images:[
      process.env.PUBLIC_URL+'/images/edmund-lou-dcPThE8G59E-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/ben-white-83tkHLPgg2Q-unsplash.jpg', 
      process.env.PUBLIC_URL+'/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    ],
  },
]

const CampCArd = ({camp}) => {
  return(
    <div className="border bg-gray-50 shadow-sm py-2 lg:mb-0 mb-6">
      <Carousel breakPoints={breakPoints} className='camps-carousel lg:h-[300px] h-[270px] relative'>
        {camp.images.map(img => <img className="lg:h-[300px] h-[270px]" src={img} alt='' />)}
      </Carousel>
      <div className="p-2">
        <h3 className="text-xl font-bold">{camp.name}</h3>
        <p className="text-base">
          the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
        </p>
      </div>
    </div>
  )
}