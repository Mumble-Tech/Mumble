import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import Landing from './Landing;
import Landing from './Landing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Roadmap } from './pages/Roadmap';

const router = createBrowserRouter([
        { path: '/', element: <Landing /> },
        { path: '/roadmap', element: <Roadmap /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
