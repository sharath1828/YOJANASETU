import "./Register.css";
import RegisterForm from "../../components/forms/RegisterForm";

// Replace with your own illustration later
import RegisterImage from "../../assets/images/hero/family.jpg";

function Register() {
  return (
    <section className="register-page">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6 d-none d-lg-flex">

            <div className="register-left">

              <img
                src={RegisterImage}
                alt="Register"
                className="img-fluid register-image"
              />

              <h2>Welcome to YOJANASETU</h2>

              <p>
                Create your account and discover government schemes
                personalized for your profile.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <RegisterForm />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Register;