
import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const ITSupport = () => {
  const pageTitle = 'IT Support';
  const pageContent =
    'We provide comprehensive IT support services and infrastructure management solutions for all our valued customers. Our team is dedicated to ensuring the smooth operation of your IT environment, from initial setup and maintenance to troubleshooting and beyond. With a commitment to excellence, we are here to meet your IT needs and help your organization thrive.';
  const listItems = [
    'Infrastructure Change and Upgrade',
    'Transition to Cloud and Similar Applications',
    'Infrastructure Preparation for Remote Staff Work',
    'Application Development and Cross-Application Integration',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default ITSupport;
