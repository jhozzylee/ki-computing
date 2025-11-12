import React, { useState, useRef, useEffect } from "react";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : process.env.REACT_APP_API_URL || "http://localhost:5050/api";

const useSessionId = () => {
  const [sessionId, setSessionId] = useState(null);
  useEffect(() => {
    let storedId = localStorage.getItem("chatSessionId");
    if (!storedId) {
      storedId = "session-" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      localStorage.setItem("chatSessionId", storedId);
    }
    setSessionId(storedId);
  }, []);
  return sessionId;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const sessionId = useSessionId();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || !sessionId || loading) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const messageToSend = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend, sessionId })
      });
      const data = await res.json();
      if (res.ok) setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      else setMessages((prev) => [...prev, { sender: "bot", text: data.error || "Backend error." }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Network connection failed." }]);
    }
    setLoading(false);
  };

  const isInputDisabled = loading || !sessionId;

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-5 sm:right-5 z-50">
      {!isOpen && (
        <button
          className="bg-primary text-background w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition"
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-[90vw] max-w-md h-[80vh] sm:w-96 sm:h-[600px] bg-background rounded-xl shadow-lg flex flex-col overflow-hidden">
          <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
            <span className="font-filson text-h2">KI Agent</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-primary text-surface" : "bg-gray-200"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-400 text-sm">KI Agent is typing...</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 p-3 border-t">
            <input
              type="text"
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={!sessionId ? "Connecting..." : "Type your question..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !isInputDisabled && sendMessage()}
              disabled={isInputDisabled}
            />
            <button
              onClick={sendMessage}
              disabled={isInputDisabled}
              className={`rounded-full w-10 h-8 flex items-center justify-center ${isInputDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-blue-600"} text-white transition`}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
