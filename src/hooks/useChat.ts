import { useState, useRef, useEffect } from 'react';
import { ChatMessage, ConversationFlow } from '../types';

export const useChat = () => {
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
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const conversation: ConversationFlow = {
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

  const getNextNode = (text: string): keyof ConversationFlow | null => {
    const t = text.toLowerCase();
    if (t.includes('servicio') || t.includes('solución')) return 'services';
    if (t.includes('ahorrar') || t.includes('costo') || t.includes('precio')) return 'savings';
    if (t.includes('lead') || t.includes('cliente')) return 'leadGen';
    if (t.includes('marketing') || t.includes('publicidad')) return 'marketing';
    if (t.includes('específica') || t.includes('pregunta')) return 'specific';
    if (t.includes('genial') || t.includes('interesante')) return 'great';
    if (t.includes('gracias') || t.includes('adiós')) return 'end';
    return null;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((msgs) => [...msgs, { type: 'user', text }]);
    setInput("");
    setWaiting(true);
    
    setTimeout(() => {
      const next = getNextNode(text);
      if (next) {
        setMessages((msgs) => [...msgs, { 
          type: 'bot', 
          text: conversation[next].message, 
          options: conversation[next].responses 
        }]);
      } else {
        setMessages((msgs) => [...msgs, { 
          type: 'bot', 
          text: "Gracias por tu interés. Nuestro equipo te contactará pronto con más información." 
        }]);
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
  }, [messages]);

  return {
    messages,
    input,
    setInput,
    waiting,
    chatBodyRef,
    handleSend,
  };
}; 