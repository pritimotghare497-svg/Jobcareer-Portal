import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Career<span>Connect</span>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/">Companies</Link>
          <Link to="/">Services</Link>
        </nav>

        {/* Right Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <button className="primary-btn">
            Post a Job
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;