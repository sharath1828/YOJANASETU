import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaChartBar,
  FaSignOutAlt
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      {/* Logo */}

      <div className="admin-logo">
        <h2>YOJANASETU</h2>
        <p>Admin Panel</p>
      </div>

      {/* Navigation */}

      <nav className="admin-menu">

        <NavLink to="/admin" className="admin-menu-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className="admin-menu-item">
          <FaUsers />
          <span>Manage Users</span>
        </NavLink>

        <NavLink to="/admin/schemes" className="admin-menu-item">
          <FaClipboardList />
          <span>Manage Schemes</span>
        </NavLink>

        <NavLink to="/admin/applications" className="admin-menu-item">
          <FaFileAlt />
          <span>Applications</span>
        </NavLink>

        <NavLink to="/admin/analytics" className="admin-menu-item">
          <FaChartBar />
          <span>Analytics</span>
        </NavLink>

      </nav>

      {/* Footer */}

      <div className="admin-footer">

        <button className="admin-logout">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;