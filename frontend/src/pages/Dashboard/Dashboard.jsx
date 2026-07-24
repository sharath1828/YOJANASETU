import "./Dashboard.css";

import { useEffect, useState } from "react";

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

import { useAuth } from "../../context/AuthContext";
import { getUserDashboard } from "../../services/dashboardService";
import { getRecommendations } from "../../services/recommendationService";

function Dashboard() {

  const { user } = useAuth();

  const [dashboard, setDashboard] = useState(null);

  const [recommendations, setRecommendations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const response = await getUserDashboard();

        setDashboard(response.dashboard);

      } catch (err) {

        console.error(err);

        setError("Unable to load dashboard.");

      }

    };

    const loadRecommendations = async () => {

      try {

        const response = await getRecommendations();

        setRecommendations(response.recommendedSchemes);

      } catch (err) {

        console.error(err);

      }

    };

    Promise.all([
      loadDashboard(),
      loadRecommendations()
    ]).finally(() => {

      setLoading(false);

    });

  }, []);

  if (loading) {

    return (

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >

        <h3>Loading Dashboard...</h3>

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

  return (
        <div className="dashboard-page">

      <DashboardNavbar />

      <div className="dashboard-container">

        <Sidebar />

        <main className="dashboard-content">

          {/* Welcome */}

          <section className="welcome-section">

            <div>

              <h2>

                Welcome Back, {user?.fullName || "User"} 👋

              </h2>

              <p>

                Here's your personalized government scheme dashboard.

              </p>

            </div>

          </section>

          {/* Dashboard Statistics */}

          <section className="stats-section">

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">

                <DashboardCard

                  icon={<FaClipboardList />}

                  title="Recommended Schemes"

                  value={dashboard?.recommendedSchemes || 0}

                  color="#16a34a"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard

                  icon={<FaBookmark />}

                  title="Saved Schemes"

                  value={dashboard?.savedSchemes || 0}

                  color="#2563eb"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard

                  icon={<FaBell />}

                  title="Notifications"

                  value={dashboard?.notifications || 0}

                  color="#f59e0b"

                />

              </div>

              <div className="col-lg-3 col-md-6">

                <DashboardCard

                  icon={<FaUserCheck />}

                  title="Profile"

                  value={

                    dashboard?.profileCompleted

                      ? "100%"

                      : "Incomplete"

                  }

                  color="#7c3aed"

                />

              </div>

            </div>

          </section>

          {/* AI Recommendations */}

          <section className="recommendation-section">

            <div className="section-header">

              <div>

                <h3>

                  🤖 AI Recommendations

                </h3>

                <p>

                  Based on your profile, our AI found these schemes.

                </p>

              </div>

            </div>

            <div className="row g-4">

              {

                recommendations.length > 0 ? (

                  recommendations.map((scheme) => (

                    <div

                      className="col-lg-4 col-md-6"

                      key={scheme._id}

                    >

                      <RecommendationCard

                        id={scheme._id}

                        match="100"

                        title={scheme.schemeName}

                        benefit={scheme.description}

                        category={scheme.category}

                      />

                    </div>

                  ))

                ) : (

                  <div className="col-12">

                    <div className="alert alert-info">

                      No recommendations available.

                    </div>

                  </div>

                )

              }

            </div>

          </section>

        </main>

      </div>

    </div>

  );

}

export default Dashboard;