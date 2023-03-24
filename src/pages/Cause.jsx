import bgImage from '../assets/images/refugee.jpeg'

export default function Cause() {
  return (
    <>
      <div className='lg:h-[35vh] lg:py-0 py-[2.5rem] bg-cover flex items-center justify-center text-white' 
        style={{backgroundImage:`url('${bgImage}')`}}
      >
        <h1 className="lg:text-6xl text-3xl lg:font-bold">Causes</h1>
      </div>
      <div className="lg:px-[8%] px-3 py-[3rem] mt-4">
        <div className="lg:grid grid-cols-3 gap-6">
          {[...new Array(3)].map(context => (
            <div className="border p-4">
              <p className="text-base">
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
