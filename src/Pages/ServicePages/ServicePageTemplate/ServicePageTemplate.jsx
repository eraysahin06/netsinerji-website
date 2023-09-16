import React from 'react';

import '../servicePages.css';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServicePageTemplate = ({ pageTitle, pageContent, listItems }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  // Function to go back
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="service-page">
      <div className="back-link">
        <button onClick={goBack} className="back-btn">
          <BiArrowBack className="back-arrow" /> <span> Back</span>
        </button>
      </div>
      <h1>{pageTitle}</h1>
      <p>{pageContent}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="background-shape"></div>
      <div className="background-shape2"></div>
      <div className="background-shape3"></div>
      <h3>Interested?</h3>
      <button onClick={handleClick} className="interested-contact-btn">
        Contact Us
      </button>
    </div>
  );
};

ServicePageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageContent: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default ServicePageTemplate;
