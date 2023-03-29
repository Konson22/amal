import Header from "./Header";
import imageUrl from '../../assets/images/team2.jpg'
export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="lg:px-[20%] px-3 py-[3rem]">
        <div className="text-center">
          <h2 className="lg:text-2xl">Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.</h2>
        </div>
      </div>
      <div className="lg:flex lg:px-[10%] px-3 lg:py-[5rem] py-[2rem]">
        <div className="flex-1">
          <img className='h-[350pxcc] w-full' src={imageUrl} alt='' />
        </div>
        <div className="flex-1 lg:ml-10">
          <h1 className="lg:text-4xl text-2xl font-bold">Powered by Volunteer</h1>
          <h2 className="text-xl">Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.</h2>
        </div>
      </div>
    </div>
  )
}
