import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock
} from "react-icons/fa";

function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (

    <div className="register-form">

      <div className="register-header">

        <h2>Create Account</h2>

        <p>
          Join YOJANASETU and discover government schemes
          personalized for you.
        </p>

      </div>

      <form>

        {/* Full Name */}

        <div className="mb-3">

          <label className="form-label">

            Full Name

          </label>

          <div className="input-icon">

            <FaUser className="input-icon-left"/>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />

          </div>

        </div>

        {/* Email */}

        <div className="mb-3">

          <label className="form-label">

            Email Address

          </label>

          <div className="input-icon">

            <FaEnvelope className="input-icon-left"/>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

          </div>

        </div>

        {/* Mobile */}

        <div className="mb-3">

          <label className="form-label">

            Mobile Number

          </label>

          <div className="input-icon">

            <FaPhone className="input-icon-left"/>

            <input
              type="tel"
              className="form-control"
              placeholder="Enter mobile number"
            />

          </div>

        </div>

        {/* Password */}

        <div className="mb-3">

          <label className="form-label">

            Password

          </label>

          <div className="password-box">

            <FaLock className="input-icon-left"/>

            <input

              type={showPassword ? "text" : "password"}

              className="form-control"

              placeholder="Create password"

            />

            <button

              type="button"

              className="eye-btn"

              onClick={() => setShowPassword(!showPassword)}

            >

              {

                showPassword

                ?

                <FaEyeSlash/>

                :

                <FaEye/>

              }

            </button>

          </div>

        </div>

        {/* Confirm Password */}

        <div className="mb-4">

          <label className="form-label">

            Confirm Password

          </label>

          <div className="password-box">

            <FaLock className="input-icon-left"/>

            <input

              type={showConfirmPassword ? "text" : "password"}

              className="form-control"

              placeholder="Confirm password"

            />

            <button

              type="button"

              className="eye-btn"

              onClick={() => setShowConfirmPassword(!showConfirmPassword)}

            >

              {

                showConfirmPassword

                ?

                <FaEyeSlash/>

                :

                <FaEye/>

              }

            </button>

          </div>

        </div>

        {/* Checkbox */}

        <div className="form-check mb-4">

          <input

            className="form-check-input"

            type="checkbox"

            id="terms"

          />

          <label

            className="form-check-label"

            htmlFor="terms"

          >

            I agree to the Terms & Conditions

          </label>

        </div>

        {/* Register Button */}

        <button

          type="submit"

          className="register-btn"

        >

          Create Account

        </button>

      </form>

      <div className="login-link">

        Already have an account?

        <Link
          to="/login"
        >

          Login

        </Link>

      </div>

    </div>

  );

}

export default RegisterForm;