import "./ChatWindow.css";

import ChatMessage from "./ChatMessage";

function ChatWindow() {

  return (

    <div className="chat-window">

      {/* AI Welcome Message */}

      <ChatMessage

        sender="ai"

        message="Hello Sharath 👋

I'm YOJANASETU AI Assistant.

I can help you find government schemes, check eligibility, explain benefits and guide you through the application process.

How can I assist you today?"

      />

      {/* User */}

      <ChatMessage

        sender="user"

        message="Show me farmer schemes."

      />

      {/* AI */}

      <ChatMessage

        sender="ai"

        message="Here are some popular agriculture schemes:

• PM Kisan Samman Nidhi

• PM Fasal Bima Yojana

• Soil Health Card

• Kisan Credit Card"

      />

    </div>

  );

}

export default ChatWindow;