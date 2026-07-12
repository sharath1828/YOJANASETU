import "./SavedSchemes.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import SavedSchemeCard from "../../components/cards/SavedSchemeCard";

function SavedSchemes() {
  return (
    <div className="saved-page">

      {/* Dashboard Navbar */}
      <DashboardNavbar />

      <div className="saved-container">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="saved-content">

          {/* Header */}

          <div className="saved-header">

            <div>

              <h2>❤️ Saved Government Schemes</h2>

              <p>
                Access all the government schemes you've bookmarked in one place.
              </p>

            </div>

          </div>

                {/* ================= SUMMARY ================= */}

<div className="saved-stats">

  <div className="saved-stat-card">

    <h3>08</h3>

    <p>Saved Schemes</p>

  </div>

  <div className="saved-stat-card">

    <h3>03</h3>

    <p>Applications Submitted</p>

  </div>

  <div className="saved-stat-card">

    <h3>02</h3>

    <p>Expiring Soon</p>

  </div>

</div>
          {/* Search */}

          <div className="saved-search">

            <input
              type="text"
              className="form-control"
              placeholder="Search saved schemes..."
            />

          </div>

          {/* Saved Cards */}

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">

              <SavedSchemeCard
                id={1}
                title="PM Kisan Samman Nidhi"
                category="Agriculture"
                benefit="₹6,000 yearly financial assistance."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <SavedSchemeCard
                id={2}
                title="Ayushman Bharat"
                category="Healthcare"
                benefit="Health insurance up to ₹5 Lakhs."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <SavedSchemeCard
                id={3}
                title="National Scholarship"
                category="Education"
                benefit="Scholarship support for students."
              />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default SavedSchemes;