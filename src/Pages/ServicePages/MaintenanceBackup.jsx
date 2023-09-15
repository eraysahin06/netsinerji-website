import ServicePageTemplate from './ServicePageTemplate/ServicePageTemplate';

const MaintenanceBackup = () => {
  const pageTitle = 'Maintenance & Backup';
  const pageContent =
    'Maintenance & Backup services encompass a range of critical activities to ensure the reliability and security of your IT infrastructure. These services include periodic and on-demand hardware maintenance, both periodic and non-periodic imaging, installation of server-based backup tools, setup of personal computer backup solutions, versatile backup options to local disk, shared storage, and cloud, as well as diligent monitoring and reporting of backup status.';
  const listItems = [
    'Periodic and On-Demand Hardware Maintenance',
    'Periodic and Non-Periodic Imaging',
    'Installation of Server-Based Backup Tools',
    'Installation of Personal Computer Backup Tools',
    'Backup to Local Disk, Shared Storage, and Cloud',
    'Backup Status Monitoring and Reporting',
  ];

  return (
    <ServicePageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default MaintenanceBackup;
