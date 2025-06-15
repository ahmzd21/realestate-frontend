import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'; // <--- IMPORT AUTHPROVIDER
// Import slick-carousel CSS (add these two lines)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create the root
const root = createRoot(rootElement);

// Render your App component wrapped in StrictMode
root.render(
  <StrictMode> {/* Use StrictMode directly since you imported it */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);