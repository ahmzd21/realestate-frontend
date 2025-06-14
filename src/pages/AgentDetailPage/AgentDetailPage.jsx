// src/pages/AgentDetailPage/AgentDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get ID from URL
import axios from 'axios'; // Import axios
import './AgentDetailPage.css'; // Assume existing CSS for this page

function AgentDetailPage() {
  const { id } = useParams(); // Get the ID from the URL (e.g., /agents/agent1)
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]); // State to store agent's reviews

  useEffect(() => {
    const fetchAgentAndReviews = async () => {
      try {
        // Fetch Agent Details
        const agentRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/agents/${id}`);
        setAgent(agentRes.data);

        // Fetch Reviews for this agent
        const reviewsRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews/agent/${id}`);
        setReviews(reviewsRes.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching agent details:', err);
        setError('Failed to load agent details. Agent might not exist.');
        setLoading(false);
        setAgent(null); // Ensure agent is null on error
      }
    };

    fetchAgentAndReviews();
  }, [id]); // Re-run effect if ID in URL changes

  if (loading) return <p className="loading-message">Loading agent details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!agent) return <p className="not-found-message">Agent not found.</p>;

  return (
    <div className="agent-detail-page container">
      <div className="agent-header">
        <img src={agent.photo || 'https://via.placeholder.com/200'} alt={agent.name} className="agent-main-photo" />
        <h1>{agent.name}</h1>
        <p className="agent-main-title">{agent.title}</p>
        <p className="agent-main-tagline">{agent.tagline}</p>
      </div>

      <div className="agent-details-content">
        <div className="agent-bio">
          <h3>About {agent.name}</h3>
          <p>{agent.bio}</p>
        </div>

        <div className="agent-contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> <a href={`mailto:${agent.contact.email}`}>{agent.contact.email}</a></p>
          <p><strong>Phone:</strong> {agent.contact.phone}</p>
          {agent.areasServed && agent.areasServed.length > 0 && (
            <p><strong>Areas Served:</strong> {agent.areasServed.join(', ')}</p>
          )}
          {agent.social && (
            <div className="agent-social-links">
              {agent.social.linkedin && <a href={`https://linkedin.com/in/${agent.social.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              {agent.social.facebook && <a href={`https://facebook.com/${agent.social.facebook}`} target="_blank" rel="noopener noreferrer">Facebook</a>}
              {agent.social.instagram && <a href={`https://instagram.com/${agent.social.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>}
            </div>
          )}
        </div>
      </div>

      <div className="agent-reviews-section">
        <h3>Reviews for {agent.name}</h3>
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
          <p>No reviews yet for this agent.</p>
        )}
      </div>

      {/* Add a form for submitting a review later */}
      {/* <div className="add-review-section">
        <h3>Leave a Review</h3>
        {/ * Review form goes here * /}
      </div> */}

    </div>
  );
}

export default AgentDetailPage;