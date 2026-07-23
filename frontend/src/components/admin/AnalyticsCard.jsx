import "./AnalyticsCard.css";

function AnalyticsCard({
  icon,
  title,
  value,
  color
}) {

  return (

    <div className="analytics-card">

      <div
        className="analytics-card-icon"
        style={{ backgroundColor: color }}
      >

        {icon}

      </div>

      <div className="analytics-card-content">

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

export default AnalyticsCard;