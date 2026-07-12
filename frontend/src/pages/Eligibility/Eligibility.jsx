import "./Eligibility.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import EligibilityForm from "../../components/forms/EligibilityForm";

function Eligibility() {
  return (
    <div className="eligibility-page">

      {/* Dashboard Navbar */}
      <DashboardNavbar />

      <div className="eligibility-container">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="eligibility-content">

          {/* Header */}

          <div className="eligibility-header">

            <h2>📝 Eligibility Checker</h2>

            <p>
              Fill in your details below to discover government schemes
              that match your profile.
            </p>

          </div>

          {/* Form Card */}

          <div className="eligibility-card">

            <EligibilityForm />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Eligibility;