import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FiMail, FiUser, FiLock } from "react-icons/fi";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config";



export default function Signup({ setOpenModal }) {

    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        // signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).then(user => {
        //     console.log(user)
        // })
    }
  return (
    <div className='h-screen fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm pt-[5rem]'>
        <div className='flex lg:w-[70%] w-[90%] mx-auto my-0 bg-white relative p-2'>
            <div 
                className="p-2 rounded-full bg-white border border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-rose-500 absolute top-[-0.8rem] right-[-0.8rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="lg:w-[50%] w-full lg:p-6 p-3">
                <div className="flex justify-center">
                    <span className="lg:text-4xl text-2xl bg-rose-600 text-white rounded-full p-3 mb-1">
                        <FiUser className='' />
                    </span>
                </div>
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mb-1">Sign up</span>
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
                    <div className="mb-5">
                        <label htmlFor="password" className="block m-1">Repeate Password</label>
                        <div className="lg:h-[3.5rem] h-[3rem] flex items-center bg-gray-200">
                            <span className="h-full flex items-center justify-center px-3 bg-gray-300 lg:text-2xl text-xl">
                                <FiLock />
                            </span>
                            <input ref={passRef} type="repeate_password" placeholder="Repeate password" className="h-full w-full bg-transparent focus:border-none focus:outline-none px-3" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="w-full rounded px-3 py-2 bg-rose-600 text-white">Sign up</button>
                    </div>
                </form>
                <div className="flex justify-center mt-6" onClick={() => setOpenModal('login')}>
                    Already have an account 
                    <span className="text-blue-800 ml-2">Login</span>
                </div>
            </div>
            <div className="lg:block hidden flex-1 ">
                <img className='h-full w-full' src={process.env.PUBLIC_URL+'./images/chayene-rafaela-nGwkIZFelko-unsplash.jpg'} alt='' />
            </div>
        </div>
    </div>
  )
}
