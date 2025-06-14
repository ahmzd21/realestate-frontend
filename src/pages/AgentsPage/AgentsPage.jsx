// src/pages/AgentsPage/AgentsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
// import agentsData from '../../data/agents'; // REMOVE THIS LINE - no longer needed
// import PropertyCard from '../../components/PropertyCard/PropertyCard'; // Not used in this version
import AgentCard from '../../components/AgentCard/AgentCard'; // Import AgentCard
import './AgentsPage.css'; // Import the CSS for this page

function AgentsPage() {
  const [agents, setAgents] = useState([]); // State to store all agents fetched from API
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null);   // New error state

  // Effect to fetch all agents from the API on component mount
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/agents`);
        setAgents(response.data); // Set all agents from API
        setLoading(false);
      } catch (err) {
        console.error('Error fetching agents:', err);
        setError('Failed to load agents. Please try again later.');
        setLoading(false);
      }
    };
    fetchAgents();
  }, []); // Empty dependency array means this runs once on mount

  // Effect to filter agents whenever 'agents' (fetched data) or 'searchTerm' changes
  useEffect(() => {
    let currentAgents = [...agents]; // Start with the full list of agents from API

    // Apply filtering based on search term
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = currentAgents.filter(agent =>
      (agent.name && agent.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (agent.title && agent.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (agent.tagline && agent.tagline.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (agent.bio && agent.bio.toLowerCase().includes(lowerCaseSearchTerm))
    );
    setFilteredAgents(results);
  }, [agents, searchTerm]); // Depend on 'agents' (the full list) and 'searchTerm'

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p className="loading-message">Loading agents...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (agents.length === 0 && !loading && !error) return <p className="no-results">No agents available. Please add some via the backend API.</p>;


  return (
    <div className="agents-page">
      <div className="container">
        <h1>Meet Our Expert Agents</h1>

        <div className="agent-search-bar">
          <input
            type="text"
            placeholder="Search agents by name or specialty..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="agent-grid">
          {filteredAgents.length > 0 ? (
            filteredAgents.map(agent => (
              <AgentCard key={agent._id || agent.id} agent={agent} /> // Use _id or id for key
            ))
          ) : (
            <p className="no-results">No agents found matching your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;