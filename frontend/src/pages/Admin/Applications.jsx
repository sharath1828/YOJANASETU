import "./Applications.css";

import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ApplicationTable from "../../components/admin/ApplicationTable";

import { FaSearch, FaFilter } from "react-icons/fa";

function Applications() {

  return (

    <div className="admin-page">

      <AdminNavbar />

      <div className="admin-container">

        <AdminSidebar />

        <main className="admin-content">

          {/* Header */}

          <div className="manage-header">

            <div>

              <h2>📄 Scheme Applications</h2>

              <p>

                Review, approve and reject government scheme applications.

              </p>

            </div>

            <button className="btn btn-primary filter-btn">

              <FaFilter />

              Filter

            </button>

          </div>

          {/* Search */}

          <div className="application-search">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search by applicant, scheme or application ID..."
            />

          </div>

          {/* Table */}

          <ApplicationTable />

        </main>

      </div>

    </div>

  );

}

export default Applications;