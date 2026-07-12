import "./RecommendationCard.css";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaRobot
} from "react-icons/fa";

function RecommendationCard({
  id,
  match,
  title,
  benefit,
  category
}) {

  return (

    <div className="recommendation-card">

      {/* Top */}

      <div className="recommendation-header">

        <span className="match-badge">

          {match}% Match

        </span>

        <span className="scheme-category">

          {category}

        </span>

      </div>

      {/* Title */}

      <h4>{title}</h4>

      {/* Benefit */}

      <p>{benefit}</p>

      {/* AI Recommendation */}

      <div className="ai-recommendation">

        <FaRobot />

        <span>

          AI Recommendation :
          <strong> Highly Recommended</strong>

        </span>

      </div>

      {/* Buttons */}

      <div className="recommendation-actions">

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

export default RecommendationCard;