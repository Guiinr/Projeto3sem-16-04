import React from 'react';
import './FooterPages.css';

const FooterPages = () => {
  return (
    <footer className="footer-pages">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Diesel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterPages;