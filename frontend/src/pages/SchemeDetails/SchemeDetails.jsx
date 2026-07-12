import "./SchemeDetails.css";

import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

import {
  FaCheckCircle,
  FaFileAlt,
  FaExternalLinkAlt,
  FaBookmark,
  FaShareAlt
} from "react-icons/fa";

function SchemeDetails() {

  return (

    <div className="scheme-page">

      <Navbar />

      <div className="scheme-container">

        <Sidebar />

        <main className="scheme-content">

          {/* Header */}

          <section className="scheme-header">

            <div>

              <span className="match-badge">

                95% AI Match

              </span>

              <h1>

                PM Kisan Samman Nidhi

              </h1>

              <p>

                Agriculture • Central Government Scheme

              </p>

            </div>

            <button className="btn btn-success">

              <FaBookmark className="me-2"/>

              Save Scheme

            </button>

          </section>

          {/* Benefit */}

          <section className="benefit-card">

            <h2>

              ₹6,000 Per Year

            </h2>

            <p>

              Direct financial assistance provided in three equal installments
              to eligible farmers.

            </p>

          </section>

          {/* Description */}

          <section className="details-card">

            <h3>

              About this Scheme

            </h3>

            <p>

              Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)
              is a Central Sector Scheme launched by the
              Government of India to provide income support
              to all eligible farmer families across the country.

            </p>

          </section>

          {/* Eligibility */}

          <section className="details-card">

            <h3>

              Eligibility Criteria

            </h3>

            <ul>

              <li>

                <FaCheckCircle className="icon"/>

                Must be an Indian Citizen

              </li>

              <li>

                <FaCheckCircle className="icon"/>

                Should be a Farmer

              </li>

              <li>

                <FaCheckCircle className="icon"/>

                Valid Aadhaar Number

              </li>

              <li>

                <FaCheckCircle className="icon"/>

                Bank Account Linked

              </li>

            </ul>

          </section>

          {/* Documents */}

          <section className="details-card">

            <h3>

              Required Documents

            </h3>

            <div className="documents">

              <div className="document">

                <FaFileAlt/>

                Aadhaar Card

              </div>

              <div className="document">

                <FaFileAlt/>

                PAN Card

              </div>

              <div className="document">

                <FaFileAlt/>

                Land Records

              </div>

              <div className="document">

                <FaFileAlt/>

                Bank Passbook

              </div>

            </div>

          </section>

          {/* Application Process */}

          <section className="details-card">

            <h3>

              Application Process

            </h3>

            <ol>

              <li>Visit the official PM-Kisan Portal</li>

              <li>Register with Aadhaar</li>

              <li>Fill Farmer Details</li>

              <li>Upload Documents</li>

              <li>Submit Application</li>

            </ol>

          </section>

          {/* Buttons */}

          <section className="action-buttons">

            <button className="btn btn-success btn-lg">

              <FaExternalLinkAlt className="me-2"/>

              Apply Now

            </button>

            <button className="btn btn-outline-success btn-lg">

              Official Website

            </button>

            <button className="btn btn-outline-primary btn-lg">

              <FaShareAlt className="me-2"/>

              Share

            </button>

          </section>

        </main>

      </div>

    </div>

  );

}

export default SchemeDetails;