import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import Landing from './Landing'

// Routes
import Roadmap from './views/roadmap';
import Landing from './Landing';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
