import React, { useState, useEffect } from 'react';
import styles from './Shop.module.css';

const Shop = () => {
  // Lista de produtos
  const products = [
    { id: 1, name: "Produto 1", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
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

  // Configurações de paginação
  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [visibleProducts, setVisibleProducts] = useState([]);

  // Filtra e pagina os produtos
  useEffect(() => {
    const filteredProducts = selectedCategory === "todos"
      ? products
      : products.filter(product => product.category === selectedCategory);

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    // Adiciona animação aos produtos
    setVisibleProducts([]);
    const timer = setTimeout(() => {
      setVisibleProducts(productsToShow);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage, selectedCategory]);

  // Manipuladores de eventos
  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  // Verifica se há próxima página
  const filteredProducts = selectedCategory === "todos"
    ? products
    : products.filter(product => product.category === selectedCategory);
  const hasNextPage = (currentPage * productsPerPage) < filteredProducts.length;

  return (
    <>
     
      <main className={styles.shop__container}>
        {/* Subtítulo e select de filtro */}
        <div className={styles.shop__header}>
          <h2>Nossas Artes</h2>
          <select 
            className={styles.filter__select} 
            id="filterSelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="todos">Todos</option>
            <option value="arte-digital">Arte Digital</option>
            <option value="pintura">Pintura</option>
            <option value="fotografia">Fotografia</option>
            <option value="escultura">Escultura</option>
          </select>
        </div>
      
        {/* Lista de produtos */}
        <section className={styles.products__grid} id="productsGrid">
          {visibleProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`${styles.product__card} ${styles.visible}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className={styles.product__price}>{product.price}</p>
              <button className={styles.btn}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </section>
      
        {/* Botões de paginação */}
        <div className={styles.pagination}>
          <button 
            id="prevPage" 
            className={styles.pagination__btn} 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span id="pageInfo">Página {currentPage}</span>
          <button 
            id="nextPage" 
            className={styles.pagination__btn}
            onClick={handleNextPage}
            disabled={!hasNextPage}
          >
            Próximo
          </button>
        </div>
      </main>

    </>
  );
};

export default Shop;