
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
import LoginPage from './pages/AuthPages/LoginPage'; // <--- IMPORT LOGaIN PAGE
import SignupPage from './pages/AuthPages/SignupPage'; // <--- IMPORT SIGNUP PAGE 

// Import layout components (we'll create these in the next steps)
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

import ProtectedRoute from './components/Auth/ProtectedRoute'; // <--- IMPORT ProtectedRoute

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Login and Signup pages should NOT be protected */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Home Route */}
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />

          {/* Other public routes (if any, like Contact, etc. if you don't want them protected) */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}

          {/* Example of other protected routes */}
          {/* <Route path="/add-property" element={
            <ProtectedRoute>
              <AddPropertyPage />
            </ProtectedRoute>
          } /> */}

          {/* Your other existing routes */}
          <Route path="/buy" element={
            <ProtectedRoute>
              <BuyPage />
            </ProtectedRoute>
          } />
          <Route path="/rent" element={
            <ProtectedRoute>
              <RentPage />
            </ProtectedRoute>
          } />
          <Route path="/sell" element={
            <ProtectedRoute>
              <SellPage />
            </ProtectedRoute>
          } />
          <Route path="/agents" element={
            <ProtectedRoute>
              <AgentsPage />
            </ProtectedRoute>
          } />
          <Route path="/agents/:id" element={
            <ProtectedRoute>
              <AgentDetailPage />
            </ProtectedRoute>
          } />
          <Route path="/properties/:id" element={
            <ProtectedRoute>
              <PropertyDetailPage />
            </ProtectedRoute>
          } />
          <Route path="/contact" element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;