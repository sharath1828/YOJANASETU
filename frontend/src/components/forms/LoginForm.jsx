import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function LoginForm() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({

    email: "",

    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const data = await login(formData);

      if (data.user.role === "admin") {

        navigate("/admin/dashboard");

      } else {

        navigate("/dashboard");

      }

    } catch (err) {

      setError(

        err.response?.data?.message || "Login failed."

      );

    }

    setLoading(false);

  };

  return (

    <div className="login-form">

      <div className="login-header">

        <h2>Welcome Back</h2>

        <p>Login to continue to YOJANASETU.</p>

      </div>

      {error && (

        <div className="alert alert-danger">

          {error}

        </div>

      )}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label">

            Email Address

          </label>

          <div className="input-icon">

            <FaEnvelope className="input-icon-left" />

            <input

              type="email"

              name="email"

              className="form-control"

              placeholder="Enter your email"

              value={formData.email}

              onChange={handleChange}

              required

            />

          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">

            Password

          </label>

          <div className="password-box">

            <FaLock className="input-icon-left" />

            <input

              type={showPassword ? "text" : "password"}

              name="password"

              className="form-control"

              placeholder="Enter password"

              value={formData.password}

              onChange={handleChange}

              required

            />

            <button

              type="button"

              className="eye-btn"

              onClick={() => setShowPassword(!showPassword)}

            >

              {showPassword ? <FaEyeSlash /> : <FaEye />}

            </button>

          </div>

        </div>

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

        <button

          type="submit"

          className="login-btn"

          disabled={loading}

        >

          {loading ? "Logging in..." : "Login"}

        </button>

      </form>

      <div className="divider">

        <span>OR</span>

      </div>

      <button

        className="google-btn"

        type="button"

      >

        <FaGoogle />

        Continue with Google

      </button>

      <div className="register-link">

        Don't have an account?

        <Link to="/register">

          Register

        </Link>

      </div>

    </div>

  );

}

export default LoginForm;