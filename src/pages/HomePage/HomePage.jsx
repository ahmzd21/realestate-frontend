// src/pages/HomePage/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import AgentSpotlight from '../../components/AgentSpotlight/AgentSpotlight';

function HomePage() {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Properties
        const propertiesRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/properties`);
        setProperties(propertiesRes.data);

        // Fetch Agents
        const agentsRes = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/agents`);
        setAgents(agentsRes.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (properties.length === 0 && agents.length === 0) return <p>No data available. Please add some properties/agents via the backend API.</p>;


  return (
    <div className="home-page">
      <HeaderSlider />
      <FeaturedProperties properties={properties} />
      <HowItWorks />
      <AgentSpotlight agents={agents} />
    </div>
  );
}

export default HomePage;