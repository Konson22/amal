
export default function ChangeChildLife() {
  return (
    <div className="lg:flex items-centerr bg-teal-600 text-white lg:px-[8%] px-3 lg:py-[8rem] py-[4rem]">
      <div className="flex-1 lg:rotate-3">
        <img className='lg:h-[470px] h-[260px] w-full border-4 border-teal-100 rounded-lg' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
      </div>
      <div className="flex-1 lg:px-10 px-4 lg:mt-0 mt-4">
        <h2 className="lg:text-6xl text-4xl font-bold text-white mb-4">Change Child life today!</h2>
        <div className="lg:mt-12 mt-3">
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
