import SolutionCard from './SolutionCard/SolutionCard';
import './solutions.css';
import solutionsData from './solutionsData';
{
  /* ICONS */
}
import { MdAccountBalanceWallet, MdHomeRepairService } from 'react-icons/md';
import {
  BsFillCreditCard2BackFill,
  BsTelegram,
  BsFillDatabaseFill,
} from 'react-icons/bs';
import { GiGoldBar } from 'react-icons/gi';
import { AiFillPrinter, AiFillFilePdf } from 'react-icons/ai';

const solutionObjects = [
  {
    icon: <MdAccountBalanceWallet className="solution-icon" />,
    name: 'Pre-Accounting',
    route: solutionsData.navigate.preAccounting,
  },
  {
    icon: <BsFillCreditCard2BackFill className="solution-icon" />,
    name: 'Sales & Offers',
    route: solutionsData.navigate.salesOffers,
  },
  {
    icon: <GiGoldBar className="solution-icon" />,
    name: 'Value Management',
    route: solutionsData.navigate.valueManagement,
  },
  {
    icon: <MdHomeRepairService className="solution-icon" />,
    name: 'Technical Service Management',
    route: solutionsData.navigate.technicalService,
  },
  {
    icon: <AiFillPrinter className="solution-icon" />,
    name: 'Remote-Print Assistant',
    route: solutionsData.navigate.remotePrint,
  },
  {
    icon: <AiFillFilePdf className="solution-icon" />,
    name: 'Web-Based PDF Server',
    route: solutionsData.navigate.webBasedPDF,
  },
  {
    icon: <BsTelegram className="solution-icon" />,
    name: 'Telegram Bots',
    route: solutionsData.navigate.telegramBots,
  },
  {
    icon: <BsFillDatabaseFill className="solution-icon" />,
    name: 'Database - Folder Backup',
    route: solutionsData.navigate.databaseFolder,
  },
];

const Solutions = () => {
  return (
    <div id="solutions-section" className="solutions">
      <h1 className="top-text">Our Software Solutions</h1>
      <div className="solution-cards">
        {solutionObjects.map((solution, index) => (
          <SolutionCard
            key={index}
            icon={solution.icon}
            name={solution.name}
            route={solution.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
