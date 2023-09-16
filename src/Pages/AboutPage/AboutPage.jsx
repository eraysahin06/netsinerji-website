import React from 'react';

import './aboutPage.css'; // Import your CSS file
import NetsinerjiLogo from '../../assets/NetsinerjiLogo.png';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AboutPage = () => {
  const navigate = useNavigate();

  // Function to go back
  const goBack = () => {
    navigate(-1);
  };

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="logo-container">
        <img
          src={NetsinerjiLogo}
          alt="Netsinerji Logo"
          className="company-logo"
        />
      </div>
      <div className="back-link">
        <button onClick={goBack} className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </div>
      <h1>About the Company</h1>
      <p>
        Our company has been providing services in the field of information
        technology since 2001, initially in Istanbul and later in Ankara, under
        different titles and in various locations, serving various sectors.
      </p>
      <p>
        Our current official title, &quot;Netsinerji Information Technology Eng.
        Ind. and Trade Ltd. Sti.&quot;, has been registered with the Ankara
        Gölbaşı tax office since 2016.
      </p>
      <p>
        We have experience in areas such as hardware, custom software
        development, user support, and system support. Since 2017, we have
        primarily been providing user support, system support, and custom
        software support to a large organization&apos;s country office and
        emergency office located in Ankara, which is affiliated with the United
        Nations. (Due to legal requirements mentioned in the contract, the
        organization&apos;s name cannot be specified as an advertising or
        promotional tool).
      </p>
    </div>
  );
};

export default AboutPage;
