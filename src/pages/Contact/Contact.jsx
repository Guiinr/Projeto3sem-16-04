import React from 'react';
import styles from './contact.module.css'; // Note o nome em minúsculas
const Contact = () => {
  return (
    <main className={styles.contact__container}>
      <div className={styles.contact__form}>
        <h1>Entre em Contato</h1>
        <form action="#" method="post">
          <div className={styles.form__group}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.btn}>Enviar</button>
        </form>
      </div>
      <div className={styles.contact__image}>
        <img 
          src="/assets/ivan-removebg-preview.png" 
          alt="Imagem de Contato" 
        />
      </div>
    </main>
  );
};

export default Contact;