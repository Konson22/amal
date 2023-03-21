import { useRef } from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiUser } from "react-icons/fi";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config";



export default function Login({ setOpenModal }) {

    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        // signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).then(user => {
        //     console.log(user)
        // })
    }
  return (
    <div className='flex bg-white p-2'>
        <div className="lg:w-[45%] lg:p-6 p-3">
            <div className="flex justify-center">
                <span className="lg:text-5xl text-3xl bg-rose-600 text-white rounded-full p-3 mb-1">
                    <FiUser className='' />
                </span>
            </div>
            <div className="">
                <h2 className="text-2xl lg:font-semibold text-center mb-1">Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block m-1">E-mail</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input ref={emailRef} type="email" placeholder="example@gmail.com" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block m-1">Password</label>
                    <div className="h-[3.5rem] flex items-center bg-gray-200">
                        <span className="h-full flex items-center justify-center px-3 bg-gray-300 text-2xl">
                            <FiMail />
                        </span>
                        <input ref={passRef} type="password" placeholder="Enter password" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                    </div>
                </div>
                <div className="mt-8">
                    <button className="w-full rounded px-3 py-2 bg-rose-600 text-white">Login</button>
                </div>
            </form>
            <div className="mt-8">
                <div className="flex items-center">
                    <div className="h-1 bg-gradient-to-r from-white to-red-600 flex-1"></div>
                    <h2 className="text-2xl lg:font-semibold mx-4">Login with</h2>
                    <div className="h-1 bg-gradient-to-l from-white to-red-600 flex-1"></div>
                </div>
                <div className="flex justify-evenly mt-5">
                    <div className="bg-red-600 lg:text-2xl tex-xl text-white rounded-full p-3">
                        <FaGoogle />
                    </div>
                    <div className="bg-blue-600 lg:text-2xl tex-xl text-white rounded-full p-3">
                        <FaTwitter />
                    </div>
                    <div className="bg-red-600 lg:text-2xl tex-xl text-white rounded-full p-3">
                        <FaInstagram />
                    </div>
                    <div className="bg-sky-500 lg:text-2xl tex-xl text-white rounded-full p-3">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6" onClick={() => setOpenModal('signup')}>
                Don't have account 
                <span className="text-blue-800 ml-2">Sign up</span>
            </div>
        </div>
        <div className="lg:block hidden flex-1 ">
            <img className='h-full w-full' src={process.env.PUBLIC_URL+'./images/chayene-rafaela-nGwkIZFelko-unsplash.jpg'} alt='' />
        </div>
    </div>
  )
}
