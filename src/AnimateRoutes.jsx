import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Main from './pages/main'
import Cause from './pages/Cause'
import Ourwork from './pages/Ourwork'
import Blog from './pages/Blog'
import RefugeeCamps from './pages/RefugeeCamps'

export default function AnimateRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main />} />
        <Route path='/causes' element={<Cause />} />
        <Route path='/our-work' element={<Ourwork />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/refugee-camps' element={<RefugeeCamps />} />
      </Routes>
    </AnimatePresence>
  )
}
