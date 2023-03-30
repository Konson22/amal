// import { signInWithEmailAndPassword } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
// import { auth } from "../../config";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";


export default function Signup() {

   const { setOpenModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    
    // FORMIK FORM INITAL VALUES
    const initialValues = { name:'', password:'', comfirm_password:'', email:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
      name:Yup.string().required('please enter name!'),
      password:Yup.string().required('please enter password!'),
      email:Yup.string().required('please enter email!'),
      comfirm_password:Yup.string().required('Comfirmpassword!'),
    });

    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({email, password}) => {
      setIsLoading(false);
      setMessage('')
      // try {
      //   signInWithEmailAndPassword(auth, email, password).then(res => {
      //     console.log(res)
      //   }, err => {
      //     setMessage(err?.code?.split('/')[1])
      //     console.dir(err?.code?.split('/')[1])
      //   })
      // } catch (error) {
      //   setMessage('Something went wrong!')
      //   console.log(error)
      // }finally{
      //   setIsLoading(false);
      // }
    }

  return (
    <div className='flex items-center justify-center lg:bg-black bg-white lg:bg-opacity-80 h-screen fixed inset-0 z-50'>
      <div className="lg:w-[30%] w-[82%] bg-white  rounded-md lg:p-14">
        <div 
          className="rounded-full cursor-pointer text-rose-500 fixed top-[.9rem] right-[.9rem] text-3xl"
          onClick={() => setOpenModal(null)}
        >
          <FiXCircle />
        </div>
        <h3 className="text-2xl font-semibold text-center mb-6">Sign up</h3>
        {message && <div className="my-2 text-red-600">{message}</div>}
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
              <button type='submit' className='w-full px-3 py-3 rounded bg-primary text-white'>
                {isLoading ? 'Loading...' : 'Sign up'}
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center mt-6" onClick={() => setOpenModal('signup')}>
          Don't have account 
          <span className="text-blue-800 ml-2 cursor-pointer">Sign up</span>
        </div>
      </div>
    </div>
  )
}

const fields = [
  {name:'name', placeholder:'Your name', type:'text'},
  {name:'email', placeholder:'email', type:'email'},
  {name:'password', placeholder:'Enter password', type:'password'},
  {name:'comfirm_password', placeholder:'Repeate password', type:'password'},
]