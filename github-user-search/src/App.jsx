import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {

  return (
    <>
    <div>
      <h1>Search GitHub Like a Pro!</h1>
      <Search />
    </div>
      
    </>
  )
}

export default App
