import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Edu from './Component/Edu.jsx'
import Skill from './Component/Skill.jsx'
import Project from './Component/Project.jsx'
import Contact from './Component/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Home/>
    <About/>
    <Edu/>
    <Skill/>
    <Project/>
    <Contact/>
  </React.StrictMode>,
)
