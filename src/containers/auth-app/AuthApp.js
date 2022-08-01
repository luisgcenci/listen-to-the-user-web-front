import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from 'routes/Login';
import './css/AuthApp.css'

const AuthApp = () => {
  return (
    <BrowserRouter>
      <div className='AuthApp'>
        <Routes className='AuthAppRoutes'>
          <Route 
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AuthApp;
