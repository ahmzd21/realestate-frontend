// src/pages/PropertyDetailPage/PropertyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get ID from URL
import axios from 'axios'; // Import axios
import './PropertyDetailPage.css'; // Assume existing CSS for this page

function PropertyDetailPage() {
  const { id } = useParams(); // Get the ID from the URL (e.g., /properties/prop1)
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [agent, setAgent] = useState(null); // State to store agent details
  const [reviews, setReviews] = useState([]); // State to store reviews

  useEffect(() => {
    const fetchPropertyAndAgent = async () => {
      try {
        // Fetch Property Details
        const propertyRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/properties/${id}`);
        setProperty(propertyRes.data);

        // Fetch Agent Details (based on agentId from the property)
        if (propertyRes.data && propertyRes.data.agentId) {
          const agentRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/agents/${propertyRes.data.agentId}`);
          setAgent(agentRes.data);
        }

        // Fetch Reviews for this property
        const reviewsRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews/property/${id}`);
        setReviews(reviewsRes.data);


        setLoading(false);
      } catch (err) {
        console.error('Error fetching property or agent details:', err);
        setError('Failed to load property details. It might not exist.');
        setLoading(false);
        setProperty(null); // Ensure property is null on error
      }
    };

    fetchPropertyAndAgent();
  }, [id]); // Re-run effect if ID in URL changes

  if (loading) return <p className="loading-message">Loading property details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!property) return <p className="not-found-message">Property not found.</p>; // Show if property is null after loading

  return (
    <div className="property-detail-page container">
      <div className="property-header">
        <h1>{property.title}</h1>
        <p className="property-location">{property.location}</p>
        <p className="property-price">Price: ${property.price.toLocaleString()}</p>
      </div>

      <div className="property-details-grid">
        <div className="property-image">
          <img src={property.photo} alt={property.title} />
        </div>

        <div className="property-info">
          <p><strong>Type:</strong> {property.propertyType}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Area:</strong> {property.area} sqft</p>
          <p><strong>Status:</strong> {property.status}</p>
          <p><strong>Description:</strong> {property.description}</p>

          {property.amenities && property.amenities.length > 0 && (
            <div className="property-amenities">
              <h3>Amenities:</h3>
              <ul>
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {agent && (
        <div className="agent-info-section">
          <h3>Contact Agent:</h3>
          <div className="agent-card-detail">
            <img src={agent.photo || 'https://via.placeholder.com/100'} alt={agent.name} className="agent-detail-photo" />
            <h4>{agent.name}</h4>
            <p>{agent.title}</p>
            <p>Email: <a href={`mailto:${agent.contact.email}`}>{agent.contact.email}</a></p>
            <p>Phone: {agent.contact.phone}</p>
            {/* Add more agent details if needed */}
          </div>
        </div>
      )}

      <div className="property-reviews-section">
        <h3>Reviews for this Property</h3>
        {reviews.length > 0 ? (
          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review._id} className="review-card">
                <p className="review-rating">Rating: {'⭐'.repeat(review.rating)}</p>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">Date: {new Date(review.createdAt).toLocaleDateString()}</p>
                {/* Add reviewer name if client is populated later */}
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet for this property.</p>
        )}
      </div>

      {/* Add a form for submitting a review later */}
      {/* <div className="add-review-section">
        <h3>Add a Review</h3>
        {/ * Review form goes here * /}
      </div> */}

    </div>
  );
}

export default PropertyDetailPage;