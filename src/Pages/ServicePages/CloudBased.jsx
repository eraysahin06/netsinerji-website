import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const CloudBased = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Cloud Based File Repositories</h1>
      <p>
        Cloud-based file repositories offer a secure and efficient solution for
        storing and collaborating on files within your team. Our experienced
        team is ready to assist you in the seamless setup and configuration of
        your cloud-based file repository, ensuring it aligns perfectly with your
        organization&apos;s needs. We also provide ongoing support to your team,
        ensuring they can make the most of this powerful resource for efficient
        file management and collaboration.
      </p>

      <ul>
        <li>
          Server and cloud-based application installation and configuration
        </li>
        <li>Dropbox installation & configuration</li>
        <li>Google Drive installation & configuration</li>
        <li>OneDrive installation & configuration</li>
        <li>
          Installation and configuration of open-source applications (NextCloud,
          SeaFile, OwnCloud, etc.)
        </li>
        <li>User training</li>
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

export default CloudBased;
