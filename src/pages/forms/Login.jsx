import { useRef } from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "../../config";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";



export default function Login({ setOpenModal }) {

    const { setProfile } = useGlobalContext()
    const emailRef = useRef()
    const passRef = useRef()


    const socialMediaAuthHandler = async () => {
        try {
            const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = { name:userCred.user.displayName, avatar:userCred.user.photoURL}
            setProfile(user)
            setOpenModal(null)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async provider => {
       
    }
  return (
    <div className='h-screen fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm pt-[5rem]'>
        <div className='form flex lg:w-[70%] w-[90%] mx-auto relative my-0 bg-white p-'>
            <div 
                className="p-2 rounded-full bg-white border border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-rose-500 absolute top-[-0.8rem] right-[-0.8rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="lg:w-[50%] w-full lg:p-6 p-3 bg-white">
                <div className="flex justify-center">
                    <span className="lg:text-4xl text-2xl bg-rose-600 text-white rounded-full p-3 mb-1">
                        <FiUser className='' />
                    </span>
                </div>
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mb-1">Login</span>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block m-1">E-mail</label>
                        <div className="lg:h-[3.5rem] h-[3rem] flex items-center bg-gray-200">
                            <span className="h-full flex items-center justify-center px-3 bg-gray-300 lg:text-2xl text-xl">
                                <FiMail />
                            </span>
                            <input ref={emailRef} type="email" placeholder="example@gmail.com" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block m-1">Password</label>
                        <div className="lg:h-[3.5rem] h-[3rem] flex items-center bg-gray-200">
                            <span className="h-full flex items-center justify-center px-3 bg-gray-300 lg:text-2xl text-xl">
                                <FiLock />
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
                        <h2 className="lg:text-2xl text-xl font-semibold mx-4">Login with</h2>
                        <div className="h-1 bg-gradient-to-l from-white to-red-600 flex-1"></div>
                    </div>
                    <div className="flex justify-evenly text-white mt-5">
                        <div className="bg-red-600 tex-xl h-10 w-10 flex items-center justify-center rounded-full"
                        onClick={socialMediaAuthHandler}
                        >
                            <FaGoogle />
                        </div>
                        <div className="bg-blue-600 tex-xl h-10 w-10 flex items-center justify-center rounded-full">
                            <FaTwitter />
                        </div>
                        <div className="bg-red-600 tex-xl h-10 w-10 flex items-center justify-center rounded-full">
                            <FaInstagram />
                        </div>
                        <div className="bg-sky-500 tex-xl h-10 w-10 flex items-center justify-center rounded-full">
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
                {/* <img className='h-full w-full' src={process.env.PUBLIC_URL+'./images/chayene-rafaela-nGwkIZFelko-unsplash.jpg'} alt='' /> */}
            </div>
        </div>
    </div>
  )
}
