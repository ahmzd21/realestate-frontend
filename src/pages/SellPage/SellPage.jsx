// src/pages/SellPage/SellPage.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import './SellPage.css'; // Import the CSS for this page

function SellPage() {
  const [formData, setFormData] = useState({
    // --- Property Details (comprehensive for a lead) ---
    title: '',          // New: from AddPropertyPage
    location: '',
    price: '',          // Changed from askingPrice, now number
    bedrooms: '',
    bathrooms: '',
    area: '',           // Keep as string for flexibility (e.g., "10 Marla")
    type: '',           // propertyType in your old SellPage
    image: '',          // New: from AddPropertyPage
    description: '',
    amenities: [],      // New: from AddPropertyPage

    // --- Seller Contact Information ---
    fullName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Any', // New: preferred contact method
    bestTimeToContact: '' // New: best time to contact
  });

  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', 'sending', or ''
  const [formMessage, setFormMessage] = useState(''); // Detailed message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'amenities') {
      setFormData(prevData => ({
        ...prevData,
        amenities: checked
          ? [...prevData.amenities, value]
          : prevData.amenities.filter(amenity => amenity !== value)
      }));
    } else if (name === 'price' || name === 'bedrooms' || name === 'bathrooms') {
        // Convert to number for numerical fields
        setFormData(prevData => ({
            ...prevData,
            [name]: parseFloat(value) || '' // Convert to number or keep empty string if invalid
        }));
    }
    else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending'); // Indicate sending status
    setFormMessage('Submitting your property details...');

    // Basic validation (can be expanded)
    if (!formData.title || !formData.location || !formData.price || !formData.area || !formData.type ||
        !formData.description || !formData.fullName || !formData.email || !formData.phone) {
        setFormStatus('error');
        setFormMessage('Please fill in all required fields.');
        return;
    }

    try {
      // Send data to the new seller inquiries endpoint
      const response = await axios.post('http://localhost:5000/api/seller-inquiries', formData);

      setFormStatus('success');
      setFormMessage('Thank you! Your property details have been submitted. An agent will contact you shortly.');
      console.log('Seller inquiry submitted:', response.data);

      // Clear form upon successful submission
      setFormData({
        title: '',
        location: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        type: '',
        image: '',
        description: '',
        amenities: [],
        fullName: '',
        email: '',
        phone: '',
        preferredContactMethod: 'Any',
        bestTimeToContact: ''
      });

    } catch (error) {
      setFormStatus('error');
      // More detailed error message from backend if available
      const errorMessage = error.response && error.response.data && error.response.data.message
                         ? error.response.data.message
                         : 'There was an error submitting your property. Please try again.';
      setFormMessage(errorMessage);
      console.error('Error submitting seller inquiry:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="sell-page">
      <div className="container">
        <h1>Sell Your Property</h1>
        <p className="section-description">
          Looking to sell your property? Provide us with the details, and our expert agents will get in touch to guide you through the process.
        </p>

        <div className="sell-form-container">
          <h2>Property Details</h2>
          <form onSubmit={handleSubmit} className="sell-property-form">
            {/* Property Details Section */}
            <div className="form-group">
              <label htmlFor="title">Property Title <span className="required">*</span></label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Spacious Family Home"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location / Area <span className="required">*</span></label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., DHA Phase 5, Lahore"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Asking Price (PKR) <span className="required">*</span></label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., 50000000"
                required
                min="0"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="0"
                  placeholder="e.g., 3"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  min="0"
                  placeholder="e.g., 2"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="area">Area (Sq. Ft. or Marla/Kanal) <span className="required">*</span></label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g., 2500 Sq. Ft. or 10 Marla"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Property Type <span className="required">*</span></label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
                <option value="Farmhouse">Farmhouse</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="e.g., https://example.com/property.jpg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Property Description <span className="required">*</span></label>
              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of your property, its features, and any unique selling points."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Amenities:</label>
              <div className="amenities-checkboxes">
                {['Swimming Pool', 'Gym', 'Parking', 'Garden', 'Balcony', 'Security', 'AC', 'Heating'].map(amenity => (
                  <label key={amenity}>
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onChange={handleChange}
                    /> {amenity}
                  </label>
                ))}
              </div>
            </div>

            <h2>Your Contact Information</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name <span className="required">*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
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
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +923XXYYYYYYY"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredContactMethod">Preferred Contact Method</label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleChange}
              >
                <option value="Any">Any</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="bestTimeToContact">Best Time to Contact</label>
              <input
                type="text"
                id="bestTimeToContact"
                name="bestTimeToContact"
                value={formData.bestTimeToContact}
                onChange={handleChange}
                placeholder="e.g., Weekday afternoons"
              />
            </div>
            
            <p className="required-note">Fields marked with <span className="required">*</span> are required.</p>

            <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Submitting...' : 'Submit Property for Sale'}
            </button>

            {formStatus && (
              <p className={`form-feedback ${formStatus === 'success' ? 'success-message' : 'error-message'}`}>
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellPage;