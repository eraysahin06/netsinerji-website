import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const MobileSupport = () => {
  const pageTitle = 'Mobile Support';
  const pageContent =
    'Mobile Support services are designed to assist you with all aspects of mobile technology. We provide assistance with mobile app configuration, offer ongoing support for various mobile applications, address device-related issues, offer operating system-based support, and provide advanced troubleshooting solutions. Our team is here to ensure your mobile technology operates seamlessly.';
  const listItems = [
    'Mobile Device Setup and Management',
    'Mobile Application Support and Configuration',
    'Troubleshooting',
    'Mobile Technology Training',
    'Mobile Security Solutions',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default MobileSupport;
