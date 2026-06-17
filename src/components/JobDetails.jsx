import { jobs } from "../data/jobs";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

function JobDetails() {
  const { id } = useParams();

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: ""
  });

 

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <h2 className="not-found">Job not found</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully 🚀");
    setShowPopup(false);
    setFormData({ name: "", email: "", resume: "" });
  };

  return (
    <div className="job-details-page">

      {/* MAIN LAYOUT */}
      <div className="job-details-container">

        {/* LEFT SIDE */}
        <div className="job-main">

          <h1>{job.title}</h1>
          <h3 className="company">{job.company}</h3>

          <div className="badges">
            <span>📍 {job.location}</span>
            <span>💼 {job.type}</span>
            <span>💰 {job.salary}</span>
          </div>

          <p className="desc">{job.desc}</p>

          <div className="section">
            <h4>About this role</h4>
            <p>
              This is a great opportunity to work with {job.company} and build scalable, modern applications using latest technologies.
            </p>
          </div>

          <button className="apply-btn" onClick={() => setShowPopup(true)}>
            Apply Now
          </button>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="job-sidebar">

          <div className="sidebar-card">
            <h3>{job.company}</h3>
            <p>Hiring actively</p>

            <div className="info">
              <span>📍 {job.location}</span>
              <span>💼 {job.type}</span>
            </div>

            <button onClick={() => setShowPopup(true)}>
              Quick Apply
            </button>
          </div>

        </div>

      </div>

      {/* POPUP FORM */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">

            <h2>Apply for {job.title}</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="resume"
                placeholder="Resume Link"
                value={formData.resume}
                onChange={handleChange}
                required
              />

              <div className="popup-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default JobDetails;