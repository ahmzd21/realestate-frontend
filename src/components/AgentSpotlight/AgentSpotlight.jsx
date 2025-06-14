// src/components/AgentSpotlight/AgentSpotlight.jsx
import React from 'react';
import './AgentSpotlight.css'; // Don't forget to create this CSS file
// You might want to import AgentCard or similar component here if you have one

function AgentSpotlight({ agents }) {
  // In a real application, you might filter for agents specifically marked for spotlight
  // For now, we'll just show the first few agents passed down.
  const agentsToShow = agents.slice(0, 3); // Displaying up to 3 agents

  if (!agentsToShow || agentsToShow.length === 0) {
    return (
      <div className="agent-spotlight container">
        <h2>Our Top Agents</h2>
        <p>No agents available to highlight at the moment. Add some agents via the backend API.</p>
      </div>
    );
  }

  return (
    <section className="agent-spotlight container">
      <h2>Our Top Agents</h2>
      <div className="agent-grid">
        {agentsToShow.map(agent => (
          <div className="agent-card" key={agent.id || agent._id}> {/* Use id or _id for key */}
            <img src={agent.photo || 'https://via.placeholder.com/150'} alt={agent.name} className="agent-photo" />
            <h3>{agent.name}</h3>
            <p className="agent-title">{agent.title}</p>
            <p className="agent-tagline">{agent.tagline}</p>
            {/* You can add more agent details here, e.g., contact info, link to agent profile */}
            <a href={`/agents/${agent.id || agent._id}`} className="btn-view-profile">View Profile</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgentSpotlight;