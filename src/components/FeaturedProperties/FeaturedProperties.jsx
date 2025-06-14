// src/components/FeaturedProperties/FeaturedProperties.jsx
import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard'; // Make sure PropertyCard is in 'components/PropertyCard'
import './FeaturedProperties.css'; // Don't forget to create this CSS file

function FeaturedProperties({ properties }) {
  // In a real application, you might filter for properties specifically marked as 'featured'
  // For now, we'll just show the first few properties passed down.
  const propertiesToShow = properties.slice(0, 3); // Displaying up to 3 featured properties

  if (!propertiesToShow || propertiesToShow.length === 0) {
    return (
      <div className="featured-properties container">
        <h2>Featured Properties</h2>
        <p>No featured properties available at the moment. Add some properties to see them here!</p>
      </div>
    );
  }

  return (
    <section className="featured-properties container">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {propertiesToShow.map(property => (
          // Ensure PropertyCard can receive property data and key is unique
          <PropertyCard className="property-card" key={property.id || property._id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;