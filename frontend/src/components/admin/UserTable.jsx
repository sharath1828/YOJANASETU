import "./UserTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function UserTable() {

  const users = [
    {
      id: 1,
      name: "Sharath",
      email: "sharath@gmail.com",
      phone: "+91 9876543210",
      state: "Telangana",
      status: "Active"
    },
    {
      id: 2,
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      phone: "+91 9123456780",
      state: "Andhra Pradesh",
      status: "Active"
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "+91 9988776655",
      state: "Karnataka",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "+91 9871203456",
      state: "Maharashtra",
      status: "Pending"
    }
  ];

  return (

    <div className="user-table-card">

      <table className="table user-table align-middle">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>State</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.phone}</td>

              <td>{user.state}</td>

              <td>

                <span
                  className={`status-badge ${user.status.toLowerCase()}`}
                >

                  {user.status}

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

export default UserTable;