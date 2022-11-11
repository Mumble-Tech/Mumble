import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import Landing from './Landing;
import Landing from './Landing';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Roadmap } from './pages/Roadmap';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
