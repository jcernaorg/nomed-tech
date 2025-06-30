# NOMED TECH - Next.js Project

Sitio web de NOMED TECH construido con Next.js 15, TypeScript y Tailwind CSS.

## 🏗️ Estructura del Proyecto

```
nomedtech-next/
├── src/
│   ├── app/                    # Páginas de la aplicación (App Router)
│   │   ├── ai-chatbots/        # Página de AI ChatBots
│   │   ├── soluciones-listas/  # Página de soluciones listas
│   │   ├── soluciones-a-medida/ # Página de soluciones a medida
│   │   ├── soluciones-marketing/ # Página de soluciones de marketing
│   │   ├── precios/            # Página de precios
│   │   ├── casos-de-exito/     # Página de casos de éxito
│   │   ├── reservas/           # Página de reservas
│   │   ├── contacto/           # Página de contacto
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página de inicio
│   ├── pages/                  # Páginas (Pages Router - para APIs)
│   │   └── api/                # Rutas de API
│   │       ├── contact/        # API para formulario de contacto
│   │       └── chat/           # API para chat
│   ├── components/             # Componentes reutilizables
│   │   ├── layouts/            # Layouts específicos
│   │   │   └── MainLayout.tsx  # Layout principal reutilizable
│   │   ├── __tests__/          # Pruebas de componentes
│   │   │   └── Navbar.test.tsx # Pruebas del Navbar
│   │   ├── Navbar.tsx          # Componente de navegación
│   │   └── ChatWidget.tsx      # Componente de chat
│   ├── context/                # Contextos de React
│   │   └── AppContext.tsx      # Contexto global de la aplicación
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useChat.ts          # Hook para manejo del chat
│   │   └── useAnimations.ts    # Hook para animaciones
│   ├── lib/                    # Librerías y configuraciones
│   │   └── auth.ts             # Configuración de NextAuth
│   ├── styles/                 # Estilos globales
│   │   └── globals.css         # Estilos CSS globales
│   ├── types/                  # Definiciones de tipos TypeScript
│   │   └── index.ts            # Tipos principales
│   ├── utils/                  # Utilidades y funciones auxiliares
│   │   └── api.ts              # Utilidades para API
│   └── middleware.ts           # Middleware de Next.js
├── prisma/                     # Configuración de base de datos
│   └── schema.prisma           # Esquema de Prisma
├── public/                     # Archivos públicos
│   └── assets/                 # Assets estáticos
├── .env.example                # Variables de entorno de ejemplo
├── jest.config.js              # Configuración de Jest
├── jest.setup.js               # Setup de Jest
├── next.config.ts              # Configuración de Next.js
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── vercel.json                 # Configuración de despliegue Vercel
└── package.json                # Dependencias del proyecto
```

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **React 19** - Biblioteca de UI
- **NextAuth.js** - Autenticación
- **Prisma** - ORM para base de datos
- **Jest & Testing Library** - Pruebas
- **ESLint** - Linter de código

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd nomedtech-next
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp env.example .env.local
# Edita .env.local con tus valores
```

4. Configura la base de datos:
```bash
npx prisma generate
npx prisma db push
```

5. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter
- `npm run test` - Ejecuta las pruebas
- `npm run test:watch` - Ejecuta las pruebas en modo watch
- `npm run test:coverage` - Ejecuta las pruebas con cobertura
- `npm run type-check` - Verifica tipos TypeScript

## 🎨 Características Implementadas

### ✅ **Páginas** (`/src/app/`)
- Página principal con hero section
- Estructura preparada para todas las páginas del sitio

### ✅ **Componentes** (`/src/components/`)
- **Navbar**: Navegación principal con menú desplegable y responsive
- **ChatWidget**: Chatbot interactivo con IA
- **MainLayout**: Layout reutilizable

### ✅ **Layouts** (`/src/components/layouts/`)
- Layout principal con navegación y chat

### ✅ **Estilos** (`/src/styles/`)
- Estilos globales con Tailwind CSS
- Animaciones y efectos visuales

### ✅ **Rutas API** (`/src/pages/api/`)
- API para formulario de contacto
- API para chat con IA

### ✅ **Hooks personalizados** (`/src/hooks/`)
- **useChat**: Manejo completo del chat
- **useAnimations**: Animaciones de scroll y elementos

### ✅ **Contextos** (`/src/context/`)
- **AppContext**: Estado global para tema, idioma y usuario

### ✅ **Integración con APIs / Backend**
- Configuración de NextAuth
- Esquema de Prisma para base de datos
- Utilidades para APIs externas

### ✅ **Autenticación**
- NextAuth.js configurado
- Soporte para Google OAuth y credenciales
- Middleware de protección de rutas

### ✅ **Middleware** (`/src/middleware.ts`)
- Protección de rutas
- Headers de seguridad
- CORS configurado

### ✅ **Carpeta pública** (`/public/`)
- Assets estáticos organizados

### ✅ **Archivos de configuración**
- `next.config.ts` - Configuración de Next.js
- `tailwind.config.ts` - Configuración de Tailwind
- `tsconfig.json` - Configuración de TypeScript
- `jest.config.js` - Configuración de pruebas
- `vercel.json` - Configuración de despliegue

### ✅ **Pruebas** (Jest, Testing Library)
- Configuración completa de Jest
- Ejemplo de pruebas para componentes
- Mocks para Next.js

### ✅ **Despliegue** (Vercel, Netlify)
- Configuración para Vercel
- Variables de entorno preparadas

## 🌐 Integración con APIs Externas

El proyecto está preparado para integrar con:

### APIs de IA
- OpenAI GPT
- Claude
- Otros servicios de IA

### CRMs y Herramientas de Marketing
- HubSpot
- Salesforce
- Mailchimp
- Zapier

### Bases de Datos
- PostgreSQL (configurado con Prisma)
- MongoDB
- Firebase

### Servicios de Pago
- Stripe (configurado)

## 📝 Variables de Entorno

Copia `env.example` a `.env.local` y configura:

```env
# API URLs
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# APIs de IA
OPENAI_API_KEY=your-openai-api-key
CLAUDE_API_KEY=your-claude-api-key

# Base de datos
DATABASE_URL=your-database-url

# Stripe (para pagos)
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## 🎯 Próximos Pasos

1. **Crear páginas individuales** para cada sección
2. **Integrar APIs externas** reales
3. **Implementar dashboard** administrativo
4. **Agregar más pruebas** unitarias y de integración
5. **Optimizar SEO** y rendimiento
6. **Configurar CI/CD** para despliegue automático

## 🧪 Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm run test:watch

# Ejecutar pruebas con cobertura
npm run test:coverage
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura las variables de entorno

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

NOMED TECH - [info@nomedtech.com](mailto:info@nomedtech.com)

---

Desarrollado con ❤️ por el equipo de NOMED TECH
