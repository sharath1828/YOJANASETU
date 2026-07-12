import "./DashboardNavbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/logo.jpeg";

import {
  FaBell,
  FaCog,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

function DashboardNavbar() {

  return (

    <nav className="dashboard-navbar">

      {/* Logo */}

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

      {/* Search */}

      <div className="dashboard-search">

        <FaSearch className="search-icon"/>

        <input
          type="text"
          placeholder="Search Government Schemes..."
        />

      </div>

      {/* Right */}

      <div className="dashboard-right">

        {/* Notifications */}

        <Link
          to="/notifications"
          className="icon-btn notification-btn"
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