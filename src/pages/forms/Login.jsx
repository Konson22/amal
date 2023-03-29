import { FaGoogle, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { auth } from "../../config";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";
import { FiUser } from "react-icons/fi";


export default function Login() {

   const { setProfile, setOpenModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const GoogleAuthHandler =  () => {
      setIsLoading(true)
      signInWithPopup(auth, new GoogleAuthProvider()).then(credential => {
        const user = { name:credential.user.displayName, avatar:credential.user.photoURL}
        console.log(user)
        setProfile(user)
        setOpenModal(null)
        setIsLoading(false)
      }, err => {
        setMessage(err?.code?.split('/')[1])
        console.dir(err?.code?.split('/')[1])
        setIsLoading(false)
      });
    }
    
    // FORMIK FORM INITAL VALUES
    const initialValues = { password:'', email:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
      password:Yup.string().required('please enter password!'),
      email:Yup.string().required('please enter email!')
    });

    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({email, password}) => {
      setIsLoading(true);
      try {
        signInWithEmailAndPassword(auth, email, password).then(res => {
          console.log(res)
        }, err => {
          setMessage(err?.code?.split('/')[1])
          console.dir(err?.code?.split('/')[1])
        })
      } catch (error) {
        setMessage('Something went wrong!')
        console.log(error)
      }finally{
        setIsLoading(false);
      }
    }

  return (
    <div className='flex items-center justify-center lg:bg-black bg-gray-50 lg:bg-opacity-80 h-screen fixed inset-0 z-50'>
      <div className="lg:w-[30%] w-[85%] bg-white rounded-md shadow-emerald-100 lg:p-14 p-8">
        <div className="mx-auto my-0">
          <span className="text-5xl">
            <FiUser />
          </span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              {fields.map(field => (
                <div className='mb-4'>
                  <InputField 
                    isLoading={isLoading}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <button type='submit' className='w-full px-3 py-2 bg-orange text-white'>
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
        <div className="">
          <div className="bg-red-600 hover:bg-red-800 cursor-pointer tex-xl w-full flex items-center justify-center rounded py-3 my-5"
            onClick={GoogleAuthHandler}
          >
            <FaGoogle />
          </div>
          <div className="bg-blue-600 tex-xl w-full flex items-center justify-center rounded py-3">
            <FaTwitter />
          </div>
        </div>
        <div className="flex justify-center mt-6" onClick={() => setOpenModal('signup')}>
          Don't have account 
          <span className="text-blue-800 ml-2 cursor-pointer">Sign up</span>
        </div>
      </div>
    </div>
  )
}

/*
 const FacebookAuthHandler = async () => {
      try {
        const userCred = await signInWithPopup(auth, new FacebookAuthProvider());
        const user = { name:userCred.user.displayName, avatar:userCred.user.photoURL}
        setProfile(user)
        setOpenModal(null)
      } catch (error) {
        console.log(error)
      }
    }


export default function Login() {

   
  return (
    <div className='lg:px-[35%] px-[5%] h-screen fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm pt-[5rem]'>
         <div className="w-full lg:p-6 p-6 rounded bg-white relative">
            <div 
                className="rounded-full cursor-pointer hover:bg-red-600 hover:text-white text-rose-500 absolute top-[.5rem] right-[.5rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="my-4"> 
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mB-2">Login</span> 
                {message && <span className='text-red-500'>{message}</span>}
            </div>
           
            <div className="mt-8">
                <div className="flex items-center">
                    <div className="h-1 bg-gradient-to-r from-white to-red-600 flex-1"></div>
                    <h2 className="lg:text-2xl text-xl font-semibold mx-4">Login with</h2>
                    <div className="h-1 bg-gradient-to-l from-white to-red-600 flex-1"></div>
                </div>
                <div className="flex justify-evenly text-white mt-5">
                    
                    <div className="bg-red-600 tex-xl h-10 w-10 flex items-center justify-center rounded-full">
                        <FaInstagram />
                    </div>
                    <div className="bg-sky-500 tex-xl h-10 w-10 flex items-center justify-center rounded-full">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}


*/
const fields = [
  {name:'email', placeholder:'email', type:'email'},
  {name:'password', placeholder:'Enter password', type:'password'},
]