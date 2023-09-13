import SolutionCard from './SolutionCard/SolutionCard';
import './solutions.css';
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

const Solutions = () => {
  return (
    <div className="solutions">
      <h1 className="top-text">Our Software Solutions</h1>
      <div className="solution-cards">
        <SolutionCard
          icon={<MdAccountBalanceWallet className="solution-icon" />}
          name={'Pre-Accounting'}
        />
        <SolutionCard
          icon={<BsFillCreditCard2BackFill className="solution-icon" />}
          name={'Sales & Offers'}
        />
        <SolutionCard
          icon={<GiGoldBar className="solution-icon" />}
          name={'Value Management'}
        />
        <SolutionCard
          icon={<MdHomeRepairService className="solution-icon" />}
          name={'Technical Service Management'}
        />
        <SolutionCard
          icon={<AiFillPrinter className="solution-icon" />}
          name={'Remote-Print Assistant'}
        />
        <SolutionCard
          icon={<AiFillFilePdf className="solution-icon" />}
          name={'Web-Based PDF Server'}
        />
        <SolutionCard
          icon={<BsTelegram className="solution-icon" />}
          name={'Telegram Bots'}
        />
        <SolutionCard
          icon={<BsFillDatabaseFill className="solution-icon" />}
          name={'Database - Folder Backup'}
        />
      </div>
    </div>
  );
};

export default Solutions;
