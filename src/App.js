import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './Pages/Faq'; // Assuming Faq is a component you've created and exported correctly
import Hosting from './Pages/Hosting';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/hosting" element={<Hosting/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
