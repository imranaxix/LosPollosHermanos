import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Banned from './Pages/Banned';
import Contact from './Pages/Contact';
import JobListing from './Pages/JobListing';
import OurHistory from './Pages/OurHistory';
import { DarkModeProvider } from './Components/DarkModeContex';

const App = () => {
  return (
    <DarkModeProvider>
      <div>
        <BrowserRouter basename='/LosPollosHermanos'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='history' element={<OurHistory />} />
            <Route path='job' element={<JobListing />} />
            <Route path='banned' element={<Banned />} />
            <Route path='contact' element={<Contact />} />
            
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  );
};

export default App;
