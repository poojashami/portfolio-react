import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce site with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      image: "../assets/images/world.png",
      github: "https://github.com/poojashami/ecommerce-project",
      liveDemo: "https://yourapp.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time task manager with Firebase authentication",
      tags: ["React", "Firebase", "Material UI"],
      image: "https://via.placeholder.com/600x400?text=Task+App",
      github: "https://github.com/poojashami/world-map",
      liveDemo: "https://taskapp.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio built with React and GSAP animations",
      tags: ["React", "GSAP", "CSS3"],
      image: "https://via.placeholder.com/600x400?text=Portfolio",
      github: "https://github.com/poojashami/my-portfolio",
      liveDemo: "https://yourportfolio.com",
    },
  ];
  return (
    <div className="portfolio-page">
      <div className="container">
        <h1 className="portfolio-title">My Projects</h1>
        <p className="portfolio-subtitle">
          Here are some of my selected works. Each project represents different
          skills and technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
