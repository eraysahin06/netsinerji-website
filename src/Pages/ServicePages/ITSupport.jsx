import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const ITSupport = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>IT Support</h1>
      <p>
        We provide comprehensive IT support services and infrastructure
        management solutions for all our valued customers. Our team is dedicated
        to ensuring the smooth operation of your IT environment, from initial
        setup and maintenance to troubleshooting and beyond. With a commitment
        to excellence, we are here to meet your IT needs and help your
        organization thrive.
      </p>
      <ul>
        <li>Infrastructure Change and Upgrade</li>
        <li>Transition to Cloud and Similar Applications</li>
        <li>Infrastructure Preparation for Remote Staff Work</li>
        <li>Application Development and Cross-Application Integration</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default ITSupport;
