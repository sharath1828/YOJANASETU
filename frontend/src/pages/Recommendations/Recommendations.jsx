import "./Recommendations.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import RecommendationSchemeCard from "../../components/cards/RecommendationSchemeCard";

function Recommendations() {
  return (
    <div className="recommendations-page">

      {/* Dashboard Navbar */}
      <DashboardNavbar />

      <div className="recommendations-container">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="recommendations-content">

          {/* Header */}
          <div className="recommendation-header">

            <div>

              <h2>🤖 AI Recommended Government Schemes</h2>

              <p>
                Based on your profile, our AI has identified the most suitable
                government schemes for you.
              </p>

            </div>

          </div>

          {/* Search & Filters */}

          <div className="filter-bar">

            <input
              type="text"
              className="form-control search-box"
              placeholder="Search Government Schemes..."
            />

            <select className="form-select">
              <option>Category</option>
              <option>Agriculture</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Employment</option>
              <option>Housing</option>
              <option>Business</option>
            </select>

            <select className="form-select">
              <option>State</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
              <option>Maharashtra</option>
            </select>

            <button className="btn btn-success">
              Search
            </button>

          </div>

          {/* Recommendation Cards */}

          <div className="row g-4 mt-4">

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={1}
                match="95"
                title="PM Kisan Samman Nidhi"
                category="Agriculture"
                benefit="₹6,000 yearly financial assistance."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={2}
                match="92"
                title="Ayushman Bharat"
                category="Healthcare"
                benefit="Health insurance up to ₹5 Lakhs."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={3}
                match="89"
                title="National Scholarship"
                category="Education"
                benefit="Scholarship support for eligible students."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={4}
                match="87"
                title="PM Awas Yojana"
                category="Housing"
                benefit="Affordable housing assistance for eligible families."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={5}
                match="85"
                title="Skill India Mission"
                category="Employment"
                benefit="Free skill development and employment training."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <RecommendationSchemeCard
                id={6}
                match="82"
                title="Mudra Loan"
                category="Business"
                benefit="Business loans for MSMEs and startups."
              />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Recommendations;