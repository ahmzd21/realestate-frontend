
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import BuyPage from './pages/BuyPage/BuyPage';
import RentPage from './pages/RentPage/RentPage';
import SellPage from './pages/SellPage/SellPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';
import AgentDetailPage from './pages/AgentDetailPage/AgentDetailPage';
import PropertyDetailPage from './pages/PropertyDetailPage/PropertyDetailPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/AuthPages/LoginPage'; // <--- IMPORT LOGIN PAGE
import SignupPage from './pages/AuthPages/SignupPage'; // <--- IMPORT SIGNUP PAGE 

// Import layout components (we'll create these in the next steps)
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <Router> {/* The main router component */}
      {/* Navbar will be rendered on every page */}
      <Navbar />

      <main> {/* Semantic tag for the main content area */}
        <Routes> {/* Defines the routes for our application */}
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/:id" element={<AgentDetailPage />} /> {/* Dynamic agent ID */}
          <Route path="/properties/:id" element={<PropertyDetailPage />} /> {/* Dynamic property ID */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />  {/* This route catches any undefined paths and displays the NotFoundPage */}
          <Route path="/login" element={<LoginPage />} />   {/* <--- ADD THIS ROUTE */}
          <Route path="/signup" element={<SignupPage />} /> {/* <--- ADD THIS ROUTE */}
        </Routes>
      </main>

      {/* Footer will also be rendered on every page */}
      <Footer />
    </Router>
  );
}

export default App;