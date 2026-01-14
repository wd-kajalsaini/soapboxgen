import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">SoapBoxGen</span>
        </Link>
        <div className="nav-links">
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className={isActive('/') ? 'active' : ''}>Features</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a>
          <a href="#examples" onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}>Examples</a>
        </div>
        <div className="nav-buttons">
          <Link to="/login" className="nav-sign-in">Sign In</Link>
          <Link to="/sign-up" className="btn btn-get-started">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
