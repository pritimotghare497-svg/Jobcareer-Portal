import { useState } from "react";
import "./Companies.css";



function Companies() {
  const [search, setSearch] = useState("");
  const companies = [
    {
      name: "Google",
      industry: "Technology",
      jobs: "120 Jobs",
      rating: "4.8",
      location: "Bangalore",
    },
    {
      name: "Microsoft",
      industry: "Software",
      jobs: "95 Jobs",
      rating: "4.7",
      location: "Hyderabad",
    },
    {
      name: "Amazon",
      industry: "E-Commerce",
      jobs: "150 Jobs",
      rating: "4.6",
      location: "Pune",
    },
    {
      name: "Adobe",
      industry: "Creative Software",
      jobs: "65 Jobs",
      rating: "4.8",
      location: "Noida",
    },
    {
      name: "Infosys",
      industry: "IT Services",
      jobs: "200 Jobs",
      rating: "4.3",
      location: "Mumbai",
    },
    {
      name: "TCS",
      industry: "Consulting",
      jobs: "180 Jobs",
      rating: "4.2",
      location: "Nagpur",
    },
  ];
const filteredCompanies = companies.filter(
  (company) =>
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.industry.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="companies-page">

      {/* HERO */}
      <section className="companies-hero">
        <h1>Top Companies Hiring Now 🚀</h1>

        <p>
          Discover leading companies and explore exciting career opportunities.
        </p>

        <input
  type="text"
  placeholder="Search companies..."
  className="company-search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      </section>

      {/* STATS */}
      <section className="company-stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Jobs</p>
        </div>

        <div className="stat-card">
          <h2>15K+</h2>
          <p>Candidates</p>
        </div>

      </section>

      {/* COMPANY GRID */}
      <section className="company-grid">

        {filteredCompanies.map((company, index) => (
          <div className="company-card" key={index}>

            <div className="company-logo">
              {company.name.charAt(0)}
            </div>

            <h3>{company.name}</h3>

            <p className="industry">
              {company.industry}
            </p>

            <div className="company-info">
              <span>📍 {company.location}</span>
              <span>⭐ {company.rating}</span>
            </div>

            <div className="company-jobs">
              {company.jobs}
            </div>

            <button className="view-company-btn">
              View Company
            </button>

          </div>
        ))}

      </section>

    </div>
  );
}

export default Companies; 