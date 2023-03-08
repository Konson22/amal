import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ChildInNeed from './pages/ChildInNeed';
import Home from './pages/main'


function App() {

  return (
    <div className='app-wraper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/child-in-need' element={<ChildInNeed />} />
      </Routes>
      <Footer />
    </div>
  );
}




export default App;