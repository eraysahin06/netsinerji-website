import './serviceCard.css';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, title, listItems }) => {
  return (
    <div className="service-card">
      <div className="service-left">
        <img src={image} alt="service photo" />
      </div>
      <div className="service-right">
        <h2>{title}</h2>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default ServiceCard;
