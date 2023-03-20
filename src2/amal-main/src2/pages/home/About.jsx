
export default function About() {
  return (
    <div className="lg:flex lg:px-[8%] px-3 lg:py-[8rem] py-[4rem]">
      <div className="flex-1">
        <img className='lg:h-[470px] h-[270px] w-full lg:border-4 border-teal-600 rounded-lg' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
      </div>
      <div className="flex-1 lg:px-10 px-4 lg:mt-0 mt-3">
        <h2 className="lg:text-5xl text-2xl font-bold text-teal-600 mb-4">Be a sponser and make a child life better </h2>
        <div className="mt-4">
          <p>
            Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
            those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed
            with initial capital letters or in all capitals.
          </p>
        </div>
      </div>
    </div>
  )
}
