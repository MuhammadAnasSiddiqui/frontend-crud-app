import { useMutation } from "@tanstack/react-query";
import { useContext, createContext, useState } from "react";
import axiosInstance from "../config/api";
import api from "../config/api";

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  splashLoading: true,
};
  console.log("🚀 ~ initialAuthState.isAuthenticated:", initialAuthState.isAuthenticated)

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  const { mutate: login, isPending: loggingIn } = useMutation({
    mutationFn: (credentials) => api.login(credentials),
    onSuccess: ({ data }) => {
      console.log("🚀 ~ AuthProvider ~ data:", data)
      
      if (data?.status) {
        setAuthState({
          ...authState,
          isAuthenticated: true,
          user: data.data,
          token: data.token,
          splashLoading: false,
        });
      }
    },
    onError: (error) => {
      console.log("🚀 ~ AuthProvider ~ error:", error);
    },
  });

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        loggingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
