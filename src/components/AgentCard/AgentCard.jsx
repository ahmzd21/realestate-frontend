// src/components/AgentCard/AgentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link
import './AgentCard.css'; // Import the CSS for this component

function AgentCard({ agent }) {
  if (!agent) {
    return null; // Or some placeholder if agent is not defined
  }

  // Use agent._id for the Link to the detail page.
  // agent.id is a fallback for data that might still use it from initial seeding.
  const agentLink = `/agents/${agent._id || agent.id}`;

  return (
    <div className="agent-card">
      <Link to={agentLink}> {/* Use Link for navigation */}
        <img
          src={agent.photo || 'https://via.placeholder.com/150'} // Added fallback for photo
          alt={agent.name}
          className="agent-card-photo"
        />
      </Link>
      <div className="agent-card-content">
        <Link to={agentLink}> {/* Link the name as well */}
          <h3 className="agent-card-name">{agent.name}</h3>
        </Link>
        <p className="agent-card-title">{agent.title}</p>
        <p className="agent-card-tagline">{agent.tagline}</p>
        {/* Link to the specific agent detail page */}
        <Link to={agentLink} className="agent-card-button">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default AgentCard;