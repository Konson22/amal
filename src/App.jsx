import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Login from './pages/forms/Login'
import Signup from './pages/forms/Signup'

const Home = lazy(() => import('./pages/home'));
const OnboardingPage3 = lazy(() => import('./pages/OnboardingPage3'));


function App() {

  const { openModal, setOpenModal } = useGlobalContext();

  return (
    <div className='h-full'>
      {/* <Login /> */}
      {openModal === 'login' && <Login setOpenModal={ setOpenModal } />}
      {openModal === 'signup' && <Signup setOpenModal={ setOpenModal } />}
      {/* <Navbar /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/onboarding-page' element={<OnboardingPage3 />} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </div>
  );
}



const Loader = () => {
  return(
    <div className='h-[40vh] p-[3rem]'>
      Loading
    </div>
  )
}



export default App;