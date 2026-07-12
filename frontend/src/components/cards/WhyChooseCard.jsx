import { FaCheckCircle } from "react-icons/fa";

function WhyChooseCard({ title, description }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div className="why-card">

        <div className="why-icon">
          <FaCheckCircle />
        </div>

        <h5>{title}</h5>

        <p>{description}</p>

      </div>

    </div>
  );
}

export default WhyChooseCard;