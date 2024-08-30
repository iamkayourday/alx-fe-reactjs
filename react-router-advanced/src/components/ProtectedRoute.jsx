import React from 'react';
import Profile from './Profile';

const ProtectedRoute = () => {
  let useauth = { token: false }; 

  return (
    useauth.token 
      ? <Profile /> 
      : <div>Please create a profile</div> 
  );
};

export default ProtectedRoute;