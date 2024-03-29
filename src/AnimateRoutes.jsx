import {Routes, Route, useLocation} from 'react-router-dom'
import { useGlobalContext } from './contexts/GlobalContextProvider';
import { motion, AnimatePresence } from 'framer-motion'
import Login from './pages/forms/Login'
import Signup from './pages/forms/Signup'
import Home from './pages/home'
import OnboardingPage3 from './pages/OnboardingPage3'
import Donate from './pages/Donate';
import Navbar from './components/Navbar';


export default function AnimateRoutes() {

    const location = useLocation()
    const { openModal, setOpenModal } = useGlobalContext();

  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div className=""
            key={location.pathname}
            location={location}
            initial='initialState'
            animate='animateState'
            exit='exitState'
            transition={{ duration:.2 }}
            variants={{
                initialState:{ x:'-100%' },
                animateState:{ x:0 },
                exitState:{ opacity:0, x:'100%' },
            }}
        >
            {openModal === 'login' && <Login setOpenModal={ setOpenModal } />}
            {openModal === 'signup' && <Signup setOpenModal={ setOpenModal } />}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/onboarding-page' element={<OnboardingPage3 />} />
            </Routes>
        </motion.div>
    </AnimatePresence>
  )
}
