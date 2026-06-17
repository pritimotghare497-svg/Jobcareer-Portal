import "./Services.css";

function Services() {
  const services = [
    {
      icon: "📄",
      title: "Resume Building",
      desc: "Create ATS-friendly resumes that attract recruiters and increase interview chances.",
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      desc: "Get expert career advice and personalized growth strategies.",
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      desc: "Practice with industry-level interview scenarios and feedback.",
    },
    {
      icon: "💻",
      title: "Skill Assessment",
      desc: "Evaluate your technical and professional skills with assessments.",
    },
    {
      icon: "🔔",
      title: "Job Alerts",
      desc: "Receive real-time job recommendations based on your profile.",
    },
    {
      icon: "🤝",
      title: "Placement Assistance",
      desc: "Connect with hiring companies and placement opportunities.",
    },
  ];

  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">

        <span className="services-badge">
          Career Growth Platform
        </span>

        <h1>
          Career Services Designed For Your Success
        </h1>

        <p>
          Everything you need to build a strong profile,
          crack interviews, and secure your dream job.
        </p>

      </section>

      {/* STATS */}
      <section className="services-stats">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Candidates Helped</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Hiring Companies</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button className="service-btn">
              Learn More
            </button>

          </div>
        ))}

      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h4>Create Profile</h4>
          </div>

          <div className="step">
            <span>2</span>
            <h4>Get Recommendations</h4>
          </div>

          <div className="step">
            <span>3</span>
            <h4>Apply For Jobs</h4>
          </div>

          <div className="step">
            <span>4</span>
            <h4>Get Hired</h4>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="services-cta">

        <h2>Ready To Land Your Dream Job?</h2>

        <p>
          Join thousands of professionals who are accelerating their careers.
        </p>

        <button className="cta-btn">
          Get Started Today
        </button>

      </section>

    </div>
  );
}

export default Services;