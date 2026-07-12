import "./StepCard.css";

function StepCard({ number, title, description }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <div className="step-card">

        <div className="step-circle">
          {number}
        </div>

        <h5>{title}</h5>

        <p>{description}</p>

      </div>
    </div>
  );
}

export default StepCard;