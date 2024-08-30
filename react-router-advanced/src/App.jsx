import {  BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile'
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>   
      <Routes>
          <Route path="/"element={<h1>Home Page</h1>} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="/profile/*" element={<ProtectedRoute element={<Profile />}/>} />
          <Route path='blog' element={<BlogPost />}></Route>
          <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <nav>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </Router>
  );
}
export default App;



