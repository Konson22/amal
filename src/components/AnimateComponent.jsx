import { motion } from "framer-motion"


export default function AnimateComponent({ children }) {
  return (
    <motion.div 
      className="overflow-x-hidden"
      initial={{ opacity:0, width: 0 }}
      animate={{ opacity:1, width: '100%' }}
      exit={{ opacity:0, x: '-50%', transition:{duration:0.05} }}
    >
      { children }
    </motion.div>
  )
}
