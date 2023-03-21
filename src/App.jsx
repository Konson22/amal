import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './pages/main'
import Cause from './pages/Cause'
import Ourwork from './pages/Ourwork'
import Blog from './pages/Blog'
import RefugeeCamps from './pages/RefugeeCamps'
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './helpers/ScrollToTop';
import FormsModal from './pages/forms/FormsModal';


function App() {

  const { openModal } = useGlobalContext();
  
  return (
    <div className="h-full">
      {openModal && <FormsModal />}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/causes' element={<Cause />} />
        <Route path='/our-work' element={<Ourwork />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/refugee-camps' element={<RefugeeCamps />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;