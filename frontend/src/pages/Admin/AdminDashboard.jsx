import "./AdminDashboard.css";

import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStatCard from "../../components/admin/AdminStatCard";

import {
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaChartLine
} from "react-icons/fa";

function AdminDashboard() {

  return (

    <div className="admin-page">

      {/* Navbar */}

      <AdminNavbar />

      <div className="admin-container">

        {/* Sidebar */}

        <AdminSidebar />

        {/* Content */}

        <main className="admin-content">

          {/* Header */}

          <div className="admin-header">

            <h2>

              👨‍💼 Admin Dashboard

            </h2>

            <p>

              Manage users, government schemes and monitor platform activities.

            </p>

          </div>

          {/* Statistics */}

          <section className="admin-stats">

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaUsers />}

                  title="Total Users"

                  value="12,458"

                  color="#2563eb"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaClipboardList />}

                  title="Schemes"

                  value="128"

                  color="#16a34a"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaFileAlt />}

                  title="Applications"

                  value="5,426"

                  color="#f59e0b"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaChartLine />}

                  title="Success Rate"

                  value="94%"

                  color="#7c3aed"

                />

              </div>

            </div>

          </section>

          {/* Quick Actions */}

          <section className="quick-actions">

            <h3>Quick Actions</h3>

            <div className="action-grid">

              <button className="btn btn-success">

                ➕ Add New Scheme

              </button>

              <button className="btn btn-primary">

                👥 Manage Users

              </button>

              <button className="btn btn-warning">

                📄 Review Applications

              </button>

              <button className="btn btn-dark">

                📊 View Reports

              </button>

            </div>

          </section>

          {/* Recent Activity */}

          <section className="recent-activity">

            <h3>

              Recent Activity

            </h3>

            <div className="activity-card">

              <p>✅ 42 new users registered today.</p>

              <p>📄 128 new scheme applications received.</p>

              <p>🏛️ PM Kisan scheme updated.</p>

              <p>🔔 Notification sent to all Telangana users.</p>

            </div>

          </section>

        </main>

      </div>

    </div>

  );

}

export default AdminDashboard;