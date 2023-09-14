import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const NetworkSupport = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Network Support</h1>
      <p>
        Our Network Support services encompass a wide range of solutions to
        ensure the reliability and performance of your network infrastructure.
        We specialize in TCP/IP connections, both local and remote network
        installations, and setting up Virtual Private Networks (VPNs). Our team
        is dedicated to keeping your network running smoothly, whether it&apos;s
        for personal or business use.
      </p>
      <ul>
        <li>Network Security Assessment and Implementation</li>
        <li>Network Troubleshooting and Issue Resolution</li>
        <li>Network Performance Monitoring and Optimization</li>
        <li>Router and Switch Configuration</li>
        <li>Network Documentation and Reporting</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default NetworkSupport;
