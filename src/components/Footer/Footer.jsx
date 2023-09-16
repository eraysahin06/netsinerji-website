import './footer.css';
import NetsinerjiLogo from '../../assets/NetsinerjiLogo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <a href="/">
            <img src={NetsinerjiLogo} alt="netsinerji logo" />
          </a>
          <a href="/">
            <h1>Netsinerji</h1>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <p>
          Do you want to learn more about our innovative products or software
          solutions? Feel free to get in touch with us! We&apos;d love to hear
          from you and provide you with all the information you need.
        </p>
        <button onClick={handleClick} className="interested-contact-btn">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Footer;
