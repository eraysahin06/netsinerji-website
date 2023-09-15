import { useState } from 'react';
import './contactUs.css';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-section" className="contact-us">
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
