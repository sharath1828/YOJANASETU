import "./LandingPage.css";
import React from 'react';

// import Logo from "../../assets/logos";
import Navbar from "../../components/layout/Navbar";
import FeatureCard from "../../components/cards/FeatureCard";
import WhyChooseCard from "../../components/cards/WhyChooseCard";
import StatisticCard from "../../components/cards/StatisticCard";
import StepCard from "../../components/cards/StepCard";
import SchemeCard from "../../components/cards/SchemeCard";
import schemes from "../../data/schemes.json";
import CategoryCard from "../../components/cards/CategoryCard";

import {

FaUserGraduate,

FaTractor,

FaFemale,

FaUserTie,

FaWheelchair,

FaHeartbeat,

FaBriefcase,

FaGraduationCap

} from "react-icons/fa";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

import Footer from "../../components/layout/Footer";
//images
import PMKisan from "../../assets/images/schemes/pmkisan.png";
import Ayushman from "../../assets/images/schemes/ayushman.png";
import Scholarship from "../../assets/images/schemes/scholarship.jpg";
import PMAwas from "../../assets/images/schemes/pmawas.png";
import HeroImage from "../../assets/images/hero/family.jpg";

function LandingPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            {/* Left Side */}

            <div className="col-lg-6">

              <span className="hero-badge">
                🇮🇳 AI Powered Government Welfare Platform
              </span>

              <h1 className="hero-title">

                Find Government
                <br />

                <span> Schemes You Are </span>

                <span className="green-text">
                  Eligible For
                </span>

              </h1>

              <p className="hero-description">

                Get personalized recommendations using Artificial
                Intelligence and quickly discover government welfare
                schemes based on your profile.

              </p>

              <div className="hero-buttons">

                <button className="btn btn-primary hero-btn">

                  Get Started →

                </button>

                <button className="btn btn-outline-primary ms-3">

                  Explore Schemes

                </button>

              </div>

            </div>

            {/* Right Side */}

            <div className="col-lg-6 text-center">

              <img

                src={HeroImage}

                alt="Hero"

                className="img-fluid hero-image"

              />

            </div>

          </div>

        </div>

      </section>

   
    {/* ================= FEATURES SECTION ================= */}

<section className="features">

  <div className="container">

    <div className="text-center mb-5">

      <h2 className="section-title">
        Our Features
      </h2>

      <p className="section-subtitle">
        Smart features designed to simplify access to government welfare schemes.
      </p>

    </div>

    <div className="row">

      <FeatureCard
        icon="robot"
        title="AI Recommendations"
        description="Get personalized government scheme recommendations based on your profile."
      />

      <FeatureCard
        icon="check"
        title="Eligibility Checker"
        description="Instantly check your eligibility for various government schemes."
      />

      <FeatureCard
        icon="language"
        title="Multilingual Support"
        description="Use the platform in multiple Indian languages for better accessibility."
      />

      <FeatureCard
        icon="chat"
        title="AI Assistant"
        description="Ask questions and receive intelligent guidance regarding government schemes."
      />

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="why-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">

                Why Choose YOJANASETU?

            </h2>

            <p className="section-subtitle">

                We help citizens easily discover and apply for
                government welfare schemes through a secure,
                intelligent and user-friendly platform.

            </p>

        </div>

        <div className="row">

            <WhyChooseCard

                title="AI Powered Recommendations"

                description="Receive personalized government scheme recommendations based on your profile."

            />

            <WhyChooseCard

                title="Fast Eligibility Check"

                description="Verify your eligibility within seconds without visiting multiple websites."

            />

            <WhyChooseCard

                title="Government Verified"

                description="All scheme information comes from authentic government sources."

            />

            <WhyChooseCard

                title="Secure Platform"

                description="Your personal information is protected with secure authentication."

            />

            <WhyChooseCard

                title="Multilingual Support"

                description="Access the platform in multiple Indian languages."

            />

            <WhyChooseCard

                title="Easy To Use"

                description="Simple interface designed for students, farmers, women and senior citizens."

            />

        </div>

    </div>

</section>

