import "./DashboardNavbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/logo.jpeg";

import {
  FaRobot,
  FaBell,
  FaCog,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">

      {/* ================= LOGO ================= */}

      <div className="dashboard-left">

        <Link
          to="/dashboard"
          className="dashboard-brand"
        >

          <img
            src={Logo}
            alt="YOJANASETU"
          />

          <span>

            YOJANASETU

          </span>

        </Link>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="dashboard-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Government Schemes..."
        />

      </div>

      {/* ================= RIGHT ================= */}

      <div className="dashboard-right">

        {/* AI Assistant */}

        <Link
          to="/ai-chatbot"
          className="icon-btn ai-btn"
          title="AI Assistant"
        >

          <FaRobot />

        </Link>

        {/* Notifications */}

        <Link
          to="/notifications"
          className="icon-btn notification-btn"
          title="Notifications"
        >

          <FaBell />

          <span className="notification-badge">

            5

          </span>

        </Link>

        {/* Settings */}

        <Link
          to="/settings"
          className="icon-btn"
          title="Settings"
        >

          <FaCog />

        </Link>

        {/* Profile */}

        <Link
          to="/profile"
          className="user-profile"
        >

          <FaUserCircle />

          <span>

            Sharath

          </span>

        </Link>

        {/* Logout */}

        <button className="logout">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </nav>
  );
}

export default DashboardNavbar;