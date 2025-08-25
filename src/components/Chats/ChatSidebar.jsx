const users = [
  { id: 1, name: "Alice", online: true },
  { id: 2, name: "Bob", online: false },
  { id: 3, name: "Charlie", online: true },
];

const ChatSidebar = ({ onSelectUser, activeUserId }) => {
  return (
    <div className="w-64 bg-primary-light text-neutral-white h-full shadow-card p-4 rounded-l-lg">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`p-3 rounded-lg cursor-pointer flex justify-between items-center ${
              activeUserId === user.id
                ? "bg-accent text-white"
                : "hover:bg-chat.receiver"
            }`}
          >
            <span>{user.name}</span>
            <span
              className={`h-3 w-3 rounded-full ${
                user.online ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
