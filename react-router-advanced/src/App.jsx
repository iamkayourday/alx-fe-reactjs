import {  BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      
      <Routes>
          <Route path="/"element={<h1>Home Page</h1>} />
          <Route path="profile/*" element={<Profile />} />
      </Routes>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
    </Router>
  )
}
export default App;



