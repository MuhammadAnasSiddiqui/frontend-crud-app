import { useState } from "react";

const ChatBox = ({ activeUser }) => {
  // Messages state
  const [messages, setMessages] = useState([
    { id: 1, sender: "me", text: "Hey Alice, how are you?" },
    { id: 2, sender: "Alice", text: "I'm good! How about you?" },
    { id: 3, sender: "me", text: "Doing great, working on a project" },
  ]);

  // Input state
  const [inputValue, setInputValue] = useState("");

  // Handle send
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "me",
      text: inputValue,
    };

    setMessages([...messages, newMessage]); // update state
    setInputValue(""); // clear input
  };

  return (
    <div className="flex flex-col flex-1 bg-chat.background text-chat.text rounded-r-lg shadow-card">
      {/* Header */}
      <div className="p-4 border-b border-neutral-darkGray flex items-center">
        <h2 className="text-lg font-semibold">
          {activeUser?.name || "Select a user"}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-xs min-w-44 shadow-card ${
                msg.sender === "me"
                  ? "bg-chat.sender text-black"
                  : "bg-chat.receiver text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-neutral-darkGray flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()} // enter key send
          className="flex-1 px-4 py-2 rounded-lg bg-primary-light text-white outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-accent rounded-lg hover:bg-accent-light transition text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
