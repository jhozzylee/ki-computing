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
        body: JSON.stringify({ message: messageToSend, sessionId }),
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
    <div className="fixed bottom-2 right-2 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-2">
      {/* Chat Window */}
      <div
        className={`origin-bottom-right transition-transform duration-300 ease-in-out
                    ${isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-0 translate-y-4 opacity-0"}
                    w-[90vw] max-w-md h-[80vh] sm:w-96 sm:h-[600px] bg-background rounded-[24px] shadow-lg flex flex-col overflow-hidden`}
      >
        <div className="bg-primary text-white px-4 py-8 flex flex-col">
          <span className="font-filson text-h3">Hi there!</span>
          <p className="text-bodySm">How can I help today?</p>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === "user" ? "text-right text-background" : "text-left"}
            >
              <span
                className={`inline-block px-3 py-2 max-w-[70vw] sm:max-w-[270px] rounded-[24px] break-words ${
                  msg.sender === "user" ? "bg-primary text-surface" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </span>

            </div>
          ))}
          {loading && <p className="text-gray-400 text-sm">KI Agent is typing...</p>}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t">
  <div className="relative">
    <input
      type="text"
      className="w-full border rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={!sessionId ? "Connecting..." : "Type your question..."}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && !isInputDisabled && sendMessage()}
      disabled={isInputDisabled}
    />
    <button
      onClick={sendMessage}
      disabled={isInputDisabled}
      className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full ${
        isInputDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-blue-600"
      } text-white transition`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</div>

      </div>

      {/* Floating Button */}
      <button
        className="group bg-primary w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-primary/10 hover:border hover:border-primary transition-transform duration-300 ease-in-out"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-8 h-8 text-white group-hover:text-primary transition-transform duration-300 transform rotate-180`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            fill="currentColor"
            width="25px"
            height="25px"
            viewBox="0 0 30 30"
            className="text-white group-hover:text-primary transition-transform duration-300 transform"
          >
            <path d="M15 2.25c-7.027 0-12.75 5.52-12.75 12.307.01 2.98 1.124 5.85 3.128 8.056a4.868 4.868 0 0 1-1.98 3.697.75.75 0 0 0-.106 1.182.75.75 0 0 0 .405.19c.421.048.845.07 1.268.068a11.88 11.88 0 0 0 6-1.5c1.305.426 2.67.643 4.043.645 7.027 0 12.75-5.52 12.75-12.307C27.758 7.8 22.027 2.25 15 2.25Zm0 23.115a11.616 11.616 0 0 1-3.893-.675.75.75 0 0 0-.66.082A9.945 9.945 0 0 1 5.64 26.25a7.043 7.043 0 0 0 1.245-3.75.75.75 0 0 0-.195-.675 10.5 10.5 0 0 1-2.94-7.268C3.75 8.595 8.797 3.75 15 3.75s11.25 4.845 11.25 10.807c0 5.963-5.047 10.808-11.25 10.808Z"></path>
            <path d="M15 16.545a1.545 1.545 0 1 0 0-3.09 1.545 1.545 0 0 0 0 3.09ZM20.25 16.545a1.545 1.545 0 1 0 0-3.09 1.545 1.545 0 0 0 0 3.09ZM9.75 16.545a1.545 1.545 0 1 0 0-3.09 1.545 1.545 0 0 0 0 3.09Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
