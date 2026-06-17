import "./PostJob.css";

function PostJob() {
  return (
    <div className="postjob-page">

      <div className="postjob-container">

        <h1>Post a New Job 🚀</h1>

        <p>
          Reach thousands of talented candidates and hire the best people for your company.
        </p>

        <form className="job-form">

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Frontend Developer"
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Google"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Bangalore"
            />
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select>
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
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              rows="5"
              placeholder="Describe the role and requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Post Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default PostJob;