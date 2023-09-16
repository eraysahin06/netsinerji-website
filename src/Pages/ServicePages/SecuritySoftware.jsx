import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const SecuritySoftware = () => {
  const pageTitle = 'Security Software';
  const pageContent =
    'Our Security Software services encompass comprehensive solutions to safeguard your digital environment. We specialize in firewall installation and configuration, antivirus and anti-malware setup, update and licensing management, as well as advanced troubleshooting to ensure your systems remain secure. Trust us to protect your digital assets with the latest security technologies and practices.';
  const listItems = [
    'Security Firewall Installation and Management',
    'Installation of Server and User-Based Security Software, including Antivirus and Anti-malware',
    'Advanced Setup and Configuration Options',
    'Update and Licensing Monitoring',
    'Troubleshooting and Issue Resolution',
    'Security Patch Management',
    'Intrusion Detection and Prevention',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default SecuritySoftware;
