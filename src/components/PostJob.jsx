import { useState } from "react";
import "./PostJob.css";

function PostJob() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    e.target.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="postjob-page">
      <div className="postjob-container">
        <h1>Post a New Job 🚀</h1>

        <p>
          Reach thousands of talented candidates and hire the best people for
          your company.
        </p>

        {success && (
          <div className="success-msg">
            ✅ Job Posted Successfully!
          </div>
        )}

        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Frontend Developer"
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Google"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Bangalore"
              required
            />
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select required>
              <option value="">Select Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              placeholder="₹10-15 LPA"
              required
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              rows="5"
              placeholder="Describe the role and requirements..."
              required
            ></textarea>
          </div>

          <button
  type="button"
  className="submit-btn"
  onClick={() => alert("job posted succesfully")}
>
  Post Job
</button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;