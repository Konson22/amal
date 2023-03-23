import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../config";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

export const GoogleAuthHandler = async () => {

    const { setProfile, setOpenModal } = useGlobalContext()

    try {
        const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
        const user = { name:userCred.user.displayName, avatar:userCred.user.photoURL}
        setProfile(user)
        setOpenModal(null)
    } catch (error) {
        console.log(error)
    }
}

export const FacebookAuthHandler = async () => {

    const { setProfile, setOpenModal } = useGlobalContext()

    try {
        const userCred = await signInWithPopup(auth, new FacebookAuthProvider());
        const user = { name:userCred.user.displayName, avatar:userCred.user.photoURL}
        setProfile(user)
        setOpenModal(null)
    } catch (error) {
        console.log(error)
    }
}