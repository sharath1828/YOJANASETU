import "./Notifications.css";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import Sidebar from "../../components/layout/Sidebar";
import NotificationCard from "../../components/cards/NotificationCard";

function Notifications() {
  return (
    <div className="notifications-page">

      {/* Dashboard Navbar */}

      <DashboardNavbar />

      <div className="notifications-container">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <main className="notifications-content">

          {/* Header */}

          <div className="notifications-header">

            <div>

              <h2>🔔 Notifications</h2>

              <p>
                Stay updated with your latest government scheme activities,
                reminders and announcements.
              </p>

            </div>

          </div>

          {/* Statistics */}

          <div className="notification-stats">

            <div className="notification-stat-card">

              <h3>05</h3>

              <p>Unread</p>

            </div>

            <div className="notification-stat-card">

              <h3>18</h3>

              <p>Read</p>

            </div>

            <div className="notification-stat-card">

              <h3>23</h3>

              <p>Total</p>

            </div>

          </div>

          {/* Search */}

          <div className="notification-search">

            <input
              type="text"
              className="form-control"
              placeholder="Search notifications..."
            />

          </div>

          {/* Notifications */}

          <div className="notification-list">

            <NotificationCard
              type="danger"
              title="New Scholarship Released"
              category="Education"
              time="2 Hours Ago"
              message="National Scholarship Portal has released new scholarships for UG students."
            />

            <NotificationCard
              type="success"
              title="PM Kisan Payment Released"
              category="Agriculture"
              time="Yesterday"
              message="₹2,000 installment has been credited to eligible farmers."
            />

            <NotificationCard
              type="warning"
              title="Ayushman Registration Ends Tomorrow"
              category="Healthcare"
              time="Today"
              message="Complete your registration before the deadline."
            />

            <NotificationCard
              type="info"
              title="New Employment Scheme Added"
              category="Employment"
              time="3 Days Ago"
              message="Explore the newly launched employment assistance scheme."
            />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Notifications;