import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="text-white relative">
      {/* <div className="lg:flex items-center bg-gray-700 lg:py-20 py-10 lg:px-[10%] px-6">
        <div className="flex-1">
          <span className="block text-2xl mb-4">Subcribe</span>
          <div className="h-[3.5rem] flex lg:mr-16">
            <input type="email" className="h-full bg-gray-200 focus:border-none w-full" />
            <button className="px-4 bg-blue-500">Subcribe</button>
          </div>
        </div>
        <div className="">
          <span className="block text-2xl mb-4">Socila media</span>
          <div className="flex">
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaTwitter />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaInstagram />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaFacebook />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div> */}
      <div className="lg:flex justify-between bg-gray-800 lg:pt-28 pt-20 px-[10%]">
        <div className="flex-1">
          <h3 className="text-amber-500 text-xl font-semibold">Our patners</h3>
          <p>
            Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
          </p>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold">Donate</h3>
          <ul className="">
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
          </ul>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold">Donate</h3>
          <ul className="">
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
          </ul>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold">Donate</h3>
          <ul className="">
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
          </ul>
        </div>
      </div>
      <div class="custom-shape-divider-top-1640907434">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
    </footer>
  )
}
