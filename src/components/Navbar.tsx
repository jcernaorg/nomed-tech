'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada del navbar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`sticky top-0 z-50 glass-navbar transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className={`flex items-center space-x-3 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          <Image 
            src="/assets/logo.png" 
            alt="NOMED TECH" 
            width={40} 
            height={40}
            className="h-8 md:h-10"
          />
          <span className="text-xl font-light text-white">NOMED TECH</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <div className="relative group">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center cursor-default">
              Nuestras Soluciones
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute glass-effect rounded-lg shadow-lg mt-2 py-2 w-56 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform origin-top">
              <a href="/ai-chatbots" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500 hover:text-black transition-colors">AI ChatBots</a>
              <a href="/soluciones-listas" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500 hover:text-black transition-colors">Soluciones Listas</a>
              <a href="/soluciones-a-medida" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500 hover:text-black transition-colors">Soluciones a Medida</a>
              <a href="/soluciones-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500 hover:text-black transition-colors">Soluciones de Marketing</a>
            </div>
          </div>
          <a href="/precios" className="text-gray-300 hover:text-cyan-400 transition-colors">Precios</a>
          <a href="/casos-de-exito" className="text-gray-300 hover:text-cyan-400 transition-colors">Casos de Éxito</a>
          <a href="/reservas" className="text-gray-300 hover:text-cyan-400 transition-colors">Reservas</a>
          <a href="/contacto" className="text-gray-300 hover:text-cyan-400 transition-colors">Contacto</a>
        </nav>
        
        {/* Theme Toggle Button */}
        <div className={`hidden md:flex items-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button 
            onClick={() => {
              const body = document.body;
              body.classList.toggle('light-theme');
              // Agregar efecto de transición
              body.style.transition = 'all 0.5s ease-in-out';
            }}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-all duration-300 mr-4"
            title="Cambiar tema"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className={`md:hidden transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden glass-effect transition-all duration-500 transform origin-top ${
        mobileMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
      }`}>
        <a href="/ai-chatbots" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">AI ChatBots</a>
        <a href="/soluciones-listas" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Soluciones Listas</a>
        <a href="/soluciones-a-medida" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Soluciones a Medida</a>
        <a href="/soluciones-marketing" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Soluciones de Marketing</a>
        <a href="/precios" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors border-t border-gray-700">Precios</a>
        <a href="/casos-de-exito" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Casos de Éxito</a>
        <a href="/reservas" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Reservas</a>
        <a href="/contacto" className="block py-2 px-6 text-sm hover:bg-gray-800 transition-colors">Contacto</a>
      </div>
    </header>
  );
} 