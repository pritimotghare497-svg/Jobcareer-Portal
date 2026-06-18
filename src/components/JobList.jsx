import { useState } from "react";
import { jobs } from "../data/jobs";
import { Link, useLocation } from "react-router-dom";
import "./JobList.css";

function JobList() {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchFromHome = queryParams.get("search") || "";

  const [search, setSearch] = useState(searchFromHome);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="joblist-page">

      <div className="joblist-header">

        <h1 className="joblist-title">
          💼 Latest Job Openings
        </h1>

        <input
          type="text"
          placeholder="Search jobs or companies..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="job-grid">

        {filteredJobs.length === 0 && (
          <p className="no-jobs">
            No jobs found for "{search}"
          </p>
        )}

        {filteredJobs.map((job) => (
          <div className="job-card" key={job.id}>

            <div className="job-top">
              <div>
                <h2>{job.title}</h2>
                <h4 className="job-company">
                  {job.company}
                </h4>
              </div>
            </div>

            <div className="job-badges">
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span>{job.salary}</span>
            </div>

            <p className="job-desc">
              {job.desc}
            </p>

            <Link to={`/jobs/${job.id}`}>
              <button className="job-apply-btn">
                View Details
              </button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default JobList;