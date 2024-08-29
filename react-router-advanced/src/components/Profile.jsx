import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';



function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile settings</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />}/>
      </Routes>
    </div>
  )
}

export default Profile
