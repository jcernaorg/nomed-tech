// Tipos para el chat
export type ChatMessage = {
  type: 'bot' | 'user';
  text: string;
  options?: string[];
};

// Tipos para las conversaciones del chatbot
export type ConversationNode = {
  message: string;
  responses: string[];
};

export type ConversationFlow = {
  start: ConversationNode;
  services: ConversationNode;
  savings: ConversationNode;
  leadGen: ConversationNode;
  marketing: ConversationNode;
  specific: ConversationNode;
  great: ConversationNode;
  end: ConversationNode;
};

// Tipos para las barras de progreso
export type ProgressBar = {
  percentage: number;
  label: string;
  icon: string;
};

// Tipos para los servicios
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  progressBar?: ProgressBar;
};

// Tipos para el proceso
export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
};

// Tipos para el formulario de contacto
export type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
  service?: string;
};

// Tipos para las reservas
export type Reservation = {
  name: string;
  email: string;
  company: string;
  date: string;
  time: string;
  service: string;
  message?: string;
};

// Tipos para la API
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// Tipos para el contexto de la aplicación
export type AppContextType = {
  theme: 'light' | 'dark';
  language: 'es' | 'en';
  user: User | null;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'es' | 'en') => void;
  setUser: (user: User | null) => void;
};

// Tipos para el usuario
export type User = {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: 'admin' | 'user' | 'guest';
  preferences: {
    theme: 'light' | 'dark';
    language: 'es' | 'en';
    notifications: boolean;
  };
}; 