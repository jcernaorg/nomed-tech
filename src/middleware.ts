import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener la ruta actual
  const path = request.nextUrl.pathname;

  // Rutas que requieren autenticación
  const protectedRoutes = ['/dashboard', '/admin', '/reservas'];
  
  // Rutas de autenticación
  const authRoutes = ['/login', '/register'];

  // Verificar si el usuario está autenticado (puedes implementar tu lógica aquí)
  const isAuthenticated = request.cookies.has('auth-token'); // Ejemplo con cookie

  // Redirigir usuarios autenticados fuera de las páginas de auth
  if (isAuthenticated && authRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirigir usuarios no autenticados a login si intentan acceder a rutas protegidas
  if (!isAuthenticated && protectedRoutes.some(route => path.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Agregar headers de seguridad
  const response = NextResponse.next();
  
  // Headers de seguridad
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // CORS headers si es necesario
  if (path.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

// Configurar en qué rutas se ejecutará el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 