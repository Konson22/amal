import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';
import Login from './Login';
import Signup from './Signup';


export default function FormsModal() {

  const { openModal, setOpenModal } = useGlobalContext();

  return (
    <div className='h-screen fixed inset-0 z-50 overflow-hidden flex lg:items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm'>
        <div className="lg:w-[80%] lg:flex relative lg:mx-0 mx-4 lg:mt-0 mt-8">
            <div 
                className="p-2 rounded-full bg-white border border-red-600 text-rose-500 absolute top-[-0.8rem] right-[-0.8rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            {openModal === 'login' ? <Login setOpenModal={setOpenModal} /> : <Signup setOpenModal={setOpenModal} /> }
        </div>
    </div>
  )
}
