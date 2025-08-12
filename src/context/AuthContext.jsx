import { useMutation } from "@tanstack/react-query";
import { useContext, createContext, useState } from "react";
import axiosInstance from "../config/api";

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  splashLoading: true,
};

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
