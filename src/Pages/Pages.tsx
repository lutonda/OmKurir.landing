import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';

import Home from './Home/Home';
import About from './Home/About';
import Api from './Home/Api';
import Auth from './Home/Auth';
import How from './Home/How';
import Partners from './Partners/Partners';
import BecomePartner from './Partners/BecomePartner';
import AboutUs from './AboutUs/AboutUs';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/partners/become" element={<BecomePartner />} />

      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/how" element={<How />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    
  );
}

export default Pages;