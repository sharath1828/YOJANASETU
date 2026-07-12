import "./BrowseSchemes.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import BrowseSchemeCard from "../../components/cards/BrowseSchemeCard";

function BrowseSchemes() {

  return (

    <div className="browse-page">

      {/* Dashboard Navbar */}

      <DashboardNavbar />

      <div className="browse-container">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="browse-content">

          {/* Header */}

          <div className="browse-header">

            <div>

              <h2>📚 Browse Government Schemes</h2>

              <p>
                Explore all government welfare schemes available across
                different categories and states.
              </p>

            </div>

          </div>

          {/* Statistics */}

          <div className="browse-stats">

            <div className="browse-stat-card">

              <h3>128</h3>

              <p>Total Schemes</p>

            </div>

            <div className="browse-stat-card">

              <h3>18</h3>

              <p>Categories</p>

            </div>

            <div className="browse-stat-card">

              <h3>12</h3>

              <p>New Schemes</p>

            </div>

          </div>

          {/* Search & Filters */}

          <div className="browse-filters">

            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search Government Schemes..."
            />

            <select className="form-select">

              <option>All Categories</option>
              <option>Agriculture</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Housing</option>
              <option>Employment</option>

            </select>

            <select className="form-select">

              <option>All States</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>

            </select>

            <button className="btn btn-success">

              Search

            </button>

          </div>

          {/* Scheme Cards */}

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={1}
                title="PM Kisan Samman Nidhi"
                category="Agriculture"
                benefit="₹6,000 yearly financial assistance."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={2}
                title="Ayushman Bharat"
                category="Healthcare"
                benefit="Health insurance up to ₹5 Lakhs."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={3}
                title="National Scholarship"
                category="Education"
                benefit="Scholarship support for students."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={4}
                title="PM Awas Yojana"
                category="Housing"
                benefit="Affordable housing assistance."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={5}
                title="Skill India Mission"
                category="Employment"
                benefit="Free skill development training."
              />

            </div>

            <div className="col-lg-4 col-md-6">

              <BrowseSchemeCard
                id={6}
                title="Mudra Loan"
                category="Business"
                benefit="Business loans for MSMEs."
              />

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}

export default BrowseSchemes;