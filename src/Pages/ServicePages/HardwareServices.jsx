import React from 'react';

import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const HardwareServices = () => {
  const pageTitle = 'Hardware Services';
  const pageContent =
    'We offer comprehensive hardware services to cater to the diverse needs of all our customers. Our expert team is equipped to address any issues you may encounter with your computer or server hardware. In addition to resolving technical challenges, we also provide tailored training programs to empower your employees with the knowledge and skills needed to efficiently utilize the hardware essential for your business operations.';
  const listItems = [
    'Initial Setup',
    'Driver Installation and Update',
    'User Support',
    'Troubleshooting',
    'Coordination and Follow-up with Authorized Services',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default HardwareServices;
