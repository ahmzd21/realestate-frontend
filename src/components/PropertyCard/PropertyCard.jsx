// src/components/PropertyCard/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css'; // Make sure this path is correct

function PropertyCard({ property }) {
  if (!property) {
    return null;
  }

  const propertyLink = `/properties/${property._id}`;// || property.id}`;

  return (
    <div className="property-card">
      <Link to={propertyLink}>
        {/* Corrected class name: property-image -> property-card-image */}
        <img src={property.photo} alt={property.title} className="property-card-image" />
      </Link>
      {/* Corrected class name: property-info -> property-card-content */}
      <div className="property-card-content">
        <Link to={propertyLink}>
          {/* Corrected class name: property-title -> property-card-name */}
          <h3 className="property-card-name">{property.title}</h3>
        </Link>
        {/* Corrected class name: property-location -> property-card-location */}
        <p className="property-card-location">{property.location}</p>
        {/* Corrected class name: property-price -> property-card-price */}
        <p className="property-card-price">PKR {property.price.toLocaleString()}</p>
        {/* Corrected class name: property-specs -> property-card-details */}
        <div className="property-card-details">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} sqft</span>
        </div>
        {/* Class name for status remains as property-status, we'll add CSS for it */}
        <p className="property-status">{property.status}</p>
        {/* Corrected class name: btn-view-details -> property-card-button */}
        <Link to={propertyLink} className="property-card-button">View Details</Link>
      </div>
    </div>
  );
}

export default PropertyCard;