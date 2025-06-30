'use client';
import { useState, useEffect } from 'react';

export default function AIChatbots() {
  const [activeTab, setActiveTab] = useState('caracteristicas');

  // Efecto para animaciones de scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 50);
        }
      });
    }, observerOptions);

    const scrollObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

    const textObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 150);
        }
      });
    }, observerOptions);

    const buttonObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 200);
        }
      });
    }, observerOptions);

    const cardObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

    const listObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 100);
        }
      });
    }, observerOptions);

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

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <div className="text-cyan-400 mb-6 animate-fade-in delay-200 icon-animate">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-white text-animate">
              AI <span className="highlight-cyan">ChatBots</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-12 text-animate">
              Chatbots inteligentes que revolucionan la atención al cliente y generan leads 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
              <a href="#demo" className="neon-button bg-cyan-400 text-black font-medium py-4 px-8 rounded-lg text-lg hover:bg-cyan-300 transition-all button-animate">
                Probar Demo
              </a>
              <a href="#contacto" className="glass-button text-cyan-400 py-4 px-8 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black button-animate">
                Solicitar Cotización
              </a>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center scroll-animate">
              <div className="text-4xl font-bold text-cyan-400 mb-2 text-animate">99.9%</div>
              <div className="text-gray-300 text-sm text-animate">Disponibilidad</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-4xl font-bold text-cyan-400 mb-2 text-animate">24/7</div>
              <div className="text-gray-300 text-sm text-animate">Atención</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-4xl font-bold text-cyan-400 mb-2 text-animate">85%</div>
              <div className="text-gray-300 text-sm text-animate">Reducción Costos</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-4xl font-bold text-cyan-400 mb-2 text-animate">3x</div>
              <div className="text-gray-300 text-sm text-animate">Más Leads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 transparent-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Características <span className="highlight-cyan">Avanzadas</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Tecnología de vanguardia que hace que tu chatbot sea más inteligente que nunca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">IA Conversacional</h3>
              <p className="text-gray-300 text-animate">
                Conversaciones naturales y contextuales que entienden el lenguaje humano y responden de manera inteligente.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">Integración Multiplataforma</h3>
              <p className="text-gray-300 text-animate">
                Se integra perfectamente con WhatsApp, Telegram, Facebook Messenger, tu sitio web y más.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">Analytics Avanzados</h3>
              <p className="text-gray-300 text-animate">
                Dashboard completo con métricas de conversión, satisfacción del cliente y análisis de conversaciones.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">Seguridad Total</h3>
              <p className="text-gray-300 text-animate">
                Encriptación de datos, cumplimiento GDPR y protección de la privacidad de tus clientes.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">Personalización Total</h3>
              <p className="text-gray-300 text-animate">
                Adapta el tono, estilo y respuestas del chatbot para que refleje la personalidad de tu marca.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl card-animate">
              <div className="text-cyan-400 mb-6 icon-animate">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-4 text-white text-animate">Escalabilidad Automática</h3>
              <p className="text-gray-300 text-animate">
                Maneja miles de conversaciones simultáneas sin perder calidad ni velocidad de respuesta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Casos de <span className="highlight-cyan">Uso</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Descubre cómo nuestros chatbots están transformando diferentes industrias
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">E-commerce</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Asistencia en la selección de productos</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Seguimiento de pedidos en tiempo real</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Procesamiento de devoluciones y reembolsos</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Recomendaciones personalizadas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">Servicios Financieros</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Consultas sobre saldos y movimientos</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Asistencia en transferencias</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Información sobre productos financieros</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Soporte para bloqueos de tarjetas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">Salud</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Agendamiento de citas médicas</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Recordatorios de medicamentos</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Información sobre síntomas</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Seguimiento de tratamientos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">Educación</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Tutoría personalizada 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Respuestas a dudas académicas</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Seguimiento del progreso</span>
                  </li>
                  <li className="flex items-start space-x-3 list-item-animate">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-animate">Información sobre cursos y programas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 transparent-section">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="fade-in-section glass-effect max-w-2xl w-full mx-auto rounded-2xl p-12 shadow-xl border border-white/10 backdrop-blur-lg bg-white/5 animate-scale-in delay-200 card-animate">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white animate-fade-in-up delay-300 text-animate">
              ¿Listo para <span className="highlight-cyan">Revolucionar</span> tu Atención al Cliente?
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400 text-animate">
              Únete a cientos de empresas que ya están experimentando los beneficios de nuestros AI ChatBots
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
              <a href="#demo" className="neon-button bg-cyan-400 text-black font-medium py-5 px-10 rounded-lg text-lg hover:bg-cyan-300 transition-all button-animate">
                Probar Demo Gratis
              </a>
              <a href="#contacto" className="glass-button text-cyan-400 py-5 px-10 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black button-animate">
                Solicitar Cotización
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-8 animate-fade-in delay-600 text-animate">
              Demo gratuita • Implementación en 7 días • Soporte 24/7
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 