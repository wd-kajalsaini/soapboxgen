import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">SoapBoxGen</div>
          <p className="footer-tagline">Be seen. Be remembered. Get hired.</p>
        </div>
        <div className="footer-col">
          <h4>For</h4>
          <ul className="footer-links">
            <li><Link to="/">Job Seekers</Link></li>
            <li><Link to="/hiring-managers">Hiring Managers</Link></li>
            <li><Link to="/career-services">Career Services</Link></li>
            <li><Link to="/recruiters">Recruiters</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <p>Built by Richard, a former recruiter with 19 years of experience. I know what gets candidates noticed.</p>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; 2025 SoapBoxGen. Thank you for helping us build what's next in hiring.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
