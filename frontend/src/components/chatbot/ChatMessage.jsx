import "./ChatMessage.css";

import { FaRobot, FaUserCircle } from "react-icons/fa";

function ChatMessage({
  sender,
  message
}) {

  return (

    <div
      className={`chat-message ${sender}`}
    >

      {/* Avatar */}

      <div className="chat-avatar">

        {

          sender === "ai"

          ?

          <FaRobot />

          :

          <FaUserCircle />

        }

      </div>

      {/* Message */}

      <div className="chat-bubble">

        <p>

          {message}

        </p>

      </div>

    </div>

  );

}

export default ChatMessage;