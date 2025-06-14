// src/pages/RentPage/RentPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import PropertyFilter from '../../components/PropertyFilter/PropertyFilter';
import './RentPage.css'; // Assume this CSS is for layout

function RentPage() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: [0, 1000000], // Adjust max price for rent if needed
    bedrooms: '',
    bathrooms: '',
    status: 'For Rent' // Default to For Rent
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
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

    // Apply filters
    if (filters.type) {
      currentProperties = currentProperties.filter(p => p.type === filters.type);
    }
    if (filters.location) {
      currentProperties = currentProperties.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
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
    // Always filter by status 'For Rent' for RentPage
    currentProperties = currentProperties.filter(p => p.status === 'For Rent');

    setFilteredProperties(currentProperties);
  }, [properties, filters]);


  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (properties.length === 0) return <p>No properties available for rent. Please add some.</p>;

  return (
    <div className="rent-page">
      <div className="container">
        <h1>Properties For Rent</h1>
        <PropertyFilter filters={filters} onFilterChange={handleFilterChange} showStatusFilter={false} /> {/* Hide status filter for RentPage */}
        <div className="property-list">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RentPage;