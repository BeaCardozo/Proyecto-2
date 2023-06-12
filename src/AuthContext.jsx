import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle,auth,provider } from "./Firebase.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();


  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      routeChange("/")
    } catch (error) {
      // Manejar el error de inicio de sesión
    }
  };

  const loginWithGoogle = async () => {
    try {

      const userCredential = await signInWithGoogle(auth,provider);
        
      setUser(userCredential);
      routeChange("/")
    } catch (error) {
      // Manejar el error de inicio de sesión
    }
  };

  
  

  const logout = async () => {
    try {

      
      await signOut(auth);
      setUser(null);
      navigate('/');
      
    } catch (error) {
      // Manejar el error de cierre de sesión
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
