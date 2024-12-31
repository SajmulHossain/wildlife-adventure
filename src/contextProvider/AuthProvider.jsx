import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config'



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider;
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signout = () => {
    setLoading(true);
    return signOut(auth);
  }

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const update = (userData) => {
    return updateProfile(auth.currentUser, userData);
  }

  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(()=> {
    const unmount = onAuthStateChanged(auth, currentUser => {
      if (currentUser?.email === "sajmul1427@gmail.com") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
      setUser(currentUser);
      setLoading(false);
    })

    return () => {
      unmount();
    }
  }, [])

  const data = {
    user,
    setUser,
    createUser,
    login,
    signout,
    loginWithGoogle,
    loading,
    update,
    resetPassword,
    admin,
    setAdmin
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;