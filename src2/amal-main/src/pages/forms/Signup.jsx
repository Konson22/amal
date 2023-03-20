import { FiMail } from "react-icons/fi";

export default function Signup({ setOpenModal }) {
  return (
    <div className='flex bg-white p-2'>
        <div className="lg:w-[45%] lg:p-6 p-3">
            <h2 className="text-2xl lg:font-semibold text-center mb-1">Sign up</h2>
            <form>
                <div className="mb-5">
                    <label htmlFor="email" className="block m-1">E-mail</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input name='email' type="email" placeholder="example@gmail.com" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block m-1">Password</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input name='password' type="password" placeholder="Enter password" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block m-1">E-mail</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input name='email' type="email" placeholder="example@gmail.com" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block m-1">Password</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input name='password' type="password" placeholder="Enter password" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mt-8">
                    <button className="w-full rounded px-3 py-2 bg-rose-600 text-white">Sign up</button>
                </div>
            </form>
            <div className="flex justify-center mt-6" onClick={() => setOpenModal('login')}>
                I already have account 
                <span className="text-blue-800 ml-2">Login</span>
            </div>
        </div>
        <div className="lg:block hidden flex-1 ">
            <img className='h-full w-full' src={process.env.PUBLIC_URL+'./images/chayene-rafaela-nGwkIZFelko-unsplash.jpg'} alt='' />
        </div>
    </div>
  )
}
