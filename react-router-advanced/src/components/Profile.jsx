import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul style={{listStyle:"none"}}>
          <li> <Link to="details">Profile Details</Link> </li>
          <li> <Link to="settings">Profile settings</Link> </li>
          
        </ul>
      </nav>
      <Outlet />
      
      <Routes>
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />}/>
      </Routes>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Profile;