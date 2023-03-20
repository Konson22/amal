import AnimateRoutes from './AnimateRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import FormsModal from './pages/forms/FormsModal';


function App() {

  const { openModal } = useGlobalContext();
  
  return (
    <div className="h-full">
      {openModal && <FormsModal />}
      <Navbar />
      <AnimateRoutes />
      <Footer />
    </div>
  );
}


export default App;