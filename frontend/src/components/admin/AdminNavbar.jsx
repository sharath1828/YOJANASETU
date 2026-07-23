import "./AdminNavbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/logo.jpeg";

import {
  FaSearch,
  FaBell,
  FaCog,
  FaUserShield,
  FaSignOutAlt
} from "react-icons/fa";

function AdminNavbar() {

  return (

    <nav className="admin-navbar">

      {/* Left */}

      <div className="admin-left">

        <Link
          to="/admin"
          className="admin-brand"
        >

          <img
            src={Logo}
            alt="YOJANASETU"
          />

          <div>

            <h3>YOJANASETU</h3>

            <p>Admin Portal</p>

          </div>

        </Link>

      </div>

      {/* Search */}

      <div className="admin-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search users, schemes..."
        />

      </div>

      {/* Right */}

      <div className="admin-right">

        {/* Notifications */}

        <button className="admin-icon-btn">

          <FaBell />

          <span className="admin-badge">

            12

          </span>

        </button>

        {/* Settings */}

        <button className="admin-icon-btn">

          <FaCog />

        </button>

        {/* Admin Profile */}

        <div className="admin-profile">

          <FaUserShield />

          <div>

            <h6>Administrator</h6>

            <small>Super Admin</small>

          </div>

        </div>

        {/* Logout */}

        <button className="admin-logout-btn">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </nav>

  );

}

export default AdminNavbar;