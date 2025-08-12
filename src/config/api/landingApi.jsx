const landingApis = (api) => {
  const getAllPosts = async () => api.get("/get-all-posts");

  return {
    getAllPosts,
  };
};

export default landingApis;
