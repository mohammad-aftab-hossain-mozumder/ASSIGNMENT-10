import { useEffect, useState } from 'react'
import { Authcontext } from './Authcontext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loader, setloader] = useState(true)
    const logoutman=()=>{
        signOut(auth)
    }
    const signg = () => {
        setloader(true)
        return signInWithPopup(auth, provider)
    }
    
    const manuallogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createmanual = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloader(false)
        })
        return ()=> unsubscribe()
    }, [])

    const info = {
        setuser,
        signg,
        createmanual,
        user,
        loader,
        logoutman,
        manuallogin
    }
    return (
        <Authcontext value={info}>
            {children}
        </Authcontext>
    )
}

export default Authprovider