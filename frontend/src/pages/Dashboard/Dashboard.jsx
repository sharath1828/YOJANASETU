import "./Dashboard.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import DashboardCard from "../../components/cards/DashboardCard";
import RecommendationCard from "../../components/cards/RecommendationCard";

import {
  FaClipboardList,
  FaBookmark,
  FaBell,
  FaUserCheck
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ================= TOP NAVBAR ================= */}

      <DashboardNavbar />

      {/* ================= DASHBOARD LAYOUT ================= */}

      <div className="dashboard-container">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="dashboard-content">

          {/* ================= WELCOME SECTION ================= */}

          <section className="welcome-section">

            <div>

              <h2>
                Welcome Back, Sharath 👋
              </h2>

              <p>
                Here's your personalized government scheme dashboard.
              </p>

            </div>

          </section>

          {/* ================= STATISTICS ================= */}

          <section className="stats-section">

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">

                <DashboardCard
                  icon={<FaClipboardList />}
                  title="Eligible Schemes"
                  value="24"
                  color="#16a34a"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard
                  icon={<FaBookmark />}
                  title="Saved Schemes"
                  value="08"
                  color="#2563eb"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard
                  icon={<FaBell />}
                  title="Notifications"
                  value="05"
                  color="#f59e0b"
                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard
                  icon={<FaUserCheck />}
                  title="Profile Complete"
                  value="95%"
                  color="#7c3aed"
                />

              </div>

            </div>

          </section>

          {/* ================= AI RECOMMENDATIONS ================= */}

          <section className="recommendation-section">

            <div className="section-header">

              <div>

                <h3>
                  🤖 AI Recommendations
                </h3>

                <p>
                  Based on your profile, our AI found the following
                  government schemes for you.
                </p>

              </div>

              <button className="btn btn-success">

                View All

              </button>

            </div>

            <div className="row g-4">

              <div className="col-lg-4 col-md-6">

                <RecommendationCard
                  id={1}
                  match="95"
                  title="PM Kisan Samman Nidhi"
                  benefit="₹6,000 financial assistance every year."
                  category="Agriculture"
                />

              </div>

              <div className="col-lg-4 col-md-6">

                <RecommendationCard
                  id={2}
                  match="92"
                  title="Ayushman Bharat"
                  benefit="Health insurance up to ₹5 Lakhs."
                  category="Healthcare"
                />

              </div>

              <div className="col-lg-4 col-md-6">

                <RecommendationCard
                  id={3}
                  match="89"
                  title="National Scholarship"
                  benefit="Scholarship support for eligible students."
                  category="Education"
                />

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;