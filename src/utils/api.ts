import { ApiResponse, ContactForm, Reservation } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Función genérica para hacer peticiones HTTP
async function fetchApi<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Error en la petición');
    }

    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

// Funciones específicas para diferentes endpoints
export const api = {
  // Contacto
  async sendContactForm(formData: ContactForm): Promise<ApiResponse<{ id: string }>> {
    return fetchApi<{ id: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  // Reservas
  async createReservation(reservationData: Reservation): Promise<ApiResponse<{ id: string }>> {
    return fetchApi<{ id: string }>('/reservations', {
      method: 'POST',
      body: JSON.stringify(reservationData),
    });
  },

  async getReservations(): Promise<ApiResponse<Reservation[]>> {
    return fetchApi<Reservation[]>('/reservations');
  },

  // Servicios
  async getServices(): Promise<ApiResponse<unknown[]>> {
    return fetchApi<unknown[]>('/services');
  },

  // Casos de éxito
  async getCaseStudies(): Promise<ApiResponse<unknown[]>> {
    return fetchApi<unknown[]>('/case-studies');
  },

  // Precios
  async getPricing(): Promise<ApiResponse<unknown[]>> {
    return fetchApi<unknown[]>('/pricing');
  },

  // Chat
  async sendChatMessage(message: string): Promise<ApiResponse<{ response: string }>> {
    return fetchApi<{ response: string }>('/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  },
};

// Función para validar email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar formulario de contacto
export const validateContactForm = (form: ContactForm): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!form.name.trim()) errors.push('El nombre es requerido');
  if (!form.email.trim()) errors.push('El email es requerido');
  if (!validateEmail(form.email)) errors.push('El email no es válido');
  if (!form.company.trim()) errors.push('La empresa es requerida');
  if (!form.message.trim()) errors.push('El mensaje es requerido');

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Función para validar formulario de reserva
export const validateReservationForm = (form: Reservation): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!form.name.trim()) errors.push('El nombre es requerido');
  if (!form.email.trim()) errors.push('El email es requerido');
  if (!validateEmail(form.email)) errors.push('El email no es válido');
  if (!form.company.trim()) errors.push('La empresa es requerida');
  if (!form.date) errors.push('La fecha es requerida');
  if (!form.time) errors.push('La hora es requerida');
  if (!form.service) errors.push('El servicio es requerido');

  return {
    isValid: errors.length === 0,
    errors,
  };
}; 