import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logos/logo.jpeg";

import {
  FaHome,
  FaUser,
  FaRobot,
  FaClipboardList,
  FaCheckCircle,
  FaBookmark,
  FaBell,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (

    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <img
          src={Logo}
          alt="YOJANASETU"
          className="img"
        />

        <h3>YOJANASETU</h3>

        <p>AI Government Assistant</p>

      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        <NavLink to="/dashboard" className="menu-item">

          <FaHome />

          <span>Dashboard</span>

        </NavLink>

        <NavLink to="/profile" className="menu-item">

          <FaUser />

          <span>My Profile</span>

        </NavLink>

        <NavLink to="/recommendations" className="menu-item">

          <FaRobot />

          <span>AI Recommendations</span>

        </NavLink>

        <NavLink to="/schemes" className="menu-item">

          <FaClipboardList />

          <span>Browse Schemes</span>

        </NavLink>

        <NavLink to="/eligibility" className="menu-item">

          <FaCheckCircle />

          <span>Eligibility Checker</span>

        </NavLink>

        <NavLink to="/saved-schemes" className="menu-item">

          <FaBookmark />

          <span>Saved Schemes</span>

        </NavLink>

        <NavLink to="/notifications" className="menu-item">

          <FaBell />

          <span>Notifications</span>

        </NavLink>

        <NavLink to="/settings" className="menu-item">

          <FaCog />

          <span>Settings</span>

        </NavLink>

      </nav>

      {/* Logout */}

      <div className="sidebar-footer">

        <button className="logout-btn">

          <FaSignOutAlt />

          Logout

        </button>


      </div>


    </aside>

  );
}

export default Sidebar;