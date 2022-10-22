import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signInGoogle = (provider) => {
    return signInWithPopup(auth, provider)
  }
  const signUpEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    signInGoogle,
    logOut,
    signInEmailPassword,
    signUpEmailPassword,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
