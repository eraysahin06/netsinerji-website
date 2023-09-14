import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const MobileSupport = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Mobile Support</h1>
      <p>
        Mobile Support services are designed to assist you with all aspects of
        mobile technology. We provide assistance with mobile app configuration,
        offer ongoing support for various mobile applications, address
        device-related issues, offer operating system-based support, and provide
        advanced troubleshooting solutions. Our team is here to ensure your
        mobile technology operates seamlessly.
      </p>

      <ul>
        <li>Mobile Device Setup and Management</li>
        <li>Mobile Application Support and Configuration</li>
        <li>Troubleshooting</li>
        <li>Mobile Technology Training</li>
        <li>Mobile Security Solutions</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default MobileSupport;
