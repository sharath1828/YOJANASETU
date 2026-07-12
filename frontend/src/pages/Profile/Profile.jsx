import "./Profile.css";
import ProfileForm from "../../components/forms/ProfileForm";

// Illustration
import ProfileImage from "../../assets/images/hero/family.jpg";

function Profile() {
  return (
    <section className="profile-page">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-5 d-none d-lg-flex">

            <div className="profile-left">

              <img
                src={ProfileImage}
                alt="Profile Setup"
                className="img-fluid profile-image"
              />

              <h2>Complete Your Profile</h2>

              <p>

                Tell us a little about yourself so our AI can
                recommend the best government welfare schemes
                that match your eligibility.

              </p>

              <div className="profile-steps">

                <div className="step completed">

                  ✓ Register Account

                </div>

                <div className="step completed">

                  ✓ Login

                </div>

                <div className="step active">

                  ● Complete Profile

                </div>

                <div className="step">

                  ○ AI Recommendation

                </div>

                <div className="step">

                  ○ Dashboard

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <ProfileForm />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;