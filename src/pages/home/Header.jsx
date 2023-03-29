import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

export default function Header() {

  const { setOpenModal } = useGlobalContext();

  return (
    <header className="header-container flex items-center lg:h-[65vh] h-[41vh] text-white lg:px-[5%] px-4">
        <div className="text-white lg:w-[65%]">
            <h1 className="lg:text-7xl text-4xl font-bold">Building a better world for and with children</h1>
            {/* <h2 className="lg:text-4xl mt-3">Play your part in helping our orphanage children</h2> */}
            <div className="flex lg:mt-8 mt-6">
              <Link className="block lg:text-xl text-sm lg:px-5 px-3 lg:py-3 py-2 bg-rose-600 rounded text-white mr-2" to='/children-in-need'>Sponsor child</Link>
              <button className="lg:text-xl lg:px-5 px-3 lg:py-3 py-2 bg-rose-600 rounded text-white" onClick={() => setOpenModal('campign')}>
                Tell Child story
              </button>
            </div>
        </div>
    </header>
  )
}
