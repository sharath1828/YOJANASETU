import "./ManageUsers.css";

import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import UserTable from "../../components/admin/UserTable";
import { FaSearch, FaUserPlus } from "react-icons/fa";

function ManageUsers() {
  return (
    <div className="admin-page">

      <AdminNavbar />

      <div className="admin-container">

        <AdminSidebar />

        <main className="admin-content">

          {/* Header */}

          <div className="manage-header">

            <div>

              <h2>👥 Manage Users</h2>

              <p>
                View, search, edit and manage registered users.
              </p>

            </div>

            <button className="btn btn-success add-user-btn">

              <FaUserPlus />

              Add User

            </button>

          </div>

          {/* Search */}

          <div className="user-search">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search by name, email or phone..."
            />

          </div>

          {/* User Table */}

          <UserTable />

        </main>

      </div>

    </div>
  );
}

export default ManageUsers;