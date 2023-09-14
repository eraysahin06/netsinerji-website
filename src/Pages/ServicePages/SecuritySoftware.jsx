import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const SecuritySoftware = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Security Software</h1>
      <p>
        Our Security Software services encompass comprehensive solutions to
        safeguard your digital environment. We specialize in firewall
        installation and configuration, antivirus and anti-malware setup, update
        and licensing management, as well as advanced troubleshooting to ensure
        your systems remain secure. Trust us to protect your digital assets with
        the latest security technologies and practices.
      </p>

      <ul>
        <li>Security Firewall Installation and Management</li>
        <li>
          Installation of Server and User-Based Security Software, including
          Antivirus and Anti-malware
        </li>
        <li>Advanced Setup and Configuration Options</li>
        <li>Update and Licensing Monitoring</li>
        <li>Troubleshooting and Issue Resolution</li>
        <li>Security Patch Management</li>
        <li>Intrusion Detection and Prevention</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default SecuritySoftware;
