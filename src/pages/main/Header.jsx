import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container flex items-center lg:h-[65vh] h-[37vh] text-white lg:px-[5%] px-4">
      <div className="text-white lg:w-[65%]">
        <h1 className="lg:text-7xl text-4xl font-bold text-white">Building a better world for and with children</h1>
        <div className="mt-8">
          <button className="lg:text-xl px-5 py-3 bg-rose-700 rounded text-white mr-2">Donate</button>
          <Link className="lg:text-xl px-5 py-3 bg-rose-700 rounded text-white" to='/blog'>Stories from refugee</Link>
        </div>
      </div>
    </header>
  )
}
