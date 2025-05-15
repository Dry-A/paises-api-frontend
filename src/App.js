// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PaisesLista from './components/PaisesLista';
import PaisDetalhes from './components/PaisDetalhes';
import PaisForm from './components/PaisForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaisesLista />} />
        <Route path="/paises/novo" element={<PaisForm />} />
        <Route path="/paises/editar/:id" element={<PaisForm />} />
        <Route path="/paises/:id" element={<PaisDetalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
