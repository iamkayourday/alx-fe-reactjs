import React from 'react';
import {  Navigate } from 'react-router-dom';
const useAuth = () => {
  
  return false; 
};


const ProtectedRoute = ({ element }) => {
  return useAuth() ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
