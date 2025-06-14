// src/pages/BuyPage/BuyPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import PropertyFilter from '../../components/PropertyFilter/PropertyFilter';
import './BuyPage.css';

function BuyPage() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: [0, 1000000000],
    bedrooms: '',
    bathrooms: '',
    status: 'For Sale'
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/properties`);
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties.');
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    let currentProperties = [...properties];

    if (filters.type) {
      currentProperties = currentProperties.filter(p => p.propertyType === filters.type); // Changed p.type to p.propertyType based on your JSON
    }
    if (filters.location) {
      // Assuming 'address' or 'city' for location. Let's use city for now.
      currentProperties = currentProperties.filter(p => p.city.toLowerCase().includes(filters.location.toLowerCase()));
    }
    currentProperties = currentProperties.filter(p =>
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    if (filters.bedrooms) {
      currentProperties = currentProperties.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }
    if (filters.bathrooms) {
      currentProperties = currentProperties.filter(p => p.bathrooms >= parseInt(filters.bathrooms));
    }
    currentProperties = currentProperties.filter(p => p.status === 'For Sale');

    setFilteredProperties(currentProperties);
  }, [properties, filters]);


  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p className="error-message">{error}</p>;
  // Check filteredProperties length for no results, not initial properties array
  if (properties.length === 0) return <p>No properties available for sale. Please add some.</p>;


  return (
    <div className="buy-page">
      <div className="container">
        <h1>Properties For Sale</h1>
        <PropertyFilter filters={filters} onFilterChange={handleFilterChange} showStatusFilter={false} />
        <div className="property-list">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              // CHANGE THIS LINE: Use property._id for the key
              <PropertyCard key={property._id} property={property} />
            ))
          ) : (
            <p>No properties found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyPage;