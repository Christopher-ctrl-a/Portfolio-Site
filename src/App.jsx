/* App.jsx Christopher Esguerra 301483615  09/10/2025*/

import './css/App.css'
import './css/navbar.css'
import LogoSVG from './assets/Logos.svg'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Project from './pages/project'
import Service from './pages/service'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (


    <BrowserRouter>
      <nav>
        <img className="logo" src={LogoSVG} alt="Logo" />
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>  |{" "}
        <Link to="/project">Projects</Link> |{" "}
        <Link to="/service">Services</Link>
      </nav>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>

  );
}



export default App
