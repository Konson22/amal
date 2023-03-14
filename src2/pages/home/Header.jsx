
export default function Header() {
  return (
    <header className="header-container lg:h-[70vh] h-[50vh] flex items-center w-full lg:px-[5%] px-4">
        <div className="text-white lg:w-[65%]">
          {/* <h1 className="text-8xl font-bold">Change Child Life</h1> */}
          {/* <h1 className="text-8xl font-bold">Educate Child Today</h1> */}
          <h1 className="lg:text-7xl text-3xl font-bold">Building a better world for and with children</h1>
          <h2 className="lg:text-4xl mt-3">Play your part in helping our orphanage children</h2>
          <div className="mt-8">
            <button className="lg:text-xl px-5 py-3 bg-yellow-300 rounded text-white mx-3">Donate</button>
            <button className="lg:text-xl px-5 py-3 bg-teal-500 rounded text-white">Sponsor child</button>
        </div>
        </div>
    </header>
  )
}
