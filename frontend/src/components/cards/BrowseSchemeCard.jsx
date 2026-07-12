import "./BrowseSchemeCard.css";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaArrowRight,
  FaExternalLinkAlt,
  FaStar
} from "react-icons/fa";

function BrowseSchemeCard({
  id,
  title,
  category,
  benefit
}) {

  return (

    <div className="browse-card">

      {/* Featured Badge */}

      <div className="browse-top">

        <span className="featured-badge">

          <FaStar className="me-2" />

          Featured

        </span>

        <button className="save-btn">

          <FaHeart />

        </button>

      </div>

      {/* Scheme Image */}

      <div className="scheme-image-placeholder">

        <span>🏛️</span>

      </div>

      {/* Scheme Name */}

      <h3>{title}</h3>

      {/* Category */}

      <span className="browse-category">

        {category}

      </span>

      {/* Description */}

      <p>{benefit}</p>

      {/* Buttons */}

      <div className="browse-buttons">

        <Link
          to={`/scheme/${id}`}
          className="btn btn-outline-success"
        >

          <FaArrowRight className="me-2" />

          Details

        </Link>

        <Link
          to={`/scheme/${id}`}
          className="btn btn-success"
        >

          <FaExternalLinkAlt className="me-2" />

          Apply

        </Link>

      </div>

    </div>

  );

}

export default BrowseSchemeCard;