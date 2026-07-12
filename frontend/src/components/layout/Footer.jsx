import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 col-md-6 mb-4">

            <h2 className="footer-logo">
              YOJANASETU
            </h2>

            <p className="footer-description">

              AI Powered Government Scheme Recommendation
              Platform helping citizens discover welfare
              schemes quickly and easily.

            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <ul>

              <li><a href="#">Home</a></li>

              <li><a href="#">About</a></li>

              <li><a href="#">Schemes</a></li>

              <li><a href="#">Contact</a></li>

            </ul>

          </div>

          {/* Categories */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Categories</h5>

            <ul>

              <li><a href="#">Students</a></li>

              <li><a href="#">Farmers</a></li>

              <li><a href="#">Women</a></li>

              <li><a href="#">Healthcare</a></li>

              <li><a href="#">Employment</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Contact</h5>

            <ul className="contact-list">

              <li>

                <FaMapMarkerAlt />

                Hyderabad, Telangana

              </li>

              <li>

                <FaPhoneAlt />

                +91 98765 43210

              </li>

              <li>

                <FaEnvelope />

                contact@yojanasetu.in

              </li>

            </ul>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>

            © 2026 <strong>YOJANASETU</strong>. All Rights Reserved.

          </p>

          <button
            className="scroll-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;