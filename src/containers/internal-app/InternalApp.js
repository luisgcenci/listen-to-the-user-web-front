import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SideBar from 'components/SideBar';
import Home from 'routes/Home';
import Settings from 'routes/Settings';
import './css/InternalApp.css';

const InternalApp = () => {
  return (
    <BrowserRouter>
      <div className="InternalApp">
        <div className="App-SideBar">
          <SideBar />
        </div>
        <div className="InternalAppRoutes">
          <Routes>
            <Route 
              path="/" 
              element={<Navigate to="/home" />} 
            />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default InternalApp;
