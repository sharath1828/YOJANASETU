import "./SavedSchemeCard.css";

import { Link } from "react-router-dom";

import {
  FaHeart,
  FaArrowRight,
  FaExternalLinkAlt,
  FaTrashAlt
} from "react-icons/fa";

function SavedSchemeCard({
  id,
  title,
  category,
  benefit
}) {

  return (

    <div className="saved-card">

      {/* Top */}

      <div className="saved-top">

        <span className="saved-badge">

          <FaHeart />

          Saved

        </span>

        <span className="saved-category">

          {category}

        </span>

      </div>

      {/* Title */}

      <h3>

        {title}

      </h3>

      {/* Benefit */}

      <p>

        {benefit}

      </p>

      {/* Buttons */}

      <div className="saved-buttons">

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

      {/* Remove */}

      <button className="remove-btn">

        <FaTrashAlt className="me-2"/>

        Remove

      </button>

    </div>

  );

}

export default SavedSchemeCard;