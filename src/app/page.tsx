'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ChatMessage = {
  type: 'bot' | 'user';
  text: string;
  options?: string[];
};

export default function Home() {
  // Referencias para animaciones y scripts
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      text: "¡Hola! Soy el Asistente IA de NOMED TECH. ¿Te gustaría implementar un chatbot en tu empresa o necesitas más información?",
      options: [
        "Quiero un chatbot para mi empresa",
        "Ver ejemplos de chatbots",
        "¿Cómo funciona la integración?",
        "Contactar a un asesor",
        "Solicitar una demo"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);

  // Referencias para las barras de progreso
  const autoBarRef = useRef<HTMLDivElement | null>(null);
  const analyticsBarRef = useRef<HTMLDivElement | null>(null);
  const [autoPercent, setAutoPercent] = useState(0);
  const [analyticsPercent, setAnalyticsPercent] = useState(0);

  // Estados para funcionalidades interactivas
  const [serviceType, setServiceType] = useState<'all' | 'automation' | 'analytics' | 'chatbots'>('all');
  const [showStats, setShowStats] = useState(false);
  const [counterValues, setCounterValues] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    savings: 0
  });

  // Diccionario de nodos conversacionales
  const conversation = {
    start: {
      message: "¡Hola! Soy el Asistente IA de NOMED TECH. ¿Te gustaría implementar un chatbot en tu empresa o necesitas más información?",
      responses: [
        "Quiero un chatbot para mi empresa",
        "Ver ejemplos de chatbots",
        "¿Cómo funciona la integración?",
        "Contactar a un asesor",
        "Solicitar una demo"
      ]
    },
    services: {
      message: "Ofrecemos automatización de IA integral, incluyendo chatbots de generación de leads, automatización de marketing y facturación optimizada. ¿Qué te interesa más?",
      responses: [
        "Generación de Leads",
        "Marketing",
        "Facturación",
        "Todo el paquete",
        "Volver"
      ]
    },
    savings: {
      message: "¡Nuestros clientes ahorran MUCHO automatizando tareas repetitivas, reduciendo gastos manuales y optimizando flujos de trabajo! Nuestra plataforma todo en uno reemplaza múltiples suscripciones costosas.",
      responses: [
        "¡Eso suena genial!",
        "Cuéntame más sobre servicios",
        "¿Cuánto puedo ahorrar?",
        "Ver demostración"
      ]
    },
    leadGen: {
      message: "Nuestros chatbots de IA capturan y califican leads 24/7, interactuando proactivamente con visitantes y programando reuniones automáticamente. ¡Es como tener a tu mejor vendedor trabajando todo el día!",
      responses: [
        "¿Cómo funciona?",
        "Ver ejemplos",
        "Volver a servicios",
        "Contactar ventas"
      ]
    },
    marketing: {
      message: "Diseñamos campañas publicitarias impulsadas por IA y gestionamos tu presencia en redes sociales desde un solo centro, asegurando máximo alcance y engagement.",
      responses: [
        "¿Qué plataformas?",
        "Ver casos de éxito",
        "Volver a servicios",
        "Solicitar cotización"
      ]
    },
    specific: {
      message: "Entendido. La mejor manera de obtener una respuesta específica es conectarte con nuestro equipo. ¡Puedes enviar una solicitud a través de nuestro formulario de contacto!",
      responses: [
        "¡Gracias!",
        "Ver formulario",
        "Llamar ahora",
        "Enviar email"
      ]
    },
    great: {
      message: "Nos encantaría mostrarte una demostración personalizada. ¡No dudes en usar el formulario de contacto para ponerte en contacto!",
      responses: [
        "¡Lo haré!",
        "Agendar demo",
        "Ver más información",
        "Gracias"
      ]
    },
    end: {
      message: "¡De nada! Que tengas un excelente día. Si necesitas más ayuda, no dudes en contactarnos.",
      responses: [
        "Adiós",
        "Nueva consulta",
        "Contactar soporte"
      ]
    }
  };

  // Lógica para determinar el siguiente nodo
  function getNextNode(text: string): keyof typeof conversation | null {
    const t = text.toLowerCase();
    if (t.includes('servicio') || t.includes('solución')) return 'services';
    if (t.includes('ahorrar') || t.includes('costo') || t.includes('precio')) return 'savings';
    if (t.includes('lead') || t.includes('cliente')) return 'leadGen';
    if (t.includes('marketing') || t.includes('publicidad')) return 'marketing';
    if (t.includes('específica') || t.includes('pregunta')) return 'specific';
    if (t.includes('genial') || t.includes('interesante')) return 'great';
    if (t.includes('gracias') || t.includes('adiós')) return 'end';
    return null;
  }

  // Manejo de envío de mensaje
  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((msgs) => [...msgs, { type: 'user', text }]);
    setInput("");
    setWaiting(true);
    setTimeout(() => {
      const next = getNextNode(text);
      if (next) {
        setMessages((msgs) => [...msgs, { type: 'bot', text: conversation[next].message, options: conversation[next].responses }]);
      } else {
        setMessages((msgs) => [...msgs, { type: 'bot', text: "Gracias por tu interés. Nuestro equipo te contactará pronto con más información." }]);
      }
      setWaiting(false);
      setTimeout(() => {
        if (chatBodyRef.current) {
          chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
      }, 100);
    }, 600);
  };

  // Scroll automático al agregar mensaje
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, chatOpen]);

  // Animación de pulso en el bubble
  useEffect(() => {
    const bubble = document.getElementById('chat-bubble');
    if (!chatOpen) {
      bubble?.classList.add('chat-bubble-blink');
    } else {
      bubble?.classList.remove('chat-bubble-blink');
    }
  }, [chatOpen]);

  useEffect(() => {
    // Partículas animadas
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

  // Efecto para fade-in-section (animación de aparición)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    // Observer para elementos con fade-in-section
    const fadeObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 50);
        }
      });
    }, observerOptions);

    // Observer para elementos con scroll-animate
    const scrollObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

    // Observer para elementos con text-animate
    const textObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 150);
        }
      });
    }, observerOptions);

    // Observer para elementos con button-animate
    const buttonObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 200);
        }
      });
    }, observerOptions);

    // Observer para elementos con card-animate
    const cardObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

    // Observer para elementos con list-item-animate
    const listObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

    // Observer para elementos con icon-animate
    const iconObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 150);
        }
      });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.fade-in-section').forEach(section => fadeObserver.observe(section));
    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => scrollObserver.observe(el));
    document.querySelectorAll('.text-animate').forEach(el => textObserver.observe(el));
    document.querySelectorAll('.button-animate').forEach(el => buttonObserver.observe(el));
    document.querySelectorAll('.card-animate').forEach(el => cardObserver.observe(el));
    document.querySelectorAll('.list-item-animate').forEach(el => listObserver.observe(el));
    document.querySelectorAll('.icon-animate').forEach(el => iconObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
      scrollObserver.disconnect();
      textObserver.disconnect();
      buttonObserver.disconnect();
      cardObserver.disconnect();
      listObserver.disconnect();
      iconObserver.disconnect();
    };
  }, []);

  // Función para animar barras de progreso
  function animateBar(ref: React.RefObject<HTMLDivElement | null>, target: number, setter: (v: number) => void) {
    const duration = 1200;
    const step = (timestamp: number, startTime: number | null) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setter(value);
      if (progress < 1) {
        requestAnimationFrame((ts) => step(ts, startTime));
      } else {
        setter(target);
      }
    };
    requestAnimationFrame((ts) => step(ts, null));
  }

  // Función para animar contadores
  function animateCounter(target: number, setter: (value: number) => void, duration: number = 2000) {
    const step = (timestamp: number, startTime: number | null) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setter(value);
      if (progress < 1) {
        requestAnimationFrame((ts) => step(ts, startTime));
      } else {
        setter(target);
      }
    };
    requestAnimationFrame((ts) => step(ts, null));
  }

  // Función para cambiar el tipo de servicio
  const handleServiceChange = (type: 'all' | 'automation' | 'analytics' | 'chatbots') => {
    setServiceType(type);
    
    // Efecto visual con las nuevas clases CSS
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      card.classList.remove('active', 'filtered');
      
      // Determinar si la card debe estar activa o filtrada
      const cardType = card.getAttribute('data-service-type');
      if (type === 'all' || cardType === type) {
        setTimeout(() => {
          card.classList.add('active');
        }, 100);
      } else {
        card.classList.add('filtered');
      }
    });
  };



  // Efecto para las barras de progreso
  useEffect(() => {
    const animateBars = () => {
      animateBar(autoBarRef, 85, setAutoPercent);
      animateBar(analyticsBarRef, 92, setAnalyticsPercent);
    };

    // Animar barras cuando el componente se monta
    animateBars();

    // Animar barras cuando el usuario hace scroll y las secciones son visibles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
        }
      });
    }, { threshold: 0.3 });

    const progressSection = document.querySelector('.grid.md\\:grid-cols-2');
    if (progressSection) {
      observer.observe(progressSection);
    }

    return () => observer.disconnect();
  }, []);

  // Animación de barras de progreso
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let autoAnimated = false;
    let analyticsAnimated = false;
    
    // Observer para disparar la animación al hacer scroll
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === autoBarRef.current && !autoAnimated) {
            animateBar(autoBarRef, 85, setAutoPercent);
            autoAnimated = true;
          }
          if (entry.target === analyticsBarRef.current && !analyticsAnimated) {
            animateBar(analyticsBarRef, 92, setAnalyticsPercent);
            analyticsAnimated = true;
          }
        }
      });
    }, { threshold: 0.4 });
    if (autoBarRef.current) observer.observe(autoBarRef.current);
    if (analyticsBarRef.current) observer.observe(analyticsBarRef.current);
    return () => observer.disconnect();
  }, []);

  // Efecto para las interacciones de los iconos de integración
  useEffect(() => {
    const integrationIcons = document.querySelectorAll('.integration-icon');
    
    integrationIcons.forEach(icon => {
      icon.addEventListener('mouseenter', function(this: Element) {
        // Add a subtle sound effect (optional)
        (this as HTMLElement).style.transform = 'translateY(-8px) scale(1.1)';
        
        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-cyan-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap z-50 opacity-0 transition-opacity duration-300';
        const img = this.querySelector('img') as HTMLImageElement;
        tooltip.textContent = img.alt;
        this.appendChild(tooltip);
        
        setTimeout(() => {
          tooltip.style.opacity = '1';
        }, 100);
      });
      
      icon.addEventListener('mouseleave', function(this: Element) {
        (this as HTMLElement).style.transform = '';
        
        // Remove tooltip
        const tooltip = this.querySelector('div');
        if (tooltip) {
          tooltip.style.opacity = '0';
          setTimeout(() => {
            if (tooltip.parentNode) {
              tooltip.parentNode.removeChild(tooltip);
            }
          }, 300);
        }
      });
      
      icon.addEventListener('click', function(this: Element) {
        // Add click effect
        (this as HTMLElement).style.transform = 'scale(0.95)';
        setTimeout(() => {
          (this as HTMLElement).style.transform = '';
        }, 150);
        
        // Show integration info
        const img = this.querySelector('img') as HTMLImageElement;
        const platform = img.alt;
        alert(`¡Integración con ${platform} disponible! Nuestro chatbot se conecta perfectamente con esta plataforma.`);
      });
    });

    return () => {
      // Cleanup event listeners
      integrationIcons.forEach(icon => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
        icon.removeEventListener('click', () => {});
      });
    };
  }, []);

  // Efecto para animar contadores cuando se muestren las estadísticas
  useEffect(() => {
    if (showStats) {
      // Animar contadores inmediatamente cuando se muestra la sección
      setTimeout(() => {
        animateCounter(500, (value) => setCounterValues(prev => ({ ...prev, clients: value })));
        animateCounter(1000, (value) => setCounterValues(prev => ({ ...prev, projects: value })));
        animateCounter(98, (value) => setCounterValues(prev => ({ ...prev, satisfaction: value })));
        animateCounter(75, (value) => setCounterValues(prev => ({ ...prev, savings: value })));
      }, 100);
    } else {
      // Resetear contadores cuando se oculta
      setCounterValues({
        clients: 0,
        projects: 0,
        satisfaction: 0,
        savings: 0
      });
    }
  }, [showStats]);

  // Aquí irán más efectos y lógica de animaciones (chatbot, counters, etc.)



  return (
    <>
      {/* Fondo dinámico y partículas */}
      <div className="particles pointer-events-none fixed top-0 left-0 w-full h-full z-[-3]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-40">
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight animate-fade-in-up">
            <span className="text-white">Automatiza tu</span>
            <br />
            <span className="highlight-cyan text-glow-blue delay-200 animate-fade-in-up">Negocio con IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
            Soluciones de inteligencia artificial que transforman tu empresa,{' '}
            <span className="highlight-yellow">automatizando procesos</span> y{' '}
            <span className="highlight-pink-glow">maximizando resultados</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-600">
            <a href="#servicios" className="neon-button bg-cyan-400 text-black font-medium py-4 px-8 rounded-lg text-lg hover:bg-cyan-300 transition-all">
              Ver Soluciones
            </a>
            <a href="#contacto" className="glass-button text-cyan-400 py-4 px-8 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Sección Interactiva - Toggle de Servicios */}
      <section className="py-20 transparent-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 text-white text-animate">
              Explora Nuestros <span className="highlight-cyan">Servicios</span>
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto text-animate">
              Descubre cómo cada solución puede transformar tu negocio
            </p>
          </div>

          {/* Toggle de Servicios */}
          <div className="flex items-center justify-center space-x-4 mb-12 animate-fade-in-up delay-200">
            <button
              onClick={() => handleServiceChange('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                serviceType === 'all' 
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleServiceChange('chatbots')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                serviceType === 'chatbots' 
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              ChatBots
            </button>
            <button
              onClick={() => handleServiceChange('automation')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                serviceType === 'automation' 
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Automatización
            </button>
            <button
              onClick={() => handleServiceChange('analytics')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                serviceType === 'analytics' 
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Cards de Servicios Interactivas */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ChatBots Card */}
            <div className={`service-card fade-in-section animate-fade-in-up delay-300 active ${
              serviceType === 'all' || serviceType === 'chatbots' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            } transition-all duration-500`} data-service-type="chatbots">
              <div className="glass-card p-8 rounded-2xl h-full relative card-animate hover:scale-105 cursor-pointer">
                <div className="text-cyan-400 mb-6 animate-fade-in delay-400 icon-animate">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-white text-animate">AI ChatBots</h3>
                <p className="text-gray-300 font-light leading-relaxed text-animate">
                  Chatbots inteligentes que atienden clientes 24/7, generan leads y optimizan la experiencia del usuario.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 text-sm">
                  <span className="mr-2">Eficiencia:</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                  </div>
                  <span className="ml-2">95%</span>
                </div>
              </div>
            </div>

            {/* Automatización Card */}
            <div className={`service-card fade-in-section animate-fade-in-up delay-400 active ${
              serviceType === 'all' || serviceType === 'automation' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            } transition-all duration-500`} data-service-type="automation">
              <div className="glass-card p-8 rounded-2xl h-full relative card-animate hover:scale-105 cursor-pointer">
                <div className="text-cyan-400 mb-6 animate-fade-in delay-500 icon-animate">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-white text-animate">Automatización</h3>
                <p className="text-gray-300 font-light leading-relaxed text-animate">
                  Automatiza tareas repetitivas y procesos empresariales con IA avanzada que aprende y se adapta.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 text-sm">
                  <span className="mr-2">Ahorro:</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                  </div>
                  <span className="ml-2">85%</span>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className={`service-card fade-in-section animate-fade-in-up delay-500 active ${
              serviceType === 'all' || serviceType === 'analytics' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            } transition-all duration-500`} data-service-type="analytics">
              <div className="glass-card p-8 rounded-2xl h-full relative card-animate hover:scale-105 cursor-pointer">
                <div className="text-cyan-400 mb-6 animate-fade-in delay-600 icon-animate">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-white text-animate">Analytics</h3>
                <p className="text-gray-300 font-light leading-relaxed text-animate">
                  Análisis de datos en tiempo real con insights predictivos para tomar mejores decisiones.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 text-sm">
                  <span className="mr-2">Precisión:</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                  </div>
                  <span className="ml-2">92%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para mostrar estadísticas */}
          <div className="text-center mt-12 animate-fade-in-up delay-600">
            <button
              onClick={() => setShowStats(!showStats)}
              className="glass-button text-cyan-400 py-4 px-8 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              {showStats ? 'Ocultar' : 'Ver'} Estadísticas
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      {showStats && (
        <section className="py-20 transparent-section stats-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in-section animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-extralight mb-6 text-white text-animate">
                Nuestros <span className="highlight-cyan">Números</span>
              </h2>
              <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto text-animate">
                Resultados que hablan por sí solos
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Clientes */}
              <div className="text-center fade-in-section animate-fade-in-up delay-200">
                <div className="glass-card p-8 rounded-2xl relative card-animate">
                  <div className="text-cyan-400 mb-4 animate-fade-in delay-300 icon-animate">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 counter-animate">
                    {counterValues.clients}+
                  </div>
                  <div className="text-gray-300 font-light">Clientes Satisfechos</div>
                </div>
              </div>

              {/* Proyectos */}
              <div className="text-center fade-in-section animate-fade-in-up delay-300">
                <div className="glass-card p-8 rounded-2xl relative card-animate">
                  <div className="text-cyan-400 mb-4 animate-fade-in delay-400 icon-animate">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 counter-animate">
                    {counterValues.projects}+
                  </div>
                  <div className="text-gray-300 font-light">Proyectos Exitosos</div>
                </div>
              </div>

              {/* Satisfacción */}
              <div className="text-center fade-in-section animate-fade-in-up delay-400">
                <div className="glass-card p-8 rounded-2xl relative card-animate">
                  <div className="text-cyan-400 mb-4 animate-fade-in delay-500 icon-animate">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 counter-animate">
                    {counterValues.satisfaction}%
                  </div>
                  <div className="text-gray-300 font-light">Satisfacción del Cliente</div>
                </div>
              </div>

              {/* Ahorro */}
              <div className="text-center fade-in-section animate-fade-in-up delay-500">
                <div className="glass-card p-8 rounded-2xl relative card-animate">
                  <div className="text-cyan-400 mb-4 animate-fade-in delay-600 icon-animate">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 counter-animate">
                    {counterValues.savings}%
                  </div>
                  <div className="text-gray-300 font-light">Ahorro en Costos</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nuestras Soluciones */}
      <section id="servicios" className="py-40 transparent-section mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Nuestras <span className="highlight-cyan">Soluciones</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Automatización integral con IA que revoluciona tu negocio
            </p>
          </div>

          {/* AI ChatBots - Featured Service */}
          <div className="mb-24 fade-in-section animate-fade-in-up delay-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 scroll-animate-left">
                <div className="text-cyan-400 mb-6 animate-fade-in delay-300 icon-animate">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light mb-6 text-white animate-fade-in-up delay-400 text-animate">AI ChatBots</h3>
                <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed animate-fade-in-up delay-500 text-animate">
                  Chatbots inteligentes que atienden clientes 24/7, generan leads y optimizan la experiencia del usuario con conversaciones naturales y personalizadas.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-light animate-fade-in delay-600 button-animate">
                  Conoce más
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="lg:w-1/2 scroll-animate-right">
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden animate-scale-in delay-700 card-animate">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-light text-white mb-4 text-animate">Características Principales</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center list-item-animate">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Atención al cliente 24/7
                      </li>
                      <li className="flex items-center list-item-animate">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Generación automática de leads
                      </li>
                      <li className="flex items-center list-item-animate">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Integración con múltiples plataformas
                      </li>
                      <li className="flex items-center list-item-animate">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Análisis de conversaciones en tiempo real
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Automatización */}
            <div className="fade-in-section animate-fade-in-up delay-300 scroll-animate">
              <div className="text-center mb-8">
                <div className="text-cyan-400 mb-4 animate-fade-in delay-400 icon-animate">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-white animate-fade-in-up delay-500 text-animate">Automatización</h3>
                <p className="text-gray-300 font-light leading-relaxed animate-fade-in-up delay-600 text-animate">
                  Automatiza tareas repetitivas, flujos de trabajo y procesos empresariales con IA avanzada que aprende y se adapta a tus necesidades.
                </p>
              </div>
              {/* Barra de progreso animada */}
              <div className="w-full bg-[#333] rounded-full h-2.5 mb-4">
                <div ref={autoBarRef} className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${autoPercent}%` }}></div>
              </div>
              <div className="text-right text-cyan-400 font-bold">{autoPercent}%</div>
            </div>
            {/* Analytics */}
            <div className="fade-in-section animate-fade-in-up delay-400 scroll-animate">
              <div className="text-center mb-8">
                <div className="text-cyan-400 mb-4 animate-fade-in delay-500 icon-animate">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-white animate-fade-in-up delay-600 text-animate">Analytics</h3>
                <p className="text-gray-300 font-light leading-relaxed animate-fade-in-up delay-700 text-animate">
                  Análisis de datos en tiempo real con insights predictivos para tomar mejores decisiones y optimizar el rendimiento de tu negocio
                </p>
              </div>
              {/* Barra de progreso animada */}
              <div className="w-full bg-[#333] rounded-full h-2.5 mb-4">
                <div ref={analyticsBarRef} className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${analyticsPercent}%` }}></div>
              </div>
              <div className="text-right text-cyan-400 font-bold">{analyticsPercent}%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-40 transparent-section process-section mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Nuestro <span className="highlight-cyan">Proceso</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Implementación rápida y eficiente de soluciones de IA
            </p>
          </div>
          {/* Steps */}
          <div className="relative">
            {/* Línea de tiempo vertical solo en desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent timeline-line"></div>
            {/* Paso 1 */}
            <div className="flex flex-col lg:flex-row items-center mb-20 fade-in-section process-step animate-fade-in-up delay-200">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 scroll-animate-left">
                <div className="glass-card p-8 rounded-2xl relative animate-scale-in delay-300 card-animate">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/25 process-number icon-animate">
                    <span className="text-xl font-light text-black">1</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white process-title text-animate">Análisis</h3>
                  <p className="text-gray-300 font-light leading-relaxed process-description text-animate">
                    Evaluamos tus necesidades específicas, analizamos tus procesos actuales y diseñamos la solución perfecta que se adapte a tu negocio.
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm process-duration text-animate">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duración: 1-2 semanas
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12 scroll-animate-right">
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-cyan-400/25 process-icon animate-fade-in delay-400 icon-animate">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Paso 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-20 fade-in-section process-step animate-fade-in-up delay-300">
              <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 scroll-animate-right">
                <div className="glass-card p-8 rounded-2xl relative animate-scale-in delay-400 card-animate">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/25 process-number icon-animate">
                    <span className="text-xl font-light text-black">2</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white process-title text-animate">Desarrollo</h3>
                  <p className="text-gray-300 font-light leading-relaxed process-description text-animate">
                    Creamos e implementamos tu solución personalizada utilizando las últimas tecnologías de IA, asegurando la máxima calidad y rendimiento.
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm process-duration text-animate">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duración: 2-4 semanas
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-12 scroll-animate-left">
                <div className="text-center lg:text-right">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-cyan-400/25 process-icon animate-fade-in delay-500 icon-animate">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Paso 3 */}
            <div className="flex flex-col lg:flex-row items-center mb-20 fade-in-section process-step animate-fade-in-up delay-400">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 scroll-animate-left">
                <div className="glass-card p-8 rounded-2xl relative animate-scale-in delay-500 card-animate">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/25 process-number icon-animate">
                    <span className="text-xl font-light text-black">3</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white process-title text-animate">Implementación</h3>
                  <p className="text-gray-300 font-light leading-relaxed process-description text-animate">
                    Desplegamos tu solución en tu entorno de trabajo, configuramos todas las integraciones necesarias y realizamos las pruebas finales para asegurar un funcionamiento perfecto.
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm process-duration text-animate">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duración: 1-2 semanas
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12 scroll-animate-right">
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-cyan-400/25 process-icon animate-fade-in delay-600 icon-animate">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Paso 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-20 fade-in-section process-step animate-fade-in-up delay-500">
              <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 scroll-animate-right">
                <div className="glass-card p-8 rounded-2xl relative animate-scale-in delay-600 card-animate">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/25 process-number icon-animate">
                    <span className="text-xl font-light text-black">4</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white process-title text-animate">Optimización</h3>
                  <p className="text-gray-300 font-light leading-relaxed process-description text-animate">
                    Monitoreamos y mejoramos continuamente el rendimiento de tu solución, ajustando parámetros y optimizando procesos para maximizar la eficiencia y resultados.
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm process-duration text-animate">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duración: 2-3 semanas
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-12 scroll-animate-left">
                <div className="text-center lg:text-right">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-cyan-400/25 process-icon animate-fade-in delay-700 icon-animate">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Paso 5 */}
            <div className="flex flex-col lg:flex-row items-center fade-in-section process-step animate-fade-in-up delay-600">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 scroll-animate-left">
                <div className="glass-card p-8 rounded-2xl relative animate-scale-in delay-700 card-animate">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/25 process-number icon-animate">
                    <span className="text-xl font-light text-black">5</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-white process-title text-animate">Seguimiento</h3>
                  <p className="text-gray-300 font-light leading-relaxed process-description text-animate">
                    Proporcionamos soporte continuo, reportes de rendimiento y mejoras constantes para asegurar que tu solución evolucione con tu negocio y mantenga su máximo potencial.
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm process-duration text-animate">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Soporte continuo
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12 scroll-animate-right">
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-cyan-400/25 process-icon animate-fade-in delay-800 icon-animate">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 fade-in-section animate-fade-in-up text-animate">
            Integraciones <span className="highlight-cyan">listas</span> para usar
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 fade-in-section animate-fade-in-up delay-200 text-animate">
            Conecta tu solución con las plataformas que ya usas: WhatsApp, Facebook Messenger, Instagram, Web, CRMs, e-commerce y más.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto fade-in-section animate-fade-in-up delay-300">
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/whatsapp/22d3ee" alt="WhatsApp" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/facebook/22d3ee" alt="Facebook" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/instagram/22d3ee" alt="Instagram" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/shopify/22d3ee" alt="Shopify" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/zapier/22d3ee" alt="Zapier" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="integration-icon w-16 h-16 bg-gray-800 rounded-2xl p-2 flex items-center justify-center">
              <Image src="https://cdn.simpleicons.org/openai/22d3ee" alt="OpenAI" width={48} height={48} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Transformar tu Negocio */}
      <section id="contacto" className="py-32 gradient-bg">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="fade-in-section glass-effect max-w-2xl w-full mx-auto rounded-2xl p-12 shadow-xl border border-white/10 backdrop-blur-lg bg-white/5 animate-scale-in delay-200 card-animate">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white animate-fade-in-up delay-300 text-animate">
              ¿Listo para <span className="highlight-cyan">Transformar</span> tu Negocio?
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400 text-animate">
              Únete a cientos de empresas que ya están automatizando sus procesos con IA y experimentando resultados extraordinarios
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
              <a href="#" className="neon-button bg-cyan-400 text-black font-medium py-5 px-10 rounded-lg text-lg hover:bg-cyan-300 transition-all button-animate">
                Comenzar Ahora
              </a>
              <a href="#" className="glass-button text-cyan-400 py-5 px-10 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black button-animate">
                Agendar Demo
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-8 animate-fade-in delay-600 text-animate">
              Sin compromisos • Demo gratuita • Implementación en 30 días
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <div id="chat-widget-container" className="fixed bottom-6 right-6 z-[1000]">
        <div
          id="chat-bubble"
          className="flex items-center justify-center chat-bubble-blink cursor-pointer"
          style={{ width: 60, height: 60, background: 'rgba(34,211,238,0.9)', borderRadius: '50%', boxShadow: '0 4px 20px rgba(34,211,238,0.4)', border: '1px solid rgba(168,85,247,0.5)' }}
          onClick={() => setChatOpen((open) => !open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div
          id="chat-window"
          className={`transition-all duration-300 ${chatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'} glass-effect`}
          style={{ position: 'absolute', bottom: 80, right: 0, width: 350, height: 500, borderRadius: 22, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderBottom: '2px solid rgba(255,255,255,0.08)' }}
        >
          <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Image src="/assets/logo.png" alt="NOMED TECH" width={24} height={24} className="h-6 w-6" />
              <h3 className="font-semibold text-cyan-400">NOMED TECH AI Assistant</h3>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div id="chat-body" ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 350 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.type === 'bot' ? 'bot-message' : 'user-message'}`}>{msg.text}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.options.map((opt, j) => (
                      <button
                        key={j}
                        className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 rounded hover:bg-gray-600 transition-colors"
                        onClick={() => handleSend(opt)}
                        disabled={waiting}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                id="chat-input"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSend(input); }}
                disabled={waiting}
              />
              <button
                id="send-message"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors"
                onClick={() => handleSend(input)}
                disabled={waiting}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
