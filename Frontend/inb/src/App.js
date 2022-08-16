import './Css/App.css';
// import './Components/Navbar'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React from 'react';
import About from './Components/About';
import NoteState from './Context/notes/NoteState'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
      <NoteState>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </NoteState>
  );
}

export default App;
