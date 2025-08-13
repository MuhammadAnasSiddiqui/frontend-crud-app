import { useMutation } from "@tanstack/react-query";
import { useContext, createContext, useState, useEffect } from "react";
import axiosInstance from "../config/api";
import api from "../config/api";

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  splashLoading: true,
};
console.log(
  "🚀 ~ initialAuthState.isAuthenticated:",
  initialAuthState.isAuthenticated
);

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  const { mutate: login, isPending: loggingIn } = useMutation({
    mutationFn: (credentials) => api.login(credentials),
    onSuccess: ({ data }) => {
      if (data?.status) {
        localStorage.setItem("auth_token", data.token);
        setAuthState((prev) => ({
          ...prev,
          isAuthenticated: true,
          user: data?.data,
          token: data?.token,
          splashLoading: false,
        }));
      }
    },
    onError: (error) => {
      console.log("🚀 ~ AuthProvider ~ error:", error);
    },
  });

  const { mutate: register, isPending: registering } = useMutation({
    mutationFn: (credentials) => api.register(credentials),
    onSuccess: ({ data }) => {
      if (data?.status) {
        // Save token in localStorage
        localStorage.setItem("auth_token", data.token);
        setAuthState((prev) => ({
          ...prev,
          isAuthenticated: true,
          user: data?.data,
          token: data?.token,
          splashLoading: false,
        }));
      }
    },
    onError: (error) => {
      console.log("🚀 ~ AuthProvider ~ register error:", error);
    },
  });

  const logout = () => {
    localStorage.removeItem("auth_token");
    setAuthState((prev) => ({
      ...prev,
      isAuthenticated: false,
      user: null,
      token: null,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        token,
        splashLoading: false,
      }));
    } else {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: false,
        token: null,
        splashLoading: false,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        loggingIn,
        register,
        registering,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
