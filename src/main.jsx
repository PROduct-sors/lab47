import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { router } from './router';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { AuthProvider } from './context/AuthContext';

<StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</StrictMode>