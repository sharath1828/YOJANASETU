import "./SuggestedQuestions.css";

import {
  FaSeedling,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaBriefcase,
  FaFemale,
  FaUserShield,
  FaWheelchair
} from "react-icons/fa";

function SuggestedQuestions() {

  const questions = [
    {
      icon: <FaSeedling />,
      text: "Farmer Schemes"
    },
    {
      icon: <FaGraduationCap />,
      text: "Student Scholarships"
    },
    {
      icon: <FaHeartbeat />,
      text: "Healthcare Schemes"
    },
    {
      icon: <FaHome />,
      text: "Housing Schemes"
    },
    {
      icon: <FaBriefcase />,
      text: "Employment Schemes"
    },
    {
      icon: <FaFemale />,
      text: "Women Welfare"
    },
    {
      icon: <FaUserShield />,
      text: "Senior Citizen Schemes"
    },
    {
      icon: <FaWheelchair />,
      text: "Disability Benefits"
    }
  ];

  return (

    <div className="suggested-questions">

      <h3>

        Suggested Questions

      </h3>

      <p>

        Start with one of these topics.

      </p>

      <div className="question-list">

        {

          questions.map((question, index) => (

            <button
              key={index}
              className="question-chip"
            >

              {question.icon}

              <span>

                {question.text}

              </span>

            </button>

          ))

        }

      </div>

    </div>

  );

}

export default SuggestedQuestions;