import "./Analytics.css";

import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AnalyticsCard from "../../components/admin/AnalyticsCard";

import {
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaChartLine
} from "react-icons/fa";

function Analytics() {

  return (

    <div className="admin-page">

      <AdminNavbar />

      <div className="admin-container">

        <AdminSidebar />

        <main className="admin-content">

          {/* Header */}

          <div className="analytics-header">

            <div>

              <h2>📊 Analytics Dashboard</h2>

              <p>

                Monitor platform growth, user engagement and scheme performance.

              </p>

            </div>

          </div>

          {/* Statistics */}

          <section className="analytics-stats">

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">

                <AnalyticsCard
                  icon={<FaUsers />}
                  title="Total Users"
                  value="12,458"
                  color="#2563EB"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AnalyticsCard
                  icon={<FaClipboardList />}
                  title="Total Schemes"
                  value="128"
                  color="#16A34A"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AnalyticsCard
                  icon={<FaFileAlt />}
                  title="Applications"
                  value="5,426"
                  color="#F59E0B"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <AnalyticsCard
                  icon={<FaChartLine />}
                  title="Growth"
                  value="+18%"
                  color="#7C3AED"
                />

              </div>

            </div>

          </section>

          {/* Charts */}

          <section className="chart-grid">

            <div className="chart-card">

              <h4>📈 Monthly Applications</h4>

              <div className="chart-placeholder">

                Chart will be connected using Chart.js

              </div>

            </div>

            <div className="chart-card">

              <h4>🏛 Popular Schemes</h4>

              <div className="chart-placeholder">

                Pie Chart will be displayed here

              </div>

            </div>

          </section>

          {/* Recent Analytics */}

          <section className="analytics-summary">

            <h3>Platform Summary</h3>

            <div className="summary-card">

              <p>✅ 2,315 new users joined this month.</p>

              <p>📄 1,248 applications submitted this week.</p>

              <p>🏛 PM Kisan is the most applied scheme.</p>

              <p>🌍 Telangana has the highest registrations.</p>

            </div>

          </section>

        </main>

      </div>

    </div>

  );

}

export default Analytics;