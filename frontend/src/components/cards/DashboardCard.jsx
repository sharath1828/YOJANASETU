import "./DashboardCard.css";
import { FaArrowUp } from "react-icons/fa";

function DashboardCard({
  icon,
  title,
  value,
  color
}) {

  return (

    <div className="dashboard-card">

      <div
        className="card-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="card-content">

        <h3>{value}</h3>

        <p>{title}</p>

        <span className="card-status">

          <FaArrowUp />

          Updated Today

        </span>

      </div>

    </div>

  );

}

export default DashboardCard;