import './home.css';
import Laptop from '../../assets/Laptop2.png';
import Typist from 'react-typist';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <Typist
          avgTypingDelay={40}
          startDelay={500}
          cursor={{
            show: true,
            blink: false,
            element: '',
          }}
        >
          <h2>
            Elevate Your <span>Digital Potential</span>.
          </h2>
        </Typist>
        <p>
          With <span>expert guidance</span> and cutting-edge solutions, we
          <span> empower businesses and individuals</span> to soar beyond their
          <span> digital goals</span>.
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
