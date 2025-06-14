// src/data/properties.js

const properties = [
  {
    id: 'prop1',
    name: 'Modern Apartment in DHA Phase 2',
    image: 'https://images.unsplash.com/photo-1582268611958-f2ed29f2700e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Spacious 3-bedroom apartment with modern finishes and a beautiful city view. Located in a secure and vibrant community.',
    type: 'Apartment',
    status: 'For Sale',
    price: 'PKR 35,000,000',
    rentPrice: null,
    bedrooms: 3,
    bathrooms: 3,
    area: '2200 sq ft',
    location: 'DHA Phase 2, Islamabad',
    address: 'Street 5, Sector D, DHA Phase 2, Islamabad',
    yearBuilt: 2020,
    amenities: ['Parking', 'Balcony', 'Gym Access', '24/7 Security', 'Elevator'],
    agentId: 'agent1', // Link to an agent
    images: [
      'https://images.unsplash.com/photo-1582268611958-f2ed29f2700e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop2',
    name: 'Family Home in Bahria Town Rawalpindi',
    image: 'https://images.unsplash.com/photo-1583091173871-331dc91d90f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Charming 4-bedroom house with a large garden, perfect for families. Located in a peaceful Bahria Town community.',
    type: 'House',
    status: 'For Sale',
    price: 'PKR 48,000,000',
    rentPrice: null,
    bedrooms: 4,
    bathrooms: 4,
    area: '1 Kanal',
    location: 'Bahria Town Phase 8, Rawalpindi',
    address: 'Block C, Street 10, Bahria Town Phase 8, Rawalpindi',
    yearBuilt: 2015,
    amenities: ['Garden', 'Garage', 'Servant Quarter', 'Backup Power'],
    agentId: 'agent2',
    images: [
      'https://images.unsplash.com/photo-1583091173871-331dc91d90f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop3',
    name: 'Commercial Shop in Gulberg, Lahore',
    image: 'https://images.unsplash.com/photo-1616035252033-047b746860d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Prime commercial space in the heart of Lahore\'s bustling Gulberg area. Ideal for retail, office, or restaurant.',
    type: 'Commercial',
    status: 'For Sale',
    price: 'PKR 85,000,000',
    rentPrice: null,
    bedrooms: null,
    bathrooms: 2,
    area: '1800 sq ft',
    location: 'Gulberg III, Lahore',
    address: 'Main Boulevard, Gulberg III, Lahore',
    yearBuilt: 2018,
    amenities: ['High Foot Traffic', 'Parking', 'Glass Frontage'],
    agentId: 'agent3',
    images: [
      'https://images.unsplash.com/photo-1616035252033-047b746860d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop4',
    name: 'Furnished Flat for Rent in F-10',
    image: 'https://images.unsplash.com/photo-1594411132646-6b6c0e5a8b0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cozy 2-bedroom furnished flat, ideal for professionals or small families. Close to markets and public transport.',
    type: 'Apartment',
    status: 'For Rent',
    price: null,
    rentPrice: 'PKR 85,000 / month',
    bedrooms: 2,
    bathrooms: 2,
    area: '1400 sq ft',
    location: 'F-10, Islamabad',
    address: 'Apartment 3A, Block 7, F-10/2, Islamabad',
    yearBuilt: 2005,
    amenities: ['Furnished', 'Parking', '24/7 Security'],
    agentId: 'agent1',
    images: [
      'https://images.unsplash.com/photo-1594411132646-6b6c0e5a8b0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop5',
    name: 'Plot for Sale in DHA Phase 5',
    image: 'https://images.unsplash.com/photo-1621644722880-97ec75908b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Prime residential plot available for immediate construction. Excellent investment opportunity.',
    type: 'Land',
    status: 'For Sale',
    price: 'PKR 28,000,000',
    rentPrice: null,
    bedrooms: null,
    bathrooms: null,
    area: '10 Marla',
    location: 'DHA Phase 5, Lahore',
    address: 'Plot 123, Block A, DHA Phase 5, Lahore',
    yearBuilt: null,
    amenities: ['Gated Community', 'Utilities Available'],
    agentId: 'agent3',
    images: [
      'https://images.unsplash.com/photo-1621644722880-97ec75908b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop6',
    name: 'Luxury Villa in E-11, Islamabad',
    image: 'https://images.unsplash.com/photo-1624891103091-a1e6a1d8a436?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Exquisite 5-bedroom villa with high-end finishes, private pool, and scenic views. Ideal for luxury living.',
    type: 'House',
    status: 'For Sale',
    price: 'PKR 120,000,000',
    rentPrice: null,
    bedrooms: 5,
    bathrooms: 6,
    area: '2 Kanal',
    location: 'E-11, Islamabad',
    address: 'Street 5, Sector E-11/4, Islamabad',
    yearBuilt: 2022,
    amenities: ['Swimming Pool', 'Home Theater', 'Smart Home', 'Garage', 'Garden'],
    agentId: 'agent1',
    images: [
      'https://images.unsplash.com/photo-1624891103091-a1e6a1d8a436?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop7',
    name: 'Brand New Flat for Rent in Askari 10',
    image: 'https://images.unsplash.com/photo-1522071820-22c608f16104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Never lived in 3-bedroom apartment, ready for immediate occupancy. Secure society with all amenities.',
    type: 'Apartment',
    status: 'For Rent',
    price: null,
    rentPrice: 'PKR 110,000 / month',
    bedrooms: 3,
    bathrooms: 3,
    area: '1800 sq ft',
    location: 'Askari 10, Lahore',
    address: 'Flat 12B, Tower 5, Askari 10, Lahore',
    yearBuilt: 2024,
    amenities: ['Gym Access', 'Swimming Pool', '24/7 Security', 'Backup Power'],
    agentId: 'agent3',
    images: [
      'https://images.unsplash.com/photo-1522071820-22c608f16104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop8',
    name: 'Spacious Office Space in Blue Area',
    image: 'https://images.unsplash.com/photo-1505322022370-7acff84e4a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Large office space in a prime commercial hub. Ideal for startups or growing businesses.',
    type: 'Commercial',
    status: 'For Rent',
    price: null,
    rentPrice: 'PKR 250,000 / month',
    bedrooms: null,
    bathrooms: 3,
    area: '3000 sq ft',
    location: 'Blue Area, Islamabad',
    address: 'Office 7, Centaurus Mall, Blue Area, Islamabad',
    yearBuilt: 2012,
    amenities: ['Central A/C', 'Dedicated Parking', 'High-Speed Internet'],
    agentId: 'agent1',
    images: [
      'https://images.unsplash.com/photo-1505322022370-7acff84e4a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'prop9',
    name: 'Agricultural Land near Lahore Ring Road',
    image: 'https://images.unsplash.com/photo-1627889397940-d66a6a9b9a4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Large tract of agricultural land with excellent road access. Suitable for farming or future development.',
    type: 'Land',
    status: 'For Sale',
    price: 'PKR 60,000,000',
    rentPrice: null,
    bedrooms: null,
    bathrooms: null,
    area: '5 Acres',
    location: 'Ferozepur Road, Lahore',
    address: 'Near Gajju Mata, Ferozepur Road, Lahore',
    yearBuilt: null,
    amenities: ['Water Source', 'Road Access'],
    agentId: 'agent2',
    images: [
      'https://images.unsplash.com/photo-1627889397940-d66a6a9b9a4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574362796120-d1297e641772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570198083839-a99f187a02c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  }
];

export default properties;