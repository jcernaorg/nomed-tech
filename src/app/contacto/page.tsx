'use client';
import { useState, useEffect } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-white text-animate">
              <span className="highlight-cyan">Contacto</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Estamos aquí para transformar tu negocio con soluciones de IA personalizadas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Información de Contacto */}
            <div className="fade-in-section animate-fade-in-up delay-200 scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl mb-8 card-animate">
                <h2 className="text-3xl font-light mb-8 text-white text-animate">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 list-item-animate">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1 text-animate">Teléfono</h3>
                      <p className="text-gray-300 text-animate">+34 91 123 45 67</p>
                      <p className="text-gray-300 text-animate">+34 91 123 45 68</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 list-item-animate">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1 text-animate">Email</h3>
                      <p className="text-gray-300 text-animate">info@nomedtech.com</p>
                      <p className="text-gray-300 text-animate">soporte@nomedtech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 list-item-animate">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1 text-animate">Oficina Principal</h3>
                      <p className="text-gray-300 text-animate">Calle Gran Vía, 28</p>
                      <p className="text-gray-300 text-animate">28013 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 list-item-animate">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1 text-animate">Horario de Atención</h3>
                      <p className="text-gray-300 text-animate">Lunes - Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-300 text-animate">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">Nuestros Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center list-item-animate">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 text-animate">500+</div>
                    <div className="text-gray-300 text-sm text-animate">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center list-item-animate">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 text-animate">98%</div>
                    <div className="text-gray-300 text-sm text-animate">Tasa de Éxito</div>
                  </div>
                  <div className="text-center list-item-animate">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 text-animate">24/7</div>
                    <div className="text-gray-300 text-sm text-animate">Soporte Técnico</div>
                  </div>
                  <div className="text-center list-item-animate">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 text-animate">30</div>
                    <div className="text-gray-300 text-sm text-animate">Días Implementación</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="fade-in-section animate-fade-in-up delay-300 scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h2 className="text-3xl font-light mb-8 text-white text-animate">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-animate">
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div className="text-animate">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-animate">
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    
                    <div className="text-animate">
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div className="text-animate">
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="ai-chatbots">AI ChatBots</option>
                      <option value="automatizacion">Automatización de Procesos</option>
                      <option value="analytics">Analytics y Business Intelligence</option>
                      <option value="soluciones-medida">Soluciones a Medida</option>
                      <option value="consultoria">Consultoría en IA</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="text-animate">
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-medium py-4 px-8 rounded-lg text-lg hover:from-cyan-300 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 button-animate"
                  >
                    Enviar Mensaje
                  </button>
                </form>

                <p className="text-gray-400 text-sm mt-6 text-center text-animate">
                  * Campos obligatorios. Te responderemos en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa y Ubicación */}
      <section className="py-20 transparent-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-white text-animate">
              Nuestra <span className="highlight-cyan">Ubicación</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto text-animate">
              Visítanos en nuestro centro de innovación en el corazón de Madrid
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 scroll-animate-left">
              <div className="glass-card p-8 rounded-2xl h-96 card-animate">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-cyan-400 mb-4 icon-animate">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 text-animate">Mapa Interactivo</h3>
                    <p className="text-gray-300 text-animate">Calle Gran Vía, 28, Madrid</p>
                    <p className="text-gray-300 text-animate">Metro: Gran Vía (L1, L5)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right">
              <div className="glass-card p-8 rounded-2xl card-animate">
                <h3 className="text-2xl font-light mb-6 text-white text-animate">Cómo Llegar</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 list-item-animate">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-animate">Metro</h4>
                      <p className="text-gray-300 text-sm text-animate">Líneas 1 y 5 - Estación Gran Vía</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 list-item-animate">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-animate">Autobús</h4>
                      <p className="text-gray-300 text-sm text-animate">Líneas 1, 2, 44, 46, 74, 75, 146</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 list-item-animate">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 icon-animate">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-animate">Coche</h4>
                      <p className="text-gray-300 text-sm text-animate">Parking público disponible</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <h4 className="text-white font-medium mb-2 text-animate">Horario de Visitas</h4>
                  <p className="text-gray-300 text-sm text-animate">Lunes - Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300 text-sm text-animate">Con cita previa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 