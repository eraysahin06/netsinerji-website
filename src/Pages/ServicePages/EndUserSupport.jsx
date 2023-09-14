import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const EndUserSupport = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>End User Support</h1>
      <p>
        We offer comprehensive end user support services tailored to both
        individuals and your entire workforce. Our dedicated team is readily
        available to assist with any computer or software-related issues your
        employees may encounter. Additionally, we provide customized training
        programs to empower your workforce in effectively utilizing the software
        applications crucial for your business operations.
      </p>

      <ul>
        <li>Operating system-based (Windows XP-Windows 11)</li>
        <li>Initial setup</li>
        <li>Image and backup</li>
        <li>Update and upgrade management</li>
        <li>Configuration management</li>
        <li>Basic and advanced troubleshooting</li>
        <h3>Microsoft Office and other commonly used desktop applications</h3>
        <li>
          Microsoft Office installation and configuration (Outlook, Word, Excel,
          Access, Powerpoint)
        </li>
        <li>Microsoft Office basic and advanced usage support</li>
        <li>OpenOffice & LibreOffice installation</li>
        <li>Installation and configuration of other popular applications</li>
        <li>Troubleshooting</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default EndUserSupport;
