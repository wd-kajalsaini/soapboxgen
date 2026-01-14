import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className="signup-section">
      <div className="container">
        <div className="signup-container">
          {/* Left Side - Account Options */}
          <div className="signup-options">
            <h1 className="signup-title">Create an Account</h1>
            <p className="signup-subtitle">
              Making hiring more human and memorable through video, for job seekers, companies, and recruiters.
            </p>

            <div className="account-options">
              <a href="https://tally.so/r/VLGzag" className="account-option" target="_blank" rel="noopener">
                <div className="option-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="option-content">
                  <h3>Job Seeker</h3>
                  <p>Show your personality and land more interviews</p>
                </div>
              </a>

              <a href="https://tally.so/r/EkqGJr" className="account-option" target="_blank" rel="noopener">
                <div className="option-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="option-content">
                  <h3>Hiring Manager</h3>
                  <p>Hire faster with authentic, engaging video applications</p>
                </div>
              </a>

              <a href="https://tally.so/r/1AX9eW" className="account-option" target="_blank" rel="noopener">
                <div className="option-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="option-content">
                  <h3>Recruiter</h3>
                  <p>Present your candidates in a more human, memorable way</p>
                </div>
              </a>

              </div>

            <p className="login-link">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>

          {/* Right Side - Testimonial */}
          <div className="signup-testimonial">
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "Using SoapBoxGen gave me the confidence to present myself in a way that words alone couldn't. My video pitch landed me interviews at top companies, and within weeks, I had a job offer."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="author-info">
                  <h4>Sarah Mitchell</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="social-proof">
              <p className="proof-text">Over 100+ candidates joining as founding members</p>
              <div className="company-logos">
                <span className="company-logo">Google</span>
                <span className="company-logo">Meta</span>
                <span className="company-logo">Amazon</span>
                <span className="company-logo">Microsoft</span>
                <span className="company-logo">Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
