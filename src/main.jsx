import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Servicess from './components/Servicess.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Servicess' element={<Servicess/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>

      </Routes>
    </Router>
  
  
  
  
  </>
)
