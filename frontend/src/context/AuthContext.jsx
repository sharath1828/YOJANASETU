import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  registerUser,
  getProfile,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  /* ========= Load User ========= */

  useEffect(() => {

    const loadUser = async () => {

      const token = localStorage.getItem("token");

      if (!token) {

        setLoading(false);

        return;

      }

      try {

        const data = await getProfile();

        setUser(data.user);

      } catch (error) {

        localStorage.removeItem("token");

        setUser(null);

      }

      setLoading(false);

    };

    loadUser();

  }, []);

  /* ========= Login ========= */

  const login = async (credentials) => {

    const data = await loginUser(credentials);

    localStorage.setItem("token", data.token);

    setUser(data.user);

    return data;

  };

  /* ========= Register ========= */

  const register = async (userData) => {

    const data = await registerUser(userData);

    localStorage.setItem("token", data.token);

    setUser(data.user);

    return data;

  };

  /* ========= Logout ========= */

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);

  };

  return (

    <AuthContext.Provider

      value={{

        user,

        loading,

        login,

        register,

        logout,

        setUser

      }}

    >

      {children}

    </AuthContext.Provider>

  );

};

export const useAuth = () => useContext(AuthContext);