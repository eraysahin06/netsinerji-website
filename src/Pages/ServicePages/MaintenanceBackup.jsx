import { Link } from 'react-router-dom';
import './servicePages.css';
import { BiArrowBack } from 'react-icons/bi';

const MaintenanceBackup = () => {
  return (
    <div className="service-page">
      <Link className="back-link" to="/">
        <button className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </Link>
      <h1>Maintenance & Backup</h1>
      <p>
        Maintenance & Backup services encompass a range of critical activities
        to ensure the reliability and security of your IT infrastructure. These
        services include periodic and on-demand hardware maintenance, both
        periodic and non-periodic imaging, installation of server-based backup
        tools, setup of personal computer backup solutions, versatile backup
        options to local disk, shared storage, and cloud, as well as diligent
        monitoring and reporting of backup status.
      </p>

      <ul>
        <li>Periodic and On-Demand Hardware Maintenance</li>
        <li>Periodic and Non-Periodic Imaging</li>
        <li>Installation of Server-Based Backup Tools</li>
        <li>Installation of Personal Computer Backup Tools</li>
        <li>Backup to Local Disk, Shared Storage, and Cloud</li>
        <li>Backup Status Monitoring and Reporting</li>
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button className="interested-contact-btn">Contact Us</button>
    </div>
  );
};

export default MaintenanceBackup;
