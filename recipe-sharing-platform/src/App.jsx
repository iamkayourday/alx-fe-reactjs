import { ToastContainer } from 'react-toastify'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import HomePage from './components/HomePage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
