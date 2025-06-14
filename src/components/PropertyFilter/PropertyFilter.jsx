// src/components/PropertyFilter/PropertyFilter.jsx
import React from 'react';
import './PropertyFilter.css'; // Don't forget to create this CSS file

function PropertyFilter({ filters, onFilterChange, showStatusFilter = true }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  const handlePriceRangeChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value) || 0; // Ensure it's a number
    onFilterChange({ priceRange: newPriceRange });
  };

  const handleBedroomsChange = (e) => {
    onFilterChange({ bedrooms: e.target.value });
  };

  const handleBathroomsChange = (e) => {
    onFilterChange({ bathrooms: e.target.value });
  };

  return (
    <div className="property-filter">
      <h3>Filter Properties</h3>
      <div className="filter-group">
        <label htmlFor="type">Property Type:</label>
        <select id="type" name="type" value={filters.type} onChange={handleInputChange}>
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Plot">Plot</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="e.g., Lahore, Islamabad"
        />
      </div>

      <div className="filter-group">
        <label>Price Range:</label>
        <div className="price-inputs">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceRangeChange(e, 0)}
            placeholder="Min Price"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceRangeChange(e, 1)}
            placeholder="Max Price"
          />
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="bedrooms">Bedrooms (Min):</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleBedroomsChange}
          placeholder="Any"
          min="0"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="bathrooms">Bathrooms (Min):</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={filters.bathrooms}
          onChange={handleBathroomsChange}
          placeholder="Any"
          min="0"
        />
      </div>

      {showStatusFilter && (
        <div className="filter-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={filters.status} onChange={handleInputChange}>
            <option value="">All Status</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default PropertyFilter;