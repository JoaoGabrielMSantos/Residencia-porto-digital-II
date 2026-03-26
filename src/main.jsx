import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { AppProvider } from './context/AppContext.jsx';

// Removed all the conflicting legacy CSS files globally.
// The layout, sidebar, header, dashboard and pedidos are now styled by our premium central index.css.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
