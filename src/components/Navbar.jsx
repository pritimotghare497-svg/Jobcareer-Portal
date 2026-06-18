import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          Career<span>Connect</span>
        </Link>

        {/* Search Bar */}
        

       

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
          >
            Find Jobs
          </Link>

          <Link
            to="/companies"
            onClick={() => setMenuOpen(false)}
          >
            Companies
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          {/* Mobile Only Links */}
         { /*<Link
            to="/login"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/post-job"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Post a Job
          </Link>*/}

        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link to="/post-job">
            <button className="post-btn">
              Post a Job
            </button>
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;