{/* ================= STATISTICS ================= */}

<section className="statistics-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">

                Trusted by Thousands

            </h2>

            <p className="section-subtitle">

                Helping citizens discover government welfare
                schemes across India.

            </p>

        </div>

        <div className="row">

            <StatisticCard
                number="500+"
                title="Government Schemes"
            />

            <StatisticCard
                number="50+"
                title="Categories"
            />

            <StatisticCard
                number="10K+"
                title="Users"
            />

            <StatisticCard
                number="95%"
                title="Recommendation Accuracy"
            />

        </div>

    </div>

</section>
{/* ================= HOW IT WORKS ================= */}

<section className="how-section">

  <div className="container">

    <div className="text-center mb-5">

      <h2 className="section-title">
        How YOJANASETU Works
      </h2>

      <p className="section-subtitle">
        Discover government schemes in just five simple steps.
      </p>

    </div>

    <div className="row justify-content-center">

      <StepCard
        number="1"
        title="Register"
        description="Create your account using your email."
      />

      <StepCard
        number="2"
        title="Complete Profile"
        description="Enter your personal and financial details."
      />

      <StepCard
        number="3"
        title="Check Eligibility"
        description="Our system checks eligible schemes instantly."
      />

      <StepCard
        number="4"
        title="Get Recommendations"
        description="Receive personalized government schemes."
      />

      <StepCard
        number="5"
        title="Apply"
        description="Visit the official portal and apply."
      />

    </div>

  </div>

</section>

{/* ================= POPULAR SCHEMES ================= */}

<section className="popular-schemes">

    <div className="container">

        <div className="row">

            <SchemeCard
                id={1}
                image={PMKisan}
                name={schemes[0].name}
                category={schemes[0].category}
                benefit={schemes[0].benefit}
            />

            <SchemeCard
                id={2}
                image={Ayushman}
                name={schemes[1].name}
                category={schemes[1].category}
                benefit={schemes[1].benefit}
            />

            <SchemeCard
                id={3}
                image={Scholarship}
                name={schemes[2].name}
                category={schemes[2].category}
                benefit={schemes[2].benefit}
            />

            <SchemeCard
                id={4}
                image={PMAwas}
                name={schemes[3].name}
                category={schemes[3].category}
                benefit={schemes[3].benefit}
            />

        </div>

    </div>

</section>

{/*================ CATEGORY SECTION =================*/}

<section className="category-section">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">

Browse by Category

</h2>

<p className="section-subtitle">

Find government schemes based on your category.

</p>

</div>

<div className="row">

<CategoryCard
icon={<FaUserGraduate />}
title="Students"
/>

<CategoryCard
icon={<FaTractor />}
title="Farmers"
/>

<CategoryCard
icon={<FaFemale />}
title="Women"
/>

<CategoryCard
icon={<FaBriefcase />}
title="Employment"
/>

<CategoryCard
icon={<FaWheelchair />}
title="Disability"
/>

<CategoryCard
icon={<FaHeartbeat />}
title="Healthcare"
/>

<CategoryCard
icon={<FaGraduationCap />}
title="Education"
/>

<CategoryCard
icon={<FaUserTie />}
title="Senior Citizens"
/>

</div>

</div>

</section>

{/*================ CALL TO ACTION =================*/}

<section className="cta-section">

    <div className="container">

        <div className="cta-box">

            <h2>

                Ready to Find Government Schemes?

            </h2>

            <p>

                Register today and discover government welfare
                schemes that match your profile.

            </p>

            <div className="cta-buttons">

                <button className="btn btn-light btn-lg">

                    Get Started

                </button>

                <button className="btn btn-outline-light btn-lg">

                    Browse Schemes

                </button>

            </div>

        </div>

    </div>

</section>

{/* ================= FAQ SECTION ================= */}

