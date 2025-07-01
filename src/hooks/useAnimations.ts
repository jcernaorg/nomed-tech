import { useEffect } from 'react';

export const useAnimations = () => {
  // Efecto para fade-in-section (animación de aparición)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 50);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Animación de partículas
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p, i) => {
      p.animate([
        { transform: 'translateY(100vh) scale(0)', opacity: 0 },
        { opacity: 1, offset: 0.1 },
        { opacity: 1, offset: 0.9 },
        { transform: 'translateY(-100px) scale(1)', opacity: 0 }
      ], {
        duration: 6000,
        delay: i * 1000,
        iterations: Infinity,
        easing: 'ease-in-out',
      });
    });
  }, []);

  // Animación de barras de progreso
  const animateProgressBars = () => {
    const bars = document.querySelectorAll('.custom-progress-fill');
    bars.forEach(bar => {
      const percentage = parseInt(bar.getAttribute('data-percentage') || '0');
      const label = bar.parentElement?.nextElementSibling?.querySelector('.custom-progress-percentage');
      let current = 0;
      let start: number | null = null;
      
      function animateBar(ts: number) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / 1200, 1);
        current = Math.floor(progress * percentage);
        (bar as HTMLElement).style.width = `${current}%`;
        if (label) {
          (label as HTMLElement).textContent = current.toString();
        }
        if (progress < 1) {
          requestAnimationFrame(animateBar);
        } else {
          (bar as HTMLElement).style.width = percentage + '%';
          if (label) {
            (label as HTMLElement).textContent = percentage.toString();
          }
        }
      }
      requestAnimationFrame(animateBar);
    });
  };

  // Intersection Observer para animar barras de progreso al hacer scroll
  useEffect(() => {
    const progressSection = document.querySelectorAll('.custom-progress-bar');
    let progressAnimated = false;
    
    if (progressSection.length) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !progressAnimated) {
            animateProgressBars();
            progressAnimated = true;
          }
        });
      }, { threshold: 0.4 });
      
      progressSection.forEach(section => observer.observe(section));
      
      return () => observer.disconnect();
    }
  }, []);

  // Animación de pulso en el bubble del chat
  const animateChatBubble = (isOpen: boolean) => {
    const bubble = document.getElementById('chat-bubble');
    if (!isOpen) {
      bubble?.classList.add('chat-bubble-blink');
    } else {
      bubble?.classList.remove('chat-bubble-blink');
    }
  };

  return {
    animateProgressBars,
    animateChatBubble,
  };
}; 