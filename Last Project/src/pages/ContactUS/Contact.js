import React from 'react';
import './Contact.css'; // Import custom CSS for additional styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-main-heading">Contact Us</h1>
      <div className="contact-info">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-description">
          We would love to hear from you! Whether you have a question about
          our products or services, need support, or just want to say hello,
          feel free to reach out.
        </p>
        <ul className="contact-details">
          <li><i className="fas fa-map-marker-alt"></i> 1234 Lahore, Pakistan</li>
          <li><i className="fas fa-phone-alt"></i>+92 318 6898684</li>
          <li><i className="fas fa-envelope"></i> shaheryarnoor36@gmail.com</li>
        </ul>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">Email address</label>
            <input type="email" id="formEmail" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="formMessage">Message</label>
            <textarea id="formMessage" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
