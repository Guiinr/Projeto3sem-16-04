import React, { useState, useEffect, useMemo } from 'react';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Shop.module.css';

// Lista de produtos movida para fora do componente (constante)
const PRODUCTS = [
  { id: 1, name: "Produto 1", price: "R$ 99,99", image: "<div styleName={} />public/", category: "arte-digital" },
  { id: 2, name: "Produto 2", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
  { id: 3, name: "Produto 3", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
  { id: 4, name: "Produto 4", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
  { id: 5, name: "Produto 5", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
  { id: 6, name: "Produto 6", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
  { id: 7, name: "Produto 7", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
  { id: 8, name: "Produto 8", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
  { id: 9, name: "Produto 9", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
  { id: 10, name: "Produto 10", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
  { id: 11, name: "Produto 11", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
  { id: 12, name: "Produto 12", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
  { id: 13, name: "Produto 13", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
  { id: 14, name: "Produto 14", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
  { id: 15, name: "Produto 15", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
  { id: 16, name: "Produto 16", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
  { id: 17, name: "Produto 17", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
  { id: 18, name: "Produto 18", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
  { id: 19, name: "Produto 19", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
  { id: 20, name: "Produto 20", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
];

const PRODUCTS_PER_PAGE = 12; // Constante movida para fora do componente

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Filtra os produtos com useMemo para otimização
  const filteredProducts = useMemo(() => {
    return selectedCategory === "todos"
      ? PRODUCTS
      : PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(start, end);

    setVisibleProducts([]);
    const timer = setTimeout(() => {
      setVisibleProducts(productsToShow);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage, filteredProducts]); // Dependências corretamente declaradas

  const handleNextPage = () => setCurrentPage(prev => prev + 1);
  const handlePrevPage = () => setCurrentPage(prev => prev - 1);
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleAddToCart = (productId) => {
    setCartItems(prev => [...prev, productId]);
  };

  const hasNextPage = (currentPage * PRODUCTS_PER_PAGE) < filteredProducts.length;

  return (
    <main className={styles.shop}>
      <div className={styles.shopHeader}>
        <h1 className={styles.shopTitle}>Nossa Galeria</h1>
        <p className={styles.shopSubtitle}>Descubra obras exclusivas para seu espaço</p>
        
        <div className={styles.filterContainer}>
          <select 
            className={styles.filterSelect} 
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="todos">Todas Categorias</option>
            <option value="arte-digital">Arte Digital</option>
            <option value="pintura">Pintura</option>
            <option value="fotografia">Fotografia</option>
            <option value="escultura">Escultura</option>
          </select>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {visibleProducts.map((product, index) => {
          const itemCount = cartItems.filter(id => id === product.id).length;
          return (
            <div 
              key={product.id} 
              className={`${styles.productCard} ${styles.visible}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={styles.productImageContainer}>
                <img 
                  src={process.env.PUBLIC_URL + product.image} 
                  alt={product.name} 
                  className={styles.productImage}
                  onError={(e) => {
                    e.target.src = process.env.PUBLIC_URL + '/assets/placeholder-art.jpg';
                  }}
                />
                <button 
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product.id)}
                  aria-label="Adicionar ao carrinho"
                >
                  <FaShoppingCart className={styles.cartIcon} />
                  {itemCount > 0 && (
                    <span className={styles.cartBadge}>{itemCount}</span>
                  )}
                </button>
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <span className={styles.productPrice}>{product.price}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.pagination}>
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={styles.paginationBtn}
        >
          <FaChevronLeft /> Anterior
        </button>
        <span className={styles.pageNumber}>Página {currentPage}</span>
        <button 
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className={styles.paginationBtn}
        >
          Próxima <FaChevronRight />
        </button>
      </div>
    </main>
  );
};

export default Shop;