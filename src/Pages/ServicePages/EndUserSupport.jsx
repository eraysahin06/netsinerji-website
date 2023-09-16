
import './servicePages.css';
import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const EndUserSupport = () => {
  const pageTitle = 'End User Support';
  const pageContent =
    'We offer comprehensive end user support services tailored to both individuals and your entire workforce. Our dedicated team is readily available to assist with any computer or software-related issues your employees may encounter. Additionally, we provide customized training programs to empower your workforce in effectively utilizing the software applications crucial for your business operations.';
  const listItems = [
    'Operating system-based (Windows XP-Windows 11)',
    'Initial setup',
    'Image and backup',
    'Update and upgrade management',
    'Configuration management',
    'Basic and advanced troubleshooting',
    'Microsoft Office installation and configuration (Outlook, Word, Excel, Access, Powerpoint)',
    'Microsoft Office basic and advanced usage support',
    'OpenOffice & LibreOffice installation',
    'Installation and configuration of other popular applications',
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

export default EndUserSupport;
