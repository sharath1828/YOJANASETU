import "./RecommendationSchemeCard.css";
import { Link } from "react-router-dom";

import {
  FaBookmark,
  FaArrowRight,
  FaExternalLinkAlt,
  FaRobot
} from "react-icons/fa";

function RecommendationSchemeCard({
  id,
  match,
  title,
  category,
  benefit
}) {

  return (

    <div className="recommendation-card">

      {/* Top */}

      <div className="recommendation-top">

        <span className="match-badge">

          {match}% Match

        </span>

        <button className="save-btn">

          <FaBookmark />

        </button>

      </div>

      {/* Scheme */}

      <h3>{title}</h3>

      <span className="category-badge">

        {category}

      </span>

      <p className="benefit">

        {benefit}

      </p>

      {/* AI Match */}

      <div className="ai-match">

        <FaRobot />

        <span>

          AI Match :
          <strong> Excellent</strong>

        </span>

      </div>

      {/* Buttons */}

      <div className="card-buttons">

        <Link
          to={`/scheme/${id}`}
          className="btn btn-outline-success"
        >

          <FaArrowRight className="me-2"/>

          View Details

        </Link>

        <Link
          to={`/scheme/${id}`}
          className="btn btn-success"
        >

          <FaExternalLinkAlt className="me-2"/>

          Apply

        </Link>

      </div>

    </div>

  );

}

export default RecommendationSchemeCard;