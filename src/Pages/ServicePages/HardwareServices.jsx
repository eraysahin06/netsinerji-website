import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const HardwareServices = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Hardware Services</h1>
      <p>
        We offer comprehensive hardware services to cater to the diverse needs
        of all our customers. Our expert team is equipped to address any issues
        you may encounter with your computer or server hardware. In addition to
        resolving technical challenges, we also provide tailored training
        programs to empower your employees with the knowledge and skills needed
        to efficiently utilize the hardware essential for your business
        operations.
      </p>
      <ul>
        <li>Initial Setup</li>
        <li>Driver Installation and Update</li>
        <li>User Support</li>
        <li>Troubleshooting</li>
        <li>Coordination and Follow-up with Authorized Services</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default HardwareServices;
