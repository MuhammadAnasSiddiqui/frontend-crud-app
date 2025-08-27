const ChatSidebar = ({ conversations, onSelectUser, activeUserId }) => {
  return (
    <div className="w-64 bg-primary-light text-neutral-white h-full shadow-card p-4 rounded-l-lg">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul className="space-y-2">
        {conversations?.map((conv) => (
          <li
            key={conv._id}
            onClick={() => onSelectUser(conv)}
            className={`p-3 rounded-lg cursor-pointer flex justify-between items-center ${
              activeUserId === conv._id
                ? "bg-accent text-white"
                : "hover:bg-chat.receiver"
            }`}
          >
            <div className="flex flex-col">
              <span className="font-semibold">
                {conv?.otherUser?.name || "Unknown"}
              </span>
              <span className="text-xs text-white truncate">
                {conv.lastMessage}
              </span>
            </div>
            <span className="text-xs text-white">
              {new Date(conv.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
