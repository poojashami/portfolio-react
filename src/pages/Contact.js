import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left side - Image */}
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Contact illustration"
          />
        </div>

        {/* Right side - Content */}
        <div className="contact-content">
          <div className="contact-card">
            <h2>Get In Touch</h2>
            <p className="contact-subtitle">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:poojashami6@gmail.com">poojashami6@gmail.com</a>
              </div>

              <div className="social-icons">
                <a
                  href="https://github.com/poojashami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pooja-shami-b183b7184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
