const chatApis = (api) => {
  const sendMessage = async (messageData) =>
    api.post("/send-message", messageData);
  const fetchMessages = async (page = 1, limit = 10, receiverId) =>
    api.get(
      `/user-messages?page=${page}&limit=${limit}&receiverId=${receiverId}`
    );
  const conversations = async () => api.get("/conversations");

  return {
    sendMessage,
    fetchMessages,
    conversations,
  };
};

export default chatApis;
