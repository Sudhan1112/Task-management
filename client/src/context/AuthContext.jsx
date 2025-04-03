import React, { createContext, useState, useContext, useEffect } from 'react';
import { register as registerUser, login as loginUser } from "../api";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/api/auth/me", { withCredentials: true });
        console.log("Auth check response:", response);
        if (response.data.user) {
          setCurrentUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        // setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginUser({ email, password });
      setCurrentUser(response.data.user);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      await registerUser({ name, email, password });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      setCurrentUser(null);
      setIsAuthenticated(false);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Logout failed",
      };
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
