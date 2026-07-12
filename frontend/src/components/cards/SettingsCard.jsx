import "./SettingsCard.css";

import {
  FaArrowRight
} from "react-icons/fa";

function SettingsCard({
  title,
  description,
  button
}) {

  return (

    <div className="settings-card">

      <div className="settings-card-content">

        <h3>

          {title}

        </h3>

        <p>

          {description}

        </p>

      </div>

      <button className="settings-btn">

        {button}

        <FaArrowRight className="ms-2"/>

      </button>

    </div>

  );

}

export default SettingsCard;