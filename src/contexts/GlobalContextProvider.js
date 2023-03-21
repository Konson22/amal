import { useState, useEffect, useContext, createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'

const apiContext = createContext()


export const useGlobalContext = () => useContext(apiContext)


export default function GlobalContextProvider({children}) {

  const [profile, setProfile] = useState(null)
  const [openModal, setOpenModal] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if(user){
        setProfile({ name:user.displayName, avatar:user.photoURL})
        console.log(user)
      }
    })

    return () => {
      listen()
    }
  }, [])

  return (
    <apiContext.Provider value={{ openModal, setOpenModal, profile, setProfile }}>
      {children}
    </apiContext.Provider>
  )
}
