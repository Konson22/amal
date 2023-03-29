import { Suspense } from 'react';
import AnimateRoutes from './AnimateRoutes';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className='h-full'>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <AnimateRoutes />
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