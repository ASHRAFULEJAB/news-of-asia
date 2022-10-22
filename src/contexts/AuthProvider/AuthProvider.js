import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)

  const signInGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const signUpEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile)
  }
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }
    

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null ||currentUser.emailVerified) {
        
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    signInGoogle,
    logOut,
    signInEmailPassword,
    updateUserProfile,
    verifyEmail,
    signUpEmailPassword,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
