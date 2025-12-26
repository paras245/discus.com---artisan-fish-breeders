
import React, { useState } from 'react';
import { useApp, useTranslation } from '../store';
import { ShoppingCart, Menu, Search, User, X } from './Icons';
import { Language } from '../types';

const Header: React.FC = () => {
  const { lang, setLang, cart, setCartOpen, user } = useApp();
  const t = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-card shadow-sm border-b border-white/20">
      <div className="bg-sky-900 text-white py-1.5 px-4 text-[10px] font-bold tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as Language)}
                className={`hover:text-yellow-400 transition-colors ${lang === l.code ? 'text-yellow-400 underline' : ''}`}
              >
                {l.flag} {l.name}
              </button>
            ))}
          </div>
          <div className="hidden sm:block">
            Artisan Fish Breeders & Importers Since 1996
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <button className="md:hidden p-2 hover:bg-white/50 rounded-lg" onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6 text-sky-900" />
        </button>

        <div 
          className="flex flex-col items-center cursor-pointer group" 
          onClick={() => window.location.hash = ''}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-lg group-hover:scale-110 transition-transform">
               <span className="text-yellow-500 font-black text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-sky-950 tracking-tighter leading-none group-hover:text-black transition-colors">Discus.com</span>
              <span className="text-[8px] font-bold text-sky-700 tracking-[0.2em] uppercase leading-tight">King of Aquarium</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-lg relative hidden md:block">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="w-full pl-5 pr-12 py-2.5 bg-white/50 border border-sky-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all shadow-inner"
          />
          <Search className="absolute right-4 top-3 w-5 h-5 text-sky-400" />
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          <button className="hidden sm:flex items-center gap-2 text-sky-900 hover:text-black transition-colors font-semibold">
            <User className="w-6 h-6" />
            <span className="text-sm">{user ? user.name : t('login')}</span>
          </button>
          
          <button 
            className="relative p-2.5 bg-white/80 text-sky-900 hover:bg-sky-900 hover:text-white rounded-2xl transition-all shadow-sm border border-white/40"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden">
          <div className={`fixed inset-y-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-72 bg-white shadow-2xl flex flex-col transform transition-transform duration-300`}>
            <div className="p-6 border-b flex justify-between items-center bg-sky-900 text-white">
              <span className="font-black text-2xl tracking-tighter">Discus.com</span>
              <button onClick={() => setMenuOpen(false)} className="p-1 hover:bg-white/20 rounded-lg"><X className="w-6 h-6" /></button>
            </div>
            <nav className="flex-1 p-6 space-y-4 bg-sky-50/50">
              <a href="#" className="flex items-center justify-between py-3 text-lg font-bold text-sky-900 border-b border-sky-100">
                {t('home')}
                <span className="text-sky-300">→</span>
              </a>
              <a href="#/categories" className="flex items-center justify-between py-3 text-lg font-bold text-sky-900 border-b border-sky-100">
                {t('categories')}
                <span className="text-sky-300">→</span>
              </a>
              <a href="#/shop" className="flex items-center justify-between py-3 text-lg font-bold text-sky-900 border-b border-sky-100">
                {t('shop')}
                <span className="text-sky-300">→</span>
              </a>
              <a href="#/about" className="flex items-center justify-between py-3 text-lg font-bold text-sky-900 border-b border-sky-100">
                {t('about')}
                <span className="text-sky-300">→</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
