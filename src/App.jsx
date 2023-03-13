import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ChildInNeed from './pages/ChildInNeed';
import AddChild from './pages/forms/AddChild';
import Home from './pages/main'
import SponsorChild from './pages/SponsorChild';


function App() {

  return (
    <div className='app-wraper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sponsor-child' element={<SponsorChild />} />
        <Route path='/child-in-need' element={<ChildInNeed />} />
        <Route path='/register-child-in-need' element={<AddChild />} />
      </Routes>
      <Footer />
    </div>
  );
}




export default App;