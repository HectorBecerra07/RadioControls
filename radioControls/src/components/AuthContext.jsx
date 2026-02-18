import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        // You might want to fetch the full user profile here instead of relying on the token payload
        setUser({ id: decoded.userId, role: decoded.role });
        setToken(storedToken);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const login = (newToken, userData) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
