import { useState } from 'react';
import './contactUs.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Function to go back
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div id="contact-section" className="contact-us">
      {location.pathname === '/contact' && ( // Check if the current route is /contact
        <div onClick={goBack} className="back-link">
          <button className="back-btn">
            <BiArrowBack className="back-arrow" /> <span> Back</span>
          </button>
        </div>
      )}
      <h1 className="top-text">Contact Us</h1>
      {submitted ? (
        <p className="thank-you-message">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-elements">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="E-mail" name="email" required />
            <textarea
              required
              placeholder="Message"
              name="message"
              rows="10"
            ></textarea>
            <button className="send-message-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
