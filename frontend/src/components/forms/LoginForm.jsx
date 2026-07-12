import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle
} from "react-icons/fa";

function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="login-form">

      {/* Header */}

      <div className="login-header">

        <h2>Welcome Back</h2>

        <p>
          Login to continue to YOJANASETU.
        </p>

      </div>

      {/* Form */}

      <form>

        {/* Email */}

        <div className="mb-3">

          <label className="form-label">

            Email Address

          </label>

          <div className="input-icon">

            <FaEnvelope className="input-icon-left" />

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

          </div>

        </div>

        {/* Password */}

        <div className="mb-3">

          <label className="form-label">

            Password

          </label>

          <div className="password-box">

            <FaLock className="input-icon-left" />

            <input

              type={showPassword ? "text" : "password"}

              className="form-control"

              placeholder="Enter password"

            />

            <button

              type="button"

              className="eye-btn"

              onClick={() => setShowPassword(!showPassword)}

            >

              {

                showPassword

                  ?

                  <FaEyeSlash />

                  :

                  <FaEye />

              }

            </button>

          </div>

        </div>

        {/* Remember + Forgot */}

        <div className="remember-forgot">

          <div className="form-check">

            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />

            <label
              className="form-check-label"
              htmlFor="remember"
            >

              Remember Me

            </label>

          </div>

          <Link
            to="/forgot-password"
            className="forgot-link"
          >

            Forgot Password?

          </Link>

        </div>

        {/* Login Button */}

        <button

          type="submit"

          className="login-btn"

        >

          Login

        </button>

      </form>

      {/* Divider */}

      <div className="divider">

        <span>OR</span>

      </div>

      {/* Google Button */}

      <button
        className="google-btn"
        type="button"
      >

        <FaGoogle />

        Continue with Google

      </button>

      {/* Register */}

      <div className="register-link">

        Don't have an account?

        <Link
          to="/register"
        >

          Register

        </Link>

      </div>

    </div>

  );

}

export default LoginForm;