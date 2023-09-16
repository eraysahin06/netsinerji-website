
import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const NetworkSupport = () => {
  const pageTitle = 'Network Support';
  const pageContent =
    "Our Network Support services encompass a wide range of solutions to ensure the reliability and performance of your network infrastructure. We specialize in TCP/IP connections, both local and remote network installations, and setting up Virtual Private Networks (VPNs). Our team is dedicated to keeping your network running smoothly, whether it's for personal or business use.";
  const listItems = [
    'Network Security Assessment and Implementation',
    'Network Troubleshooting and Issue Resolution',
    'Network Performance Monitoring and Optimization',
    'Router and Switch Configuration',
    'Network Documentation and Reporting',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default NetworkSupport;
