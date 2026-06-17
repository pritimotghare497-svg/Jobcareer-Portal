import { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-left">

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Login to explore thousands of jobs,
            internships, and career opportunities.
          </p>

          <div className="login-features">

            <div className="feature-card">
              🚀 Apply to top companies
            </div>

            <div className="feature-card">
              💼 Discover remote opportunities
            </div>

            <div className="feature-card">
              🔥 Build your professional career
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="login-card">

          <h2>Login Account</h2>

          <p className="login-subtitle">
            Enter your credentials to continue
          </p>

          <form>

            <div className="login-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="login-group">
              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>

              </div>
            </div>

            <div className="login-options">

              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/">
                Forgot Password?
              </a>

            </div>

            <button className="login-btn">
              Login
            </button>

            <button className="create-btn">
              Create New Account
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;