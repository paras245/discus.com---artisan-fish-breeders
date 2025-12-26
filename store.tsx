
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, User, CartItem, Fish } from './types';
// Fixed: Using top-level ES import instead of require inside the hook to avoid 'require is not defined' error.
import { translations } from './translations';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  cart: CartItem[];
  addToCart: (fish: Fish, quantity: number) => void;
  removeFromCart: (fishId: string) => void;
  updateQuantity: (fishId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const addToCart = (fish: Fish, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === fish.id);
      if (existing) {
        return prev.map(item => item.id === fish.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...fish, quantity }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (fishId: string) => {
    setCart(prev => prev.filter(item => item.id !== fishId));
  };

  const updateQuantity = (fishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(fishId);
      return;
    }
    setCart(prev => prev.map(item => item.id === fishId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{
      lang, setLang, user, setUser, cart, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setCartOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

export const useTranslation = () => {
  const { lang } = useApp();
  
  return (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };
};
