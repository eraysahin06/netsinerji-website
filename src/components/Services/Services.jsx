import ServiceCard from './ServiceCard/ServiceCard';
import './services.css';

const Services = () => {
  return (
    <div className="services">
      <h1 className="top-text">Explore Our Services</h1>
      <div className="service-cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
