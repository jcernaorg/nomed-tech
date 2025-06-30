import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Mensaje requerido' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con una API de IA externa
    // Por ejemplo, OpenAI, Claude, etc.
    
    // Simulación de respuesta de IA
    let response = "Gracias por tu interés. Nuestro equipo te contactará pronto con más información.";
    
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('servicio') || lowerMessage.includes('solución')) {
      response = "Ofrecemos automatización de IA integral, incluyendo chatbots de generación de leads, automatización de marketing y facturación optimizada. ¿Qué te interesa más?";
    } else if (lowerMessage.includes('ahorrar') || lowerMessage.includes('costo') || lowerMessage.includes('precio')) {
      response = "¡Nuestros clientes ahorran MUCHO automatizando tareas repetitivas, reduciendo gastos manuales y optimizando flujos de trabajo! Nuestra plataforma todo en uno reemplaza múltiples suscripciones costosas.";
    } else if (lowerMessage.includes('lead') || lowerMessage.includes('cliente')) {
      response = "Nuestros chatbots de IA capturan y califican leads 24/7, interactuando proactivamente con visitantes y programando reuniones automáticamente. ¡Es como tener a tu mejor vendedor trabajando todo el día!";
    } else if (lowerMessage.includes('marketing') || lowerMessage.includes('publicidad')) {
      response = "Diseñamos campañas publicitarias impulsadas por IA y gestionamos tu presencia en redes sociales desde un solo centro, asegurando máximo alcance y engagement.";
    }

    // Ejemplo de integración con API de IA externa
    // const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       { role: 'system', content: 'Eres un asistente de NOMED TECH especializado en soluciones de IA.' },
    //       { role: 'user', content: message }
    //     ],
    //   }),
    // });
    // const aiData = await aiResponse.json();
    // response = aiData.choices[0].message.content;

    return NextResponse.json({
      success: true,
      data: { response }
    });

  } catch (error) {
    console.error('Error en API de chat:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 