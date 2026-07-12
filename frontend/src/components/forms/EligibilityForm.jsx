import { useState } from "react";

function EligibilityForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    category: "",
    occupation: "",
    education: "",
    income: "",
    disability: "No"
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

    alert("Eligibility Check Started!");
  };

  return (

    <form onSubmit={handleSubmit}>

      {/* ================= PERSONAL DETAILS ================= */}

      <h4 className="form-section-title">

        Personal Details

      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label>Full Name</label>

          <input
            type="text"
            className="form-control"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

        </div>

        <div className="col-md-3 mb-3">

          <label>Age</label>

          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

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

      {/* ================= ADDRESS ================= */}

      <h4 className="form-section-title">

        Address Details

      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label>State</label>

          <select
            className="form-select"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >

            <option value="">Select State</option>
            <option>Telangana</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>

          </select>

        </div>

        <div className="col-md-6 mb-3">

          <label>District</label>

          <input
            type="text"
            className="form-control"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* ================= EDUCATION ================= */}

      <h4 className="form-section-title">

        Education & Occupation

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

            <option value="">Select Education</option>

            <option>10th</option>

            <option>12th</option>

            <option>Diploma</option>

            <option>UG</option>

            <option>PG</option>

            <option>PhD</option>

            <option>Other</option>

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

            <option value="">Select Occupation</option>

            <option>Student</option>

            <option>Farmer</option>

            <option>Employee</option>

            <option>Business</option>

            <option>Unemployed</option>

            <option>Homemaker</option>

          </select>

        </div>

      </div>

      {/* ================= CATEGORY ================= */}

      <h4 className="form-section-title">

        Financial Details

      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label>Category</label>

          <select
            className="form-select"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >

            <option value="">Select Category</option>

            <option>General</option>

            <option>OBC</option>

            <option>SC</option>

            <option>ST</option>

            <option>EWS</option>

          </select>

        </div>

        <div className="col-md-6 mb-3">

          <label>Annual Income (₹)</label>

          <input
            type="number"
            className="form-control"
            name="income"
            placeholder="Annual Income"
            value={formData.income}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* ================= DISABILITY ================= */}

      <h4 className="form-section-title">

        Other Information

      </h4>

      <div className="mb-4">

        <label>Disability</label>

        <select
          className="form-select"
          name="disability"
          value={formData.disability}
          onChange={handleChange}
        >

          <option>No</option>

          <option>Yes</option>

        </select>

      </div>

      {/* ================= BUTTON ================= */}

      <button
        className="btn btn-success btn-lg w-100"
        type="submit"
      >

        Check Eligibility

      </button>

    </form>

  );

}

export default EligibilityForm;