import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Pooja Shami</span>
            </h1>
            <h2 className="hero-subtitle">MERN Stack Developer</h2>
            <p className="hero-description">
              Results-driven MERN Stack Developer with 3+ years of experience in
              building scalable and responsive web applications. Proficient in
              MongoDB, Express.js, React.js, and Node.js, with a strong
              foundation in JavaScript (ES6+), RESTful APIs, and modern
              frontend/backend development.
            </p>
            <div className="hero-actions">
              <button
                className="cta-button primary"
                onClick={() => navigate("/projects")}
              >
                View My Work
              </button>
              <button
                className="cta-button secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="developer-illustration"></div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <div className="section-header">
            <h2 className="section-title">My Skills</h2>
            <div className="divider"></div>
          </div>

          <div className="skills-grid">
            {/* Frontend Skills */}
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Frontend</h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> React.js (Hooks, Context API,
                  Redux)
                </li>
                <li>
                  <i className="fas fa-check"></i> Next.js (SSR, SSG)
                </li>
                <li>
                  <i className="fas fa-check"></i> JavaScript (ES6+), TypeScript
                </li>
                <li>
                  <i className="fas fa-check"></i> HTML5, CSS3, SASS, Tailwind
                </li>
                <li>
                  <i className="fas fa-check"></i> State Management
                </li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend</h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Node.js
                </li>
                <li>
                  <i className="fas fa-check"></i> Express.js
                </li>
                <li>
                  <i className="fas fa-check"></i> MongoDB
                </li>
                <li>
                  <i className="fas fa-check"></i> RESTful APIs
                </li>
                <li>
                  <i className="fas fa-check"></i> Firebase
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Tools</h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Git & GitHub
                </li>
                <li>
                  <i className="fas fa-check"></i> Docker
                </li>
                <li>
                  <i className="fas fa-check"></i> Postman
                </li>
                <li>
                  <i className="fas fa-check"></i> VS Code
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
