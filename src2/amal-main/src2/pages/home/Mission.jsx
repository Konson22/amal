
export default function Mission() {
    return (
      <div className="lg:flex items-center px-[8%] py-[6rem]">
        <div className="lg:hidden block">
          <img className='h-[270px] w-full rounded-lg' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
        </div>
        <div className="flex-1 lg:px-10 px-4">
          <h2 className="lg:text-6xl text-4xl font-bold text-teal-600 mb-4">Our Mission</h2>
          <div className="lg:mt-12 mt-4">
              <p>
                Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
                those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed
                with initial capital letters or in all capitals.
              </p>
          </div>
        </div>
        <div className="lg:block hidden flex-1">
          <img className='lg:h-[470px] w-full lg:border-4 border-teal-600 rounded-lg' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
        </div>
      </div>
    )
  }
  