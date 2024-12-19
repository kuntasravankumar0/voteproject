import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Vote/Home';
import Help from './Vote/Help';
import Header from './Vote/Header';
import Admin from './Vote/adminfiles/Admin';
import VoterRegister from './Vote/VoterRegister';
import Footer from './Vote/Footer';
import Adminloginpage from './Vote/adminfiles/Adminlogin';
import Admindata from './Vote/adminfiles/Admindata';
import Voterdata from './Vote/Voterdata';



function App() {
  return (
    <BrowserRouter>
      <div id="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VoterRegister" element={<VoterRegister />} />
          <Route path="/voterdata" element={<Voterdata />} />
          <Route path="/help" element={<Help />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Adminloginpage" element={<Adminloginpage />} />
          <Route path="/Admindata" element={<Admindata />} />
         
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
