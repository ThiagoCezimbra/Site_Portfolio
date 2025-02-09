// Header.js
import React, { useState } from 'react';
import './Header.css'; // Importa o estilo para o Header
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu em dispositivos móveis

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">

      <nav>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/projetos">Projetos</Link></li>
  <li><Link to="/contato">Contato</Link></li>
</ul>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Ícone de menu hamburguer */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