<section className="faq-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">
                Frequently Asked Questions
            </h2>

            <p className="section-subtitle">
                Find answers to common questions about YOJANASETU.
            </p>

        </div>

        <div className="accordion" id="faqAccordion">

            {/* FAQ 1 */}

            <div className="accordion-item">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOne">

                        What is YOJANASETU?

                    </button>

                </h2>

                <div
                    id="faqOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">

                    <div className="accordion-body">

                        YOJANASETU is an AI-powered government welfare platform
                        that helps citizens discover schemes they are eligible for
                        based on their personal profile.

                    </div>

                </div>

            </div>

            {/* FAQ 2 */}

            <div className="accordion-item">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqTwo">

                        Is registration free?

                    </button>

                </h2>

                <div
                    id="faqTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">

                    <div className="accordion-body">

                        Yes. Registration and using the platform are completely
                        free for all users.

                    </div>

                </div>

            </div>

            {/* FAQ 3 */}

            <div className="accordion-item">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqThree">

                        How are recommendations generated?

                    </button>

                </h2>

                <div
                    id="faqThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">

                    <div className="accordion-body">

                        Recommendations are generated using your profile details
                        such as age, income, education, occupation, state,
                        category, and other eligibility criteria.

                    </div>

                </div>

            </div>

            {/* FAQ 4 */}

            <div className="accordion-item">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqFour">

                        Is my personal information secure?

                    </button>

                </h2>

                <div
                    id="faqFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">

                    <div className="accordion-body">

                        Yes. We use secure authentication and data protection
                        practices to keep your information safe.

                    </div>

                </div>

            </div>

            {/* FAQ 5 */}

            <div className="accordion-item">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqFive">

                        Can I apply for schemes through YOJANASETU?

                    </button>

                </h2>

                <div
                    id="faqFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">

                    <div className="accordion-body">

                        Phase-1 provides eligibility checking and scheme details.
                        In future versions, users will be guided directly to the
                        official government application portals.

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ================= CONTACT SECTION ================= */}

<section className="contact-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">
                Contact Us
            </h2>

            <p className="section-subtitle">
                Have questions or suggestions? We'd love to hear from you.
            </p>

        </div>

        <div className="row g-5">

            {/* Left Side */}

            <div className="col-lg-5">

                <div className="contact-info">

                    <h3>Get In Touch</h3>

                    <p className="contact-text">

                        Feel free to contact us regarding government
                        schemes, eligibility, or technical support.

                    </p>

                    <div className="contact-item">

                        <FaMapMarkerAlt className="contact-icon"/>

                        <div>

                            <h5>Address</h5>

                            <p>
                                Hyderabad, Telangana, India
                            </p>

                        </div>

                    </div>

                    <div className="contact-item">

                        <FaEnvelope className="contact-icon"/>

                        <div>

                            <h5>Email</h5>

                            <p>
                                contact@yojanasetu.in
                            </p>

                        </div>

                    </div>

                    <div className="contact-item">

                        <FaPhoneAlt className="contact-icon"/>

                        <div>

                            <h5>Phone</h5>

                            <p>
                                +91 98765 43210
                            </p>

                        </div>

                    </div>

                    <div className="contact-item">

                        <FaClock className="contact-icon"/>

                        <div>

                            <h5>Working Hours</h5>

                            <p>

                                Monday - Saturday

                                <br />

                                9:00 AM - 6:00 PM

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Right Side */}

            <div className="col-lg-7">

                <div className="contact-form">

                    <form>

                        <div className="row">

                            <div className="col-md-6 mb-4">

                                <input

                                    type="text"

                                    className="form-control"

                                    placeholder="Full Name"

                                />

                            </div>

                            <div className="col-md-6 mb-4">

                                <input

                                    type="email"

                                    className="form-control"

                                    placeholder="Email Address"

                                />

                            </div>

                        </div>

                        <div className="mb-4">

                            <input

                                type="text"

                                className="form-control"

                                placeholder="Subject"

                            />

                        </div>

                        <div className="mb-4">

                            <textarea

                                rows="6"

                                className="form-control"

                                placeholder="Write your message..."

                            ></textarea>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary-custom"
                        >

                            Send Message

                        </button>

                    </form>

                </div>

            </div>

        </div>

    </div>

</section>

<Footer />
 </>
  );
}

export default LandingPage;