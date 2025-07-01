'use client';
import { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { ChatMessage } from '../types';
import Image from 'next/image';

export default function ChatWidget() {
  const { messages, input, setInput, waiting, chatBodyRef, handleSend } = useChat();
  const [chatOpen, setChatOpen] = useState(false);

  // Animación de pulso en el bubble
  useEffect(() => {
    const bubble = document.getElementById('chat-bubble');
    if (!chatOpen) {
      bubble?.classList.add('chat-bubble-blink');
    } else {
      bubble?.classList.remove('chat-bubble-blink');
    }
  }, [chatOpen]);

  const handleSendMessage = () => {
    if (input.trim()) {
      handleSend(input);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div id="chat-widget-container">
      {/* Chat Bubble */}
      <div 
        id="chat-bubble" 
        className="flex items-center justify-center chat-bubble-blink"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </div>

      {/* Chat Window */}
      <div 
        id="chat-window" 
        className={`${chatOpen ? 'block' : 'hidden'}`}
      >
        {/* Header */}
        <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Image src="/assets/logo.png" alt="NOMED TECH" width={24} height={24} className="h-6 w-6" />
            <h3 className="font-semibold text-cyan-400">NOMED TECH AI Assistant</h3>
          </div>
          <button 
            onClick={() => setChatOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div 
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto p-4 space-y-4" 
          style={{ height: '350px' }}
        >
          {messages.map((message: ChatMessage, index: number) => (
            <div key={index} className={`chat-message ${message.type}-message`}>
              <div className="text-sm">{message.text}</div>
              {message.options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleSend(option)}
                      className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 rounded hover:bg-gray-600 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {waiting && (
            <div className="chat-message bot-message">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                <span className="text-sm">Escribiendo...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={handleSendMessage}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 