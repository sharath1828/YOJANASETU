import "./AdminStatCard.css";

function AdminStatCard({
  icon,
  title,
  value,
  color
}) {

  return (

    <div className="admin-stat-card">

      {/* Icon */}

      <div
        className="admin-stat-icon"
        style={{ backgroundColor: color }}
      >

        {icon}

      </div>

      {/* Content */}

      <div className="admin-stat-content">

        <h2>

          {value}

        </h2>

        <p>

          {title}

        </p>

      </div>

    </div>

  );

}

export default AdminStatCard;