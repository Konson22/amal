import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Appbar';
import Main from './pages/main'
import Donate from './pages/Donate'
import Cause from './pages/Cause'
import Blog from './pages/Blog'
import RefugeeCamps from './pages/RefugeeCamps'
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './helpers/ScrollToTop';
import Login from './pages/forms/Login';
import Signup from './pages/forms/Signup';
import Volunteer from './pages/Volunteer';
import HowWeSpendMoney from './pages/HowWeSpendMoney';
import GetInvolved from './pages/GetInvolved';
import Aboutus from './pages/Aboutus';
import Joinus from './pages/Joinus';


function App() {

  const { openModal, setOpenModal } = useGlobalContext();
  
  return (
    <div className="h-full">
      {openModal === 'login' && <Login setOpenModal={ setOpenModal } />}
      {openModal === 'signup' && <Signup setOpenModal={ setOpenModal } />}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/causes' element={<Cause />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/join-us' element={<Joinus />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/refugee-camps' element={<RefugeeCamps />} />
        <Route path='/how-we-use-donations' element={<HowWeSpendMoney />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;