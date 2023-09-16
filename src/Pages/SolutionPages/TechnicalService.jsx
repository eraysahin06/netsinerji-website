import React from 'react';

import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const TechnicalService = () => {
  // Page title (Updated)
  const pageTitle = 'Technical Service Management';

  // Page content (Updated)
  const pageContent =
    "Our Technical Service Management offers comprehensive solutions to streamline your technical operations. Whether you're managing IT infrastructure, software development, or technical support, our services ensure efficient and effective technical operations. We provide expertise, tools, and support to optimize your technical processes.";

  // List of items (Updated)
  const listItems = [
    'IT infrastructure management and optimization',
    'Software development and lifecycle management',
    'Technical support and helpdesk solutions',
    'IT project management and consulting',
    'Security and compliance assessments',
    'Customized technical solutions for your business',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default TechnicalService;
