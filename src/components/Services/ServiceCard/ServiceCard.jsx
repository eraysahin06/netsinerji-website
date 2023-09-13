import './serviceCard.css';
import EndUser from '../../../assets/Service Cards/EndUser.jpg';

const ServiceCard = () => {
  return (
    <div className="service-card">
      <div className="service-left">
        <img src={EndUser} alt="a laptop and a coffee on a table" />
      </div>
      <div className="service-right">
        <h2>End User Support</h2>
        <ul>
          <li>
            <p>Advanced Problem Solving</p>
          </li>
          <li>
            <p>Configuration Management</p>
          </li>
          <li>
            <p>Update & Upgrade Management</p>
          </li>
          <li>
            <p>OS Based Support</p>
          </li>
          <li>
            <p>Advanced Troubleshooting</p>
          </li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCard;
