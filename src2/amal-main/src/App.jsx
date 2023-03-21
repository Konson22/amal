import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import FormsModal from './pages/forms/FormsModal';

const Home = lazy(() => import('./pages/home'));
const Blog = lazy(() => import('./pages/Blog'));
const CharityForEducation = lazy(() => import('./pages/CharityForEducation'));

function App() {

  const { openModal } = useGlobalContext();
  
  return (
    <div className='app-wraper'>
      {openModal && <FormsModal />}
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/charity-for-education' element={<CharityForEducation />} />
        </Routes>
      </Suspense>
      <Footer />
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