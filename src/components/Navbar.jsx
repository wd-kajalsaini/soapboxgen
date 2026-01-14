import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="logo">SoapBoxGen</Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Job Seekers</Link>
          <Link to="/hiring-managers" className={isActive('/hiring-managers') ? 'active' : ''}>Hiring Managers</Link>
          <Link to="/career-services" className={isActive('/career-services') ? 'active' : ''}>Career Services</Link>
          <Link to="/recruiters" className={isActive('/recruiters') ? 'active' : ''}>Recruiters</Link>
        </div>
        <div className="nav-buttons">
          <Link to="/login" className="btn btn-secondary nav-login-btn">Login</Link>
          <Link to="/sign-up" className="btn btn-primary nav-signup-btn">Sign up for free</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
