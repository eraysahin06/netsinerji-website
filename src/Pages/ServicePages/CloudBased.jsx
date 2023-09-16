import React from 'react';

import './servicePages.css';
import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const CloudBased = () => {
  const pageTitle = 'Cloud Based File Repositories';
  const pageContent =
    "Cloud-based file repositories offer a secure and efficient solution for storing and collaborating on files within your team. Our experienced team is ready to assist you in the seamless setup and configuration of your cloud-based file repository, ensuring it aligns perfectly with your organization's needs. We also provide ongoing support to your team, ensuring they can make the most of this powerful resource for efficient file management and collaboration.";
  const listItems = [
    'Server and cloud-based application installation and configuration',
    'Dropbox installation & configuration',
    'Google Drive installation & configuration',
    'OneDrive installation & configuration',
    'Installation and configuration of open-source applications (NextCloud, SeaFile, OwnCloud, etc.)',
    'User training',
    'Troubleshooting',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default CloudBased;
