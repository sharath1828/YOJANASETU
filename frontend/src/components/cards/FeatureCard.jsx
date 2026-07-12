import {
  FaRobot,
  FaClipboardCheck,
  FaLanguage,
  FaComments,
} from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  const icons = {
    robot: <FaRobot />,
    check: <FaClipboardCheck />,
    language: <FaLanguage />,
    chat: <FaComments />,
  };

  return (
    <div className="col-lg-3 col-md-6 mb-4">

      <div className="feature-card">

        <div className="feature-icon">

          {icons[icon]}

        </div>

        <h4>{title}</h4>

        <p>{description}</p>

      </div>

    </div>
  );
};

export default FeatureCard;