
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useApp, useTranslation } from '../store';
import { X } from './Icons';

const AIAdvisor: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslation();
  const { lang } = useApp();

  const handleSend = async () => {
    if (!prompt.trim() || isLoading) return;
    
    const userMsg = prompt;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setPrompt('');
    setIsLoading(true);

    try {
      // Fixed: Initializing GoogleGenAI with process.env.API_KEY directly as per SDK guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are an expert aquarist advisor for AquaElite store. Answer fish care questions concisely in ${lang === 'ar' ? 'Arabic' : lang === 'es' ? 'Spanish' : 'English'}. Be helpful and professional.`,
        }
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-sky-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <span className="w-6 h-6 flex items-center justify-center font-bold">✨</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
          {t('aiAdvisor')}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-sm bg-white rounded-2xl shadow-2xl border border-sky-100 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-sky-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐠</span>
              <span className="font-bold">{t('aiAdvisor')}</span>
            </div>
            <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
               <div className="text-center text-gray-500 py-8 italic text-sm">
                 {t('askAi')}
               </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${m.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-white text-gray-800 shadow-sm border rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border flex gap-1">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t bg-white flex gap-2">
            <input 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border-none focus:ring-0 px-2"
            />
            <button 
              onClick={handleSend}
              className="bg-sky-600 text-white p-2 rounded-xl hover:bg-sky-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default AIAdvisor;
