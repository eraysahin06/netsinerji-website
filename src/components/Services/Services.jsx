import ServiceCard from './ServiceCard/ServiceCard';
import './services.css';
import servicesData from './servicesData';
{
  /* IMAGE IMPORTS */
}
import EndUser from '../../assets/Service Cards/EndUser.jpg';
import Hardware from '../../assets/Service Cards/Hardware.jpg';
import Mobile from '../../assets/Service Cards/Mobile.jpg';
import Network from '../../assets/Service Cards/Network.jpg';
import Security from '../../assets/Service Cards/Security.jpg';
import Maintenance from '../../assets/Service Cards/MaintenanceBackup.jpg';
import CloudBased from '../../assets/Service Cards/CloudBased.jpg';
import ITSupport from '../../assets/Service Cards/ITSupport.jpg';

const serviceObjects = [
  {
    image: EndUser,
    title: 'End User Support',
  },
  {
    image: Hardware,
    title: 'Hardware Services',
  },
  {
    image: Mobile,
    title: 'Mobile Support',
  },
  {
    image: Network,
    title: 'Network Support',
  },
  {
    image: Security,
    title: 'Security Software',
  },
  {
    image: Maintenance,
    title: 'Maintenance & Backup',
  },
  {
    image: CloudBased,
    title: 'Cloud Based File Repositories',
  },
  {
    image: ITSupport,
    title: 'IT Support',
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1 className="top-text">Explore Our Services</h1>
      <div className="service-cards">
        {/* Map over the serviceObjects array to render ServiceCard components */}
        {serviceObjects.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            listItems={servicesData.endUserSupport}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
