import { useState, useContext, createContext } from 'react'


const apiContext = createContext()


export const useGlobalContext = () => useContext(apiContext)


export default function GlobalContextProvider({children}) {

  const [openModal, setOpenModal] = useState(null)


  return (
    <apiContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </apiContext.Provider>
  )
}
