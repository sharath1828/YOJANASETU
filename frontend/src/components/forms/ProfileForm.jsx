import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaUsers,
  FaWheelchair
} from "react-icons/fa";

function ProfileForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    mobile: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    education: "",
    occupation: "",
    annualIncome: "",
    category: "",
    disability: "",
    maritalStatus: "",
    familyMembers: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

  };

  return (

    <div className="profile-form">

      <div className="profile-header">

        <h2>Profile Setup</h2>

        <p>

          Complete your profile to receive personalized
          government scheme recommendations.

        </p>

      </div>

      <form onSubmit={handleSubmit}>

        {/* ================= PERSONAL ================= */}

        <h4 className="section-heading">

          Personal Information

        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>Full Name</label>

            <div className="input-icon">

              <FaUser className="input-icon-left"/>

              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <label>Age</label>

            <div className="input-icon">

              <FaBirthdayCake className="input-icon-left"/>

              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <label>Gender</label>

            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>

            </select>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>Email</label>

            <div className="input-icon">

              <FaEnvelope className="input-icon-left"/>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="col-md-6 mb-3">

            <label>Mobile</label>

            <div className="input-icon">

              <FaPhone className="input-icon-left"/>

              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

        {/* ================= ADDRESS ================= */}

        <h4 className="section-heading">

          Address Details

        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>State</label>

            <input
              type="text"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />

          </div>

          <div className="col-md-6 mb-3">

            <label>District</label>

            <input
              type="text"
              className="form-control"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>City</label>

            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />

          </div>

          <div className="col-md-6 mb-3">

            <label>Pincode</label>

            <input
              type="text"
              className="form-control"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* ================= EDUCATION ================= */}

        <h4 className="section-heading">

          Education & Employment

        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>Education</label>

            <select
              className="form-select"
              name="education"
              value={formData.education}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>SSC</option>
              <option>Intermediate</option>
              <option>Diploma</option>
              <option>Graduate</option>
              <option>Post Graduate</option>

            </select>

          </div>

          <div className="col-md-6 mb-3">

            <label>Occupation</label>

            <select
              className="form-select"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>Student</option>
              <option>Farmer</option>
              <option>Government Employee</option>
              <option>Private Employee</option>
              <option>Business</option>
              <option>Unemployed</option>

            </select>

          </div>

        </div>

        {/* ================= FINANCIAL ================= */}

        <h4 className="section-heading">

          Financial Information

        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>Annual Income</label>

            <input
              type="number"
              className="form-control"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
            />

          </div>

          <div className="col-md-6 mb-3">

            <label>Category</label>

            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>

            </select>

          </div>

        </div>

        {/* ================= OTHER ================= */}

        <h4 className="section-heading">

          Additional Details

        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <label>Disability</label>

            <select
              className="form-select"
              name="disability"
              value={formData.disability}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>No</option>
              <option>Yes</option>

            </select>

          </div>

          <div className="col-md-6 mb-3">

            <label>Marital Status</label>

            <select
              className="form-select"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>

            </select>

          </div>

        </div>

        <div className="mb-4">

          <label>Family Members</label>

          <input
            type="number"
            className="form-control"
            name="familyMembers"
            value={formData.familyMembers}
            onChange={handleChange}
          />

        </div>

        <button
          className="profile-btn"
          type="submit"
        >

          Save & Continue →

        </button>

      </form>

    </div>

  );

}

export default ProfileForm;