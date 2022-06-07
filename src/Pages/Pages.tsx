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
import ConactUs from './ContactUs/ContactUs';
import Careers from './Careers/Careers';
import JobDetails from './Careers/JobDetails';
import SingIn from './Auth/SignIn/SignIn';
import SingOn from './Auth/SignOn/SignOn';
import SingOff from './Auth/SingOff/SingOff';
import User from './Auth/User/User';
import UpdateUser from './Auth/User/UpdateData/UpdateUser';
import OrderData from './Auth/User/OrderData/OrderData';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/partners/become" element={<BecomePartner />} />

      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ConactUs />} />

      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/jobdetails/:id" element={<JobDetails />} />

      
      <Route path="/mykurir" element={<User />} />
      <Route path="/mykurir/update" element={<UpdateUser />} />
      <Route path="/mykurir/orders" element={<OrderData />} />
      
      <Route path="/auth" element={<SingIn />} />
      <Route path="/auth/join" element={<SingOn />} />
      <Route path="/auth/recover" element={<SingOff />} />
      <Route path="/how" element={<How />} />

    </Routes>
    
  );
}

export default Pages;