import React from 'react';
import About from './components/About';
import Project from './components/Project';
import Hobby from './components/Hobby';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/About' element={<About/>}/>
        <Route path ='/Project' element={<Project/>}/>
        <Route path ='/Hobby' element={<Hobby/>}/>
        <Route path ='/Contact' element={<Contact/>}/>
      </Routes>
      <Home />
      <About />
      <Project />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
