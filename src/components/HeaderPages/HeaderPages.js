import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiUserLine, RiUserFill } from 'react-icons/ri';
import './HeaderPages.css';

const HeaderPages = ({ onProfileClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticação

  // Função para simular login/logout (substitua pela sua lógica real)
  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header-pages">
      <nav>
        <div className="nav__container">
          <ul className="nav__links">
            <li><Link to="/" className="logo">Diesel</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
          <ul className="nav__links">
            <li>
              <Link 
                to={isLoggedIn ? "/profile" : "/login"} 
                aria-label={isLoggedIn ? "Perfil" : "Fazer login"}
                onClick={handleAuthClick}
                className="auth-link"
              >
                {isLoggedIn ? (
                  <RiUserFill size={24} className="header-icon" />
                ) : (
                  <RiUserLine size={24} className="header-icon" />
                )}
              </Link>
            </li>
            <li>
              <button 
                onClick={onProfileClick} 
                aria-label="Menu"
                className="menu-button"
              >
                <RiMenuLine size={24} className="header-icon" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPages;