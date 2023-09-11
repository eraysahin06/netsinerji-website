import './home.css';
import Laptop from '../../assets/Laptop.png';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h2>Elevate Your Digital Potential.</h2>
        <p>
          With expert guidance and cutting-edge solutions, we empower businesses
          and individuals to soar beyond their digital goals.
        </p>
        <button>Get Started</button>
      </div>
      <div className="home-right">
        <img src={Laptop} alt="laptop with info" />
      </div>
    </div>
  );
};

export default Home;
