import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="text-white">
      <div className="lg:flex items-center bg-gray-700 lg:py-20 py-10 lg:px-[10%] px-6">
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
      </div>
      <div className="lg:flex justify-between bg-gray-800 lg:py-20 py-10 px-[10%]">
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
    </footer>
  )
}
