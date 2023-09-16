import React from 'react';

import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const RemotePrintAssistant = () => {
  // Page title (Updated)
  const pageTitle = 'Remote Print Assistant';

  // Page content (Updated)
  const pageContent =
    "Our Remote Print Assistant service enables seamless printing from anywhere, allowing you to print documents and materials remotely with ease. Whether you're working from home, a coffee shop, or across the globe, our solution simplifies the printing process. Say goodbye to traditional printing hassles and enjoy the convenience of remote printing.";

  // List of items (Updated)
  const listItems = [
    'Print documents from any location',
    'Support for various file formats and printers',
    'Secure and encrypted printing for data protection',
    'Print job management and tracking',
    '24/7 technical support for printing issues',
    'Environmentally friendly printing options',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default RemotePrintAssistant;
