import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <LandingPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
