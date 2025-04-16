import React from 'react';
import { RiCloseLine, RiShoppingCartLine, RiListCheck, RiHomeLine, RiLogoutBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const handleLogout = () => {
    // Adicione aqui a lógica de logout
    console.log('Usuário deslogado');
    onClose(); // Fecha a sidebar após logout
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar__header">
        <h3>Victor</h3>
        <button className="close-btn" onClick={onClose}>
          <RiCloseLine />
        </button>
      </div>
      
      <div className="sidebar__content">
        {/* Seção de navegação principal */}
        <div className="sidebar__section">
          <Link to="/about" className="sidebar__button" onClick={onClose}>
            Sobre Nós
          </Link>
        </div>
        
        <div className="sidebar__section">
          <Link to="/shop" className="sidebar__button" onClick={onClose}>
            Shop
          </Link>
        </div>
        
        <div className="sidebar__section">
          <Link to="/contact" className="sidebar__button" onClick={onClose}>
            Contato
          </Link>
        </div>

        {/* Divisor visual */}
        <div className="sidebar__divider"></div>

        {/* Seção do usuário */}
        <div className="sidebar__section">
          <Link to="/cart" className="sidebar__button" onClick={onClose}>
            <RiShoppingCartLine className="sidebar__icon" />
            Carrinho
          </Link>
        </div>
        
        <div className="sidebar__section">
          <Link to="/my-orders" className="sidebar__button" onClick={onClose}>
            <RiListCheck className="sidebar__icon" />
            Meus Pedidos
          </Link>
        </div>
        
        <div className="sidebar__section">
          <Link to="/my-address" className="sidebar__button" onClick={onClose}>
            <RiHomeLine className="sidebar__icon" />
            Meu Endereço
          </Link>
        </div>

        {/* Botão de logout */}
        <div className="sidebar__section sidebar__section--logout">
          <button 
            className="sidebar__button sidebar__button--logout" 
            onClick={handleLogout}
          >
            <RiLogoutBoxLine className="sidebar__icon" />
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;