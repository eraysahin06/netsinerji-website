import { Link } from 'react-router-dom';
import './serviceCard.css';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, title, listItems, route }) => {
  return (
    <div className="service-card">
      <div className="service-left">
        <img src={image} alt="service photo" loading="lazy" />
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
        <Link to={route}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  listItems: PropTypes.array.isRequired,
  route: PropTypes.string.isRequired,
};

export default ServiceCard;
