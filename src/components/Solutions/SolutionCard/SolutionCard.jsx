import './solutionCard.css';
import PropTypes from 'prop-types';

const SolutionCard = ({ icon, name }) => {
  return (
    <div className="solution-card">
      <div className="solution-left">{icon}</div>
      <div className="solution-right">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

SolutionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired, // Validate that 'icon' is a required prop of type 'node'.
};

export default SolutionCard;
