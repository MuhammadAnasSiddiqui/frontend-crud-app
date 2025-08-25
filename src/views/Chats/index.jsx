import { useState } from "react";
import ChatSidebar from "../../components/Chats/ChatSidebar";
import ChatBox from "../../components/Chats/ChatBox";

const Chats = () => {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* 64px = Navbar height */}
      <ChatSidebar onSelectUser={setActiveUser} activeUserId={activeUser?.id} />
      <ChatBox activeUser={activeUser} />
    </div>
  );
};

export default Chats;
