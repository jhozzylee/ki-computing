import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react"; // Optional icon library, works if you have lucide-react installed

const HelloSkipAgent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#0A66C2",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            zIndex: 1100,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Chat with our AI Agent"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            height: "600px",
            zIndex: 1000,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            backgroundColor: "#fff",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#0A66C2",
              color: "#fff",
              padding: "10px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <span>Chat with K.I. Computing AI</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              title="Close chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat iFrame */}
          <iframe
            src="https://helloskip.com/featured/BP9ZNkbOBNgy4jvrb68h"
            title="K.I. Computing - Skip AI Agent"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="clipboard-write"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default HelloSkipAgent;
