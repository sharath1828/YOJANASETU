import "./NotificationCard.css";
import { Link } from "react-router-dom";

import {
  FaBell,
  FaArrowRight
} from "react-icons/fa";

function NotificationCard({
  type,
  title,
  category,
  time,
  message
}) {

  return (

    <div className={`notification-card ${type}`}>

      {/* Left Side */}

      <div className="notification-icon">

        <FaBell />

      </div>

      {/* Content */}

      <div className="notification-content">

        <div className="notification-top">

          <h4>{title}</h4>

          <span className="notification-time">

            {time}

          </span>

        </div>

        <span className="notification-category">

          {category}

        </span>

        <p>

          {message}

        </p>

      </div>

      {/* Button */}

      <div className="notification-action">

        <Link
          to="/recommendations"
          className="btn btn-success"
        >

          <FaArrowRight className="me-2" />

          View

        </Link>

      </div>

    </div>

  );

}

export default NotificationCard;