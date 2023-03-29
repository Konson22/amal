

export default function AboutSection() {
  return (
    <div className='lg:flex items-center bg-slate-700 text-white lg:px-[12%] px-4 py-[2rem]'>
      <div className="flex-1 lg:mb-0 mb-6">
        <h2 className="lg:text-4xl text-3xl font-bold">We are profit Charity Organization</h2>
        <p className="text-base">
          hope for good is busy and vibrant place to work and there is always room for volunteers to join us and help out just bring your time and energy to make difference experience to child
        </p>
      </div>
      <div className="flex-1">
        <img className='lg:h-[400px] h-[260px] w-full' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
      </div>
    </div>
  )
}
