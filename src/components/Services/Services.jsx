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
    list: servicesData.endUserSupport,
  },
  {
    image: Hardware,
    title: 'Hardware Services',
    list: servicesData.hardwareServices,
  },
  {
    image: Mobile,
    title: 'Mobile Support',
    list: servicesData.mobileSupport,
  },
  {
    image: Network,
    title: 'Network Support',
    list: servicesData.networkSupport,
  },
  {
    image: Security,
    title: 'Security Software',
    list: servicesData.securitySoftware,
  },
  {
    image: Maintenance,
    title: 'Maintenance & Backup',
    list: servicesData.maintenanceBackup,
  },
  {
    image: CloudBased,
    title: 'Cloud Based File Repositories',
    list: servicesData.cloudBased,
  },
  {
    image: ITSupport,
    title: 'IT Support',
    list: servicesData.itSupport,
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
            listItems={service.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
