import React from 'react';

import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const ValueManagement = () => {
  // Page title (Updated)
  const pageTitle = 'IT Value Management for Companies';

  // Page content (Updated)
  const pageContent =
    'Our IT Value Management service empowers companies to optimize the value they derive from their IT investments. We provide strategic insights and practical solutions to align your IT resources with your business goals. Our expert team helps you make informed decisions, maximize ROI, and drive innovation through effective IT management.';

  // List of items (Updated)
  const listItems = [
    'IT strategy alignment with business objectives',
    'Cost optimization and resource allocation',
    'Performance monitoring and benchmarking',
    'Risk management and compliance',
    'Innovation and technology adoption strategies',
    'IT governance and decision support',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default ValueManagement;
