import "./ApplicationTable.css";

import {
  FaEye,
  FaCheck,
  FaTimes
} from "react-icons/fa";

function ApplicationTable() {

  const applications = [
    {
      id: "APP001",
      applicant: "Sharath",
      scheme: "PM Kisan Samman Nidhi",
      date: "20 Jul 2026",
      status: "Pending"
    },
    {
      id: "APP002",
      applicant: "Ravi Kumar",
      scheme: "Ayushman Bharat",
      date: "19 Jul 2026",
      status: "Approved"
    },
    {
      id: "APP003",
      applicant: "Priya Sharma",
      scheme: "National Scholarship",
      date: "18 Jul 2026",
      status: "Rejected"
    },
    {
      id: "APP004",
      applicant: "Rahul Verma",
      scheme: "Rythu Bandhu",
      date: "17 Jul 2026",
      status: "Pending"
    }
  ];

  return (

    <div className="application-table-card">

      <table className="table application-table align-middle">

        <thead>

          <tr>

            <th>Application ID</th>

            <th>Applicant</th>

            <th>Scheme</th>

            <th>Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {applications.map((application) => (

            <tr key={application.id}>

              <td>{application.id}</td>

              <td>{application.applicant}</td>

              <td>{application.scheme}</td>

              <td>{application.date}</td>

              <td>

                <span
                  className={`status-badge ${application.status.toLowerCase()}`}
                >

                  {application.status}

                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button className="view-btn">

                    <FaEye />

                  </button>

                  <button className="approve-btn">

                    <FaCheck />

                  </button>

                  <button className="reject-btn">

                    <FaTimes />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ApplicationTable;