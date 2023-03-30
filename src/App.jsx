import { Suspense } from 'react';
import AnimateRoutes from './AnimateRoutes';


function App() {

  return (
    <div className='h-ful'>
      <Suspense fallback={<Loader />}>
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