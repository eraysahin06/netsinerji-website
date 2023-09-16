import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const DatabaseFolder = () => {
  // Page title
  const pageTitle = 'Database - Folder Backup';

  // Page content
  const pageContent =
    'Our Database - Folder Backup service offers a comprehensive solution for safeguarding your critical data. We provide robust backup and recovery options tailored to your database and file storage needs. Our team ensures the security and integrity of your data, giving you peace of mind.';

  // List of items (Updated)
  const listItems = [
    'Automatic database backups with customizable schedules',
    'Secure storage of backup files in multiple locations',
    'Point-in-time recovery for databases',
    'Regular monitoring and maintenance of backup processes',
    'Comprehensive data encryption for enhanced security',
    '24/7 support and assistance with data recovery',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default DatabaseFolder;
