import BlogSection from "./BlogSection"
import Header from "./Header"
import MoneyUtilization from "./MoneyUtilization"
import OurFocus from "./OurFocus"
import OurTeamSection from "./OurTeamSection"


export default function Main() {
  return (
    <>
      <Header />
      <OurFocus />
      <div className="bg-amber-100 lg:flex items-center lg:px-[10%] px-2 lg:py-[7rem] py-16">
        <div className="flex-1 lg:mb-0 mb-4">
          <img className='lg:h-[410px] h-[250px] border-b-4 border-amber-500' src={process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'} alt='' />
        </div>
        <div className="flex-1 lg:ml-8 pr-20">
          <h2 className="lg:text-5xl text-3xl font-bold mb-5">Helping is an act of Soft Heart</h2>
          <p>
            When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.
          </p>
        </div>
      </div>
      <BlogSection />
      <OurTeamSection />
      <MoneyUtilization />
    </>
  )
}
