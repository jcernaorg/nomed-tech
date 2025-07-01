import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; width: number; height: number; className?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}));

describe('Navbar', () => {
  it('renders the logo and company name', () => {
    render(<Navbar />);
    
    expect(screen.getByAltText('NOMED TECH')).toBeInTheDocument();
    expect(screen.getByText('NOMED TECH')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Precios')).toBeInTheDocument();
    expect(screen.getByText('Casos de Éxito')).toBeInTheDocument();
    expect(screen.getByText('Reservas')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('shows dropdown menu on hover', () => {
    render(<Navbar />);
    
    const solutionsButton = screen.getByText('Nuestras Soluciones');
    fireEvent.mouseEnter(solutionsButton);
    
    expect(screen.getByText('AI ChatBots')).toBeInTheDocument();
    expect(screen.getByText('Soluciones Listas')).toBeInTheDocument();
    expect(screen.getByText('Soluciones a Medida')).toBeInTheDocument();
    expect(screen.getByText('Soluciones de Marketing')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navbar />);
    
    const hamburgerButton = screen.getByRole('button');
    fireEvent.click(hamburgerButton);
    
    // Verificar que el menú móvil se muestra
    expect(screen.getByText('AI ChatBots')).toBeInTheDocument();
  });
}); 