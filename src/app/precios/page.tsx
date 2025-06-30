'use client';
import { useState, useEffect } from 'react';

export default function Precios() {
  const [billingCycle, setBillingCycle] = useState('monthly');

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

  const plans = {
    starter: {
      name: 'Starter',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'Perfecto para pequeñas empresas que quieren comenzar con IA',
      features: [
        '1 Chatbot personalizado',
        'Hasta 1,000 conversaciones/mes',
        'Integración con WhatsApp',
        'Soporte por email',
        'Dashboard básico',
        'Plantillas predefinidas',
        'Respuestas automáticas',
        'Horario de atención: 9:00-18:00'
      ]
    },
    professional: {
      name: 'Professional',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Ideal para empresas en crecimiento que necesitan más funcionalidades',
      features: [
        '3 Chatbots personalizados',
        'Hasta 10,000 conversaciones/mes',
        'Integración multi-plataforma',
        'Soporte prioritario 24/7',
        'Dashboard avanzado',
        'Analytics detallados',
        'Personalización completa',
        'API personalizada',
        'Entrenamiento de IA',
        'Reportes mensuales'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      description: 'Para grandes empresas que requieren soluciones a medida',
      features: [
        'Chatbots ilimitados',
        'Conversaciones ilimitadas',
        'Integración con cualquier sistema',
        'Soporte dedicado 24/7',
        'Dashboard personalizado',
        'Analytics en tiempo real',
        'IA personalizada',
        'API completa',
        'Entrenamiento especializado',
        'Implementación personalizada',
        'Consultoría incluida',
        'SLA garantizado'
      ]
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <div className="text-cyan-400 mb-6 animate-fade-in delay-200 icon-animate">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-white text-animate">
              Planes y <span className="highlight-cyan">Precios</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-12 text-animate">
              Elige el plan perfecto para tu negocio. Todos incluyen implementación gratuita y soporte técnico.
            </p>

            {/* Toggle Billing Cycle */}
            <div className="flex items-center justify-center space-x-4 mb-12 animate-fade-in-up delay-300">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Mensual</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Anual
                <span className="ml-2 text-cyan-400 text-sm">(Ahorra 20%)</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="fade-in-section animate-fade-in-up delay-400 scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl h-full relative card-animate">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light mb-4 text-white text-animate">{plans.starter.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white text-animate">
                      €{billingCycle === 'monthly' ? plans.starter.monthlyPrice : plans.starter.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-animate">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                  </div>
                  <p className="text-gray-300 text-sm text-animate">{plans.starter.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plans.starter.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 list-item-animate">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 icon-animate">
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm text-animate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors button-animate">
                  Comenzar Gratis
                </button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="fade-in-section animate-fade-in-up delay-500 scroll-animate">
              <div className="glass-card p-8 rounded-2xl h-full relative border-2 border-cyan-400 card-animate">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light mb-4 text-white text-animate">{plans.professional.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white text-animate">
                      €{billingCycle === 'monthly' ? plans.professional.monthlyPrice : plans.professional.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-animate">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                  </div>
                  <p className="text-gray-300 text-sm text-animate">{plans.professional.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plans.professional.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 list-item-animate">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 icon-animate">
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm text-animate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-black py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-cyan-500 transition-all button-animate">
                  Comenzar Ahora
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="fade-in-section animate-fade-in-up delay-600 scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl h-full relative card-animate">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light mb-4 text-white text-animate">{plans.enterprise.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white text-animate">
                      €{billingCycle === 'monthly' ? plans.enterprise.monthlyPrice : plans.enterprise.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-animate">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                  </div>
                  <p className="text-gray-300 text-sm text-animate">{plans.enterprise.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plans.enterprise.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 list-item-animate">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 icon-animate">
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm text-animate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors button-animate">
                  Contactar Ventas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 transparent-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Preguntas <span className="highlight-cyan">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl mb-6 card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Hay un período de prueba gratuito?</h3>
                <p className="text-gray-300 text-animate">
                  Sí, ofrecemos una prueba gratuita de 14 días para todos nuestros planes. No se requiere tarjeta de crédito.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl mb-6 card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="text-gray-300 text-animate">
                  Absolutamente. Puedes actualizar o cambiar tu plan en cualquier momento desde tu dashboard.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Qué incluye la implementación?</h3>
                <p className="text-gray-300 text-animate">
                  La implementación incluye configuración inicial, entrenamiento del chatbot, integración con tus plataformas y soporte técnico.
                </p>
              </div>
            </div>

            <div className="scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl mb-6 card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Ofrecen soporte técnico 24/7?</h3>
                <p className="text-gray-300 text-animate">
                  Sí, los planes Professional y Enterprise incluyen soporte técnico 24/7. El plan Starter incluye soporte por email.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl mb-6 card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Puedo personalizar el chatbot?</h3>
                <p className="text-gray-300 text-animate">
                  Sí, todos los planes incluyen personalización. Los planes superiores ofrecen más opciones de personalización.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-xl font-light mb-4 text-white text-animate">¿Qué pasa si excedo el límite de conversaciones?</h3>
                <p className="text-gray-300 text-animate">
                  Te notificaremos cuando te acerques al límite y puedes actualizar tu plan o comprar conversaciones adicionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-bg">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="fade-in-section glass-effect max-w-2xl w-full mx-auto rounded-2xl p-12 shadow-xl border border-white/10 backdrop-blur-lg bg-white/5 animate-scale-in delay-200 card-animate">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white animate-fade-in-up delay-300 text-animate">
              ¿Listo para <span className="highlight-cyan">Comenzar</span>?
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400 text-animate">
              Únete a miles de empresas que ya están transformando su atención al cliente con IA
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
              <a href="#contacto" className="neon-button bg-cyan-400 text-black font-medium py-5 px-10 rounded-lg text-lg hover:bg-cyan-300 transition-all button-animate">
                Comenzar Prueba Gratuita
              </a>
              <a href="#contacto" className="glass-button text-cyan-400 py-5 px-10 rounded-lg text-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black button-animate">
                Hablar con un Experto
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-8 animate-fade-in delay-600 text-animate">
              Sin compromisos • Cancelación en cualquier momento • Soporte incluido
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 