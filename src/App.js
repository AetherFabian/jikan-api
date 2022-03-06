import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home"
import Detail from './pages/detail/Detail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/home' element = {<Home/>}/>
        <Route exact path = '/character/:name' element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;