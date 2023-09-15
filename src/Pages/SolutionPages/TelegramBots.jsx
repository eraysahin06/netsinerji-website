import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const TelegramBots = () => {
  // Page title (Updated)
  const pageTitle = 'Telegram Bots';

  // Page content (Updated)
  const pageContent =
    "Our Telegram Bots service provides customized automation solutions for your Telegram messaging needs. Whether you want to automate responses, notifications, or other tasks on Telegram, we've got you covered. Our team of experts will create and deploy Telegram bots tailored to your requirements.";

  // List of items (Updated)
  const listItems = [
    'Custom Telegram bot development',
    'Automation of messages and notifications',
    'Integration with external services and APIs',
    'User engagement and interaction features',
    '24/7 bot monitoring and support',
    'Regular updates and improvements',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default TelegramBots;
