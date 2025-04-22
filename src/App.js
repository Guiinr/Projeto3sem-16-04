import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPages from './components/HeaderPages';
import FooterPages from './components/FooterPages';
import Sidebar from './components/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Orders from './pages/Orders/Orders';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <HeaderPages onProfileClick={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/my-orders" element={<Orders />} />
          </Routes>
        </main>

        <FooterPages />
      </div>
    </Router>
  );
}

export default App;