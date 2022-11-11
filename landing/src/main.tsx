import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import Landing from './Landing;
import Landing from './Landing';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Roadmap } from './pages/Roadmap';
import { Team } from './pages/Team';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
