import "./AdminDashboard.css";

import { useEffect, useState } from "react";

import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStatCard from "../../components/admin/AdminStatCard";

import {
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaChartLine
} from "react-icons/fa";

import { getAdminDashboard } from "../../services/adminDashboardService";

function AdminDashboard() {

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const response = await getAdminDashboard();

        setDashboard(response.dashboard);

      } catch (err) {

        console.error(err);

        setError("Failed to load dashboard.");

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >

        <h3>Loading Admin Dashboard...</h3>

      </div>

    );

  }

  if (error) {

    return (

      <div className="container mt-5">

        <div className="alert alert-danger">

          {error}

        </div>

      </div>

    );

  }

  const successRate = dashboard.totalApplications
    ? Math.round(
        (dashboard.approvedApplications /
          dashboard.totalApplications) *
          100
      )
    : 0;

  return (
        <div className="admin-page">

      <AdminNavbar />

      <div className="admin-container">

        <AdminSidebar />

        <main className="admin-content">

          {/* Header */}

          <div className="admin-header">

            <h2>👨‍💼 Admin Dashboard</h2>

            <p>

              Welcome to the YOJANASETU Admin Portal.

              Monitor platform statistics and manage the system.

            </p>

          </div>

          {/* Statistics */}

          <section className="admin-stats">

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaUsers />}

                  title="Total Users"

                  value={dashboard.totalUsers}

                  color="#2563eb"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaClipboardList />}

                  title="Schemes"

                  value={dashboard.totalSchemes}

                  color="#16a34a"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaFileAlt />}

                  title="Applications"

                  value={dashboard.totalApplications}

                  color="#f59e0b"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AdminStatCard

                  icon={<FaChartLine />}

                  title="Success Rate"

                  value={`${successRate}%`}

                  color="#7c3aed"

                />

              </div>

            </div>

          </section>

          {/* Application Status */}

          <section className="recent-activity mt-5">

            <h3>Application Statistics</h3>

            <div className="activity-card">

              <p>

                ✅ Approved Applications :

                <strong> {dashboard.approvedApplications}</strong>

              </p>

              <p>

                ⏳ Pending Applications :

                <strong> {dashboard.pendingApplications}</strong>

              </p>

              <p>

                ❌ Rejected Applications :

                <strong> {dashboard.rejectedApplications}</strong>

              </p>

            </div>

          </section>

          {/* Quick Actions */}

          <section className="quick-actions mt-5">

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

                📊 View Analytics

              </button>

            </div>

          </section>

        </main>

      </div>

    </div>

  );

}

export default AdminDashboard;