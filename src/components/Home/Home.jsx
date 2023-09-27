import './home.css';
import Laptop from '../../assets/Laptop.png';
import Logo from '../../assets/NetsinerjiLogo.png';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div id="home-section" className="home">
      <div className="home-left">
        <div className="img-container">
          <img src={Logo} alt="Netsinerji Logo" />
        </div>
        <h2>
          Elevate Your <span>Digital Potential</span>.
        </h2>
        <p>
          With <span>expert guidance</span> and cutting-edge solutions, we
          <span> empower businesses and individuals</span> to soar beyond their
          <span> digital goals</span>.
        </p>
        <ScrollLink
          to="services-section"
          spy={true}
          smooth={true}
          offset={-65}
          duration={400}
          activeClass="active-item"
          className="get-started-btn"
        >
          <button>Get Started</button>
        </ScrollLink>
      </div>
      <div className="home-right">
        <img src={Laptop} alt="laptop with info" />
      </div>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
    </div>
  );
};

export default Home;
