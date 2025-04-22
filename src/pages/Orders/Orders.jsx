import React from 'react';
import styles from './Orders.module.css';

const Orders = () => {
  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <h1 className={styles.ordersTitle}>MEUS PEDIDOS</h1>
        
        {/* Seção do Usuário */}
        <div className={styles.userProfile}>
          <div className={styles.userDetails}>
            <h2 className={styles.userName}>Maria Silva</h2>
            <p className={styles.userEmail}>
              <i className="fas fa-envelope"></i>
              maria.silva@example.com
            </p>
            
            <div className={styles.userMeta}>
              <div className={styles.userStats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>15</span>
                  <span className={styles.statLabel}>Pedidos</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>2</span>
                  <span className={styles.statLabel}>Em transporte</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>R$ 1.245,90</span>
                  <span className={styles.statLabel}>Total gasto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de Pedidos */}
        <div className={styles.ordersList}>
          {/* Pedido 1 */}
          <div className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div className={styles.orderInfo}>
                <span className={styles.orderNumber}>Pedido #12345</span>
                <span className={styles.orderDate}>10/04/2023</span>
              </div>
              <div className={`${styles.orderStatus} ${styles.delivered}`}>Entregue</div>
            </div>
            
            <div className={styles.orderProducts}>
              <div className={styles.productItem}>
                <img 
                  src="https://via.placeholder.com/80" 
                  alt="Produto" 
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3>Nome do Produto 1</h3>
                  <p>Quantidade: 1</p>
                  <p className={styles.productPrice}>R$ 99,90</p>
                </div>
              </div>
              <div className={styles.productItem}>
                <img 
                  src="https://via.placeholder.com/80" 
                  alt="Produto" 
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3>Nome do Produto 2</h3>
                  <p>Quantidade: 2</p>
                  <p className={styles.productPrice}>R$ 199,80</p>
                </div>
              </div>
            </div>
            
            <div className={styles.orderFooter}>
              <div className={styles.orderTotal}>
                <span>Total:</span>
                <span className={styles.totalPrice}>R$ 299,70</span>
              </div>
              <div className={styles.orderActions}>
                <button className={styles.btnDetails}>Detalhes</button>
                <button className={styles.btnReorder}>Comprar Novamente</button>
              </div>
            </div>
          </div>
          
          {/* Pedido 2 */}
          <div className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div className={styles.orderInfo}>
                <span className={styles.orderNumber}>Pedido #12344</span>
                <span className={styles.orderDate}>05/04/2023</span>
              </div>
              <div className={`${styles.orderStatus} ${styles.shipping}`}>Em Transporte</div>
            </div>
            
            <div className={styles.orderProducts}>
              <div className={styles.productItem}>
                <img 
                  src="https://via.placeholder.com/80" 
                  alt="Produto" 
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3>Nome do Produto 3</h3>
                  <p>Quantidade: 1</p>
                  <p className={styles.productPrice}>R$ 149,90</p>
                </div>
              </div>
            </div>
            
            <div className={styles.orderFooter}>
              <div className={styles.orderTotal}>
                <span>Total:</span>
                <span className={styles.totalPrice}>R$ 149,90</span>
              </div>
              <div className={styles.orderActions}>
                <button className={styles.btnDetails}>Detalhes</button>
                <button className={styles.btnTrack}>Rastrear Pedido</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;