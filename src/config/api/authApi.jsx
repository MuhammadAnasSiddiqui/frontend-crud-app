const authApis = (api) => {
  const login = async (credentials) => api.post("/login", credentials);
  const register = async (userData) => api.post("/register", userData);

  return {
    login,
    register,
  };
};

export default authApis;
