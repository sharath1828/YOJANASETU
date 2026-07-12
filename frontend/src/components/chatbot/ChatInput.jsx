import "./ChatInput.css";

import {
  FaPaperPlane,
  FaPaperclip,
  FaMicrophone
} from "react-icons/fa";

function ChatInput() {

  return (

    <div className="chat-input-container">

      {/* Attachment */}

      <button className="chat-action-btn">

        <FaPaperclip />

      </button>

      {/* Input */}

      <input
        type="text"
        placeholder="Ask anything about government schemes..."
      />

      {/* Voice */}

      <button className="chat-action-btn">

        <FaMicrophone />

      </button>

      {/* Send */}

      <button className="send-btn">

        <FaPaperPlane />

      </button>

    </div>

  );

}

export default ChatInput;