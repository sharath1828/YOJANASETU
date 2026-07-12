import "./AIChatbot.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";

import SuggestedQuestions from "../../components/chatbot/SuggestedQuestions";
import ChatWindow from "../../components/chatbot/ChatWindow";
import ChatInput from "../../components/chatbot/ChatInput";

function AIChatbot() {

  return (

    <div className="chatbot-page">

      {/* Navbar */}

      <DashboardNavbar />

      <div className="chatbot-container">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="chatbot-content">

          {/* Header */}

          <div className="chatbot-header">

            <h2>

              🤖 AI Government Assistant

            </h2>

            <p>

              Ask questions about government schemes, eligibility,
              applications and benefits.

            </p>

          </div>

          {/* Chat Layout */}

          <div className="chat-layout">

            {/* Suggested Questions */}

            <div className="suggestion-panel">

              <SuggestedQuestions />

            </div>

            {/* Chat */}

            <div className="chat-panel">

              <ChatWindow />

              <ChatInput />

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}

export default AIChatbot;