// src/pages/ContactPage/ContactPage.jsx
import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS for this page

function ContactPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission feedback
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', 'error', or ''
  const [errorMessage, setErrorMessage] = useState(''); // To store specific error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();
    setFormStatus('sending'); // Indicate sending status
    setErrorMessage(''); // Clear any previous error messages

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      const data = await response.json(); // Parse the JSON response from the backend

      if (response.ok) { // Check if the response status is 2xx
        setFormStatus('success');
        setErrorMessage(''); // Clear any error message on success
        // Optionally clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Handle backend errors (e.g., validation errors)
        setFormStatus('error');
        setErrorMessage(data.message || 'Failed to send message.'); // Use backend message or a generic one
        console.error('Backend error:', data.message);
      }

    } catch (error) {
      // Handle network errors or other unexpected issues
      setFormStatus('error');
      setErrorMessage('Network error. Please try again.');
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="section-description">We'd love to hear from you! Please fill out the form below or use our direct contact information.</p>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  // Removed 'required' as per schema, but you can add it back if always needed
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="form-feedback success-message">Your message has been sent successfully! We will get back to you shortly.</p>
              )}
              {formStatus === 'error' && (
                <p className="form-feedback error-message">{errorMessage || 'There was an error sending your message. Please try again later.'}</p>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Our Contact Details</h2>
            <div className="info-item">
              <p><strong>Address:</strong></p>
              <p>123 Real Estate Avenue</p>
              <p>Sector F-10, Islamabad, 44000</p>
              <p>Pakistan</p>
            </div>
            <div className="info-item">
              <p><strong>Phone:</strong></p>
              <p><a href="tel:+923001234567">+92 300 1234567</a></p>
            </div>
            <div className="info-item">
              <p><strong>Email:</strong></p>
              <p><a href="mailto:info@realestate.pk">info@realestate.pk</a></p>
            </div>
            <div className="info-item">
              <p><strong>Business Hours:</strong></p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;