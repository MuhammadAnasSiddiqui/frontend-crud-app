import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import Chats from "../../views/Chats";

const ChatLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/*" element={<Chats />} />
        </Routes>
      </div>
    </div>
  );
};

export default ChatLayout;
