import "./SchemeCard.css";
import { Link } from "react-router-dom";

function SchemeCard({ id, image, name, category, benefit }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">

      <div className="scheme-card">

        <img
          src={image}
          alt={name}
          className="scheme-image"
        />

        <div className="scheme-content">

          <span className="scheme-category">
            {category}
          </span>

          <h4>{name}</h4>

          <p>{benefit}</p>

          <Link
            to={`/scheme/${id}`}
            className="btn btn-primary mt-3"
          >
            Learn More →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default SchemeCard;