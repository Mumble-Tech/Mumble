import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import Landing from './Landing'

// Routes
import Contact from './views/contact';
import Roadmap from './views/roadmap';
import Landing from './Landing';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
