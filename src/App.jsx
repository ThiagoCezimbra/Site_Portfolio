import { useState } from "react";
import "./App.css";
import "./header.css";
import "./footer.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './pages/home';
import Contato from './pages/contato';
import Projetos from './pages/projetos';

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Aqui o Header é adicionado */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Footer /> {/* Aqui o Footer é adicionado */}
      </div>
    </Router>
  );
}

export default App;
