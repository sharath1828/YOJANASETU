import "./Login.css";
import LoginForm from "../../components/forms/LoginForm";

// Same illustration used in Register Page
import LoginImage from "../../assets/images/hero/family.jpg";

function Login() {
  return (
    <section className="login-page">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6 d-none d-lg-flex">

            <div className="login-left">

              <img
                src={LoginImage}
                alt="Login"
                className="img-fluid login-image"
              />

              <h2>Welcome Back!</h2>

              <p>
                Login to access your personalized government schemes,
                eligibility results and recommendations.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <LoginForm />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;