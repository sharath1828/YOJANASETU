import "./Settings.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import SettingsCard from "../../components/cards/SettingsCard";

function Settings() {
  return (
    <div className="settings-page">

      {/* Navbar */}

      <DashboardNavbar />

      <div className="settings-container">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="settings-content">

          {/* Header */}

          <div className="settings-header">

            <h2>⚙️ Settings</h2>

            <p>
              Manage your account, preferences, notifications and security.
            </p>

          </div>

          {/* Settings Cards */}

          <div className="settings-grid">

            <SettingsCard
              title="👤 Account"
              description="Update your profile information."
              button="Edit Profile"
            />

            <SettingsCard
              title="🔒 Security"
              description="Change your password and manage your security."
              button="Change Password"
            />

            <SettingsCard
              title="🔔 Notifications"
              description="Manage notification preferences."
              button="Manage"
            />

            <SettingsCard
              title="🌐 Preferences"
              description="Language, appearance and application settings."
              button="Update"
            />

            <SettingsCard
              title="ℹ️ About"
              description="Privacy policy, terms and application version."
              button="View"
            />

            <SettingsCard
              title="🚪 Logout"
              description="Sign out from your account securely."
              button="Logout"
            />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Settings;