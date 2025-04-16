import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Configurações específicas para cada elemento
    ScrollReveal().reveal(".letterS", {
      duration: 1000,
      delay: 1000,
    });

    ScrollReveal().reveal(".headerImage", {
      duration: 1000,
      delay: 1500,
    });

    ScrollReveal().reveal(".textLeft", {
      ...scrollRevealOption,
      origin: "right",
      delay: 2000,
    });

    ScrollReveal().reveal(".textRight", {
      ...scrollRevealOption,
      origin: "left",
      delay: 2000,
    });

    ScrollReveal().reveal(".explore", {
      duration: 1000,
      delay: 2500,
    });

    ScrollReveal().reveal("[class^='feature']", {
      duration: 1000,
      interval: 500,
      delay: 3000,
    });

    // Limpeza do efeito
    return () => ScrollReveal().destroy();
  }, []);
};

export default useScrollReveal;