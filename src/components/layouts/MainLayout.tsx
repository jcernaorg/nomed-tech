'use client';
import React from 'react';
import Navbar from '../Navbar';
import ChatWidget from '../ChatWidget';

interface MainLayoutProps {
  children: React.ReactNode;
  showChat?: boolean;
}

export default function MainLayout({ children, showChat = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="relative">
        {children}
      </main>
      {showChat && <ChatWidget />}
    </div>
  );
} 