import { useEffect, useState } from "react";
import ChatSidebar from "../../components/Chats/ChatSidebar";
import ChatBox from "../../components/Chats/ChatBox";
import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

const Chats = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [conversations, setConversations] = useState([]);
  console.log("🚀 ~ Chats ~ conversations:", conversations);

  const { mutate: fetchConversations, isPending: fetchingConversations } =
    useMutation({
      mutationFn: () => api.conversations(),
      onSuccess: ({ data }) => {
        if (data?.status) {
          setConversations(data?.data);
        }
      },
      onError: (error) => {
        console.log("🚀 ~ Chats ~ error:", error);
      },
    });

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* 64px = Navbar height */}
      <ChatSidebar
        conversations={conversations}
        onSelectUser={setActiveUser}
        activeUserId={activeUser?._id}
      />
      <ChatBox activeUser={activeUser} />
    </div>
  );
};

export default Chats;
