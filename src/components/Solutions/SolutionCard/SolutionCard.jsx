import './solutionCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SolutionCard = ({ icon, name, route }) => {
  return (
    <Link to={route} className="solution-link">
      <div className="solution-card">
        <div className="solution-left">{icon}</div>
        <div className="solution-right">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

SolutionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  route: PropTypes.node.isRequired,
};

export default SolutionCard;
