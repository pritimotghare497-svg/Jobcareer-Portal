import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Java Developer",
    "Spring Boot Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Cloud Engineer",
    "DevOps Engineer",
  ];

  const filteredSuggestions =
    search.length >= 2
      ? suggestions.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/jobs?search=${search}`);
    } else {
      navigate("/jobs");
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <span className="hero-badge">
            #1 Smart Career Platform
          </span>

          <h1>
            Find Your Dream Job &
            Build Your Future
          </h1>

          <p>
            Discover thousands of opportunities from top companies,
            startups, and global recruiters — all in one place.
          </p>

          {/* SEARCH BOX */}
          <div className="hero-search-wrapper">

            <div className="hero-search">

              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button onClick={handleSearch}>
                Search Jobs
              </button>

            </div>

            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="search-suggestions">

                {filteredSuggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => {
                      setSearch(item);
                      setShowSuggestions(false);
                    }}
                  >
                    🔍 {item}
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div>
              <h3>10K+</h3>
              <span>Active Jobs</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Companies</span>
            </div>

            <div>
              <h3>15K+</h3>
              <span>Candidates</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">

          <div className="hero-card">

            <h3>UI/UX Designer</h3>

            <p>Google • Remote</p>

            <div className="tags">
              <span>Full Time</span>
              <span>$120k</span>
            </div>

            <button className="apply-btn">
              Apply Now
            </button>

          </div>

          <div className="floating-card">
            <p>🔥 1200+ New Jobs Added Today</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;