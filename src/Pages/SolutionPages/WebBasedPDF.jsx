import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const WebBasedPDF = () => {
  // Page title (Updated)
  const pageTitle = 'Web-Based PDF Server';

  // Page content (Updated)
  const pageContent =
    "Our Web-Based PDF Server solution offers a powerful and flexible platform for managing and generating PDF documents online. Whether you need to create, edit, or convert PDFs, our web-based server has the tools you need. It's a reliable and efficient way to handle your PDF document needs.";

  // List of items (Updated)
  const listItems = [
    'PDF document creation and editing',
    'PDF conversion to various formats',
    'Secure document storage and management',
    'Collaboration and sharing features',
    'Customizable PDF templates',
    'User-friendly web interface',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default WebBasedPDF;
