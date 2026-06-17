import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Career<span>Connect</span>
          </Link>

          <p>
            Your trusted career platform to discover jobs,
            internships, and opportunities from top companies worldwide.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Login</Link>

        </div>

        {/* SERVICES */}
        <div className="footer-links">

          <h3>Services</h3>

          <a href="/">Career Guidance</a>
          <a href="/">Resume Building</a>
          <a href="/">Interview Prep</a>

        </div>

        {/* SOCIAL */}
        <div className="footer-social">

          <h3>Connect With Us</h3>

          <div className="social-icons">
            <a href="/">🌐</a>
            <a href="/">💼</a>
            <a href="/">📧</a>
            <a href="/">📱</a>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 CareerConnect. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;