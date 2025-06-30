import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '../../../types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    
    // Validación básica
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con tu backend externo
    // Por ejemplo, enviar a un CRM, base de datos, etc.
    
    // Simulación de envío exitoso
    console.log('Nuevo contacto recibido:', body);
    
    // Ejemplo de integración con API externa
    // const response = await fetch('https://tu-api-externa.com/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.API_KEY}`,
    //   },
    //   body: JSON.stringify(body),
    // });

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente',
      data: { id: Date.now().toString() }
    });

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 