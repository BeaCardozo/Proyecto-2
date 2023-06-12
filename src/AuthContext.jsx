import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      // Manejar el error de inicio de sesión
    }
  };

  const routeChange = (path) => {
    navigate(path);
  };

  const logout = async () => {
    try {

      
      await signOut(auth);
      setUser(null);
      routeChange("/");
      
    } catch (error) {
      // Manejar el error de cierre de sesión
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
