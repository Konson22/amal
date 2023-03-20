
export default function Sponsorship() {
  return (
    <div className="bg-amber-2000 lg:px-[8%] px-3 lg:py-[6rem] py-[4rem]">
      <h2 className="lg:text-6xl text-3xl font-bold text-center lg:mb-10 mb-4">How child sponsorship works?</h2>
      <div className="lg:grid grid-cols-2 gap-10">
        <div className="border lg:mb-0 mb-10">
          <img className='lg:h-[350px] h-[260px] w-full' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What does child receive</h3>
            <p>
              Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
              those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed
              with initial capital letters or in all capitals.
            </p>
          </div>
        </div>
        <div className="border">
          <img className='lg:h-[350px] h-[260px] w-full' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What can I expect as sponsor?</h3>
            <p>
              Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
              those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed
              with initial capital letters or in all capitals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
