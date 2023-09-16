import React from 'react';

import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const PreAccounting = () => {
  // Page title
  const pageTitle = 'Pre-Accounting';

  // Page content (Updated)
  const pageContent =
    "Our Pre-Accounting service streamlines your financial processes, making it easier to manage your company's finances. From data entry to preparing financial statements, we have you covered. Our team of experts ensures accuracy and compliance, allowing you to focus on growing your business.";

  // List of items (Updated)
  const listItems = [
    'Efficient data entry and organization',
    'Accurate financial statement preparation',
    'Customized financial reports and analysis',
    'Tax compliance and reporting',
    'Payroll processing and management',
    'Financial advisory and consulting services',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default PreAccounting;
