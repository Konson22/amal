

export default function AboutSection() {
  return (
    <div className='lg:flex bg-rose-400 text-white lg:px-[12%] px-4 py-[2rem]'>
      <div className="flex-1 lg:mb-0 mb-6">
        <h2 className="lg:text-4xl text-3xl font-bold">We are profit Charity Organization</h2>
        <p className="text-base">
          Your support during this vulnerable time helps children and youth set their own goals to build a life free from poverty.
        </p>
      </div>
      <div className="flex-1">
        <img className='lg:h-[400px] h-[260px] w-full' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
      </div>
    </div>
  )
}
