import "./SchemeTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function SchemeTable() {

  const schemes = [
    {
      id: 1,
      name: "PM Kisan Samman Nidhi",
      category: "Agriculture",
      state: "India",
      beneficiaries: "12.4M",
      status: "Active"
    },
    {
      id: 2,
      name: "Ayushman Bharat",
      category: "Healthcare",
      state: "India",
      beneficiaries: "8.6M",
      status: "Active"
    },
    {
      id: 3,
      name: "National Scholarship",
      category: "Education",
      state: "India",
      beneficiaries: "2.1M",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Rythu Bandhu",
      category: "Agriculture",
      state: "Telangana",
      beneficiaries: "4.8M",
      status: "Active"
    }
  ];

  return (

    <div className="scheme-table-card">

      <table className="table scheme-table align-middle">

        <thead>

          <tr>

            <th>ID</th>

            <th>Scheme Name</th>

            <th>Category</th>

            <th>State</th>

            <th>Beneficiaries</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {schemes.map((scheme) => (

            <tr key={scheme.id}>

              <td>{scheme.id}</td>

              <td>{scheme.name}</td>

              <td>{scheme.category}</td>

              <td>{scheme.state}</td>

              <td>{scheme.beneficiaries}</td>

              <td>

                <span
                  className={`status-badge ${scheme.status.toLowerCase()}`}
                >

                  {scheme.status}

                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button className="view-btn">

                    <FaEye />

                  </button>

                  <button className="edit-btn">

                    <FaEdit />

                  </button>

                  <button className="delete-btn">

                    <FaTrash />

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

export default SchemeTable;