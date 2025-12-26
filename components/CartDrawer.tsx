
import React from 'react';
import { useApp, useTranslation } from '../store';
import { X } from './Icons';

const CartDrawer: React.FC = () => {
  const { cart, lang, isCartOpen, setCartOpen, removeFromCart, updateQuantity } = useApp();
  const t = useTranslation();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setCartOpen(false)} />
      <div className={`relative w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-${lang === 'ar' ? 'left' : 'right'}`}>
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-900">{t('cartTitle')}</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-32 h-32 bg-sky-50 rounded-full flex items-center justify-center">
                <X className="w-16 h-16 text-sky-200" />
              </div>
              <p className="text-gray-500 font-medium">{t('emptyCart')}</p>
              <button 
                onClick={() => setCartOpen(false)}
                className="text-sky-600 font-bold hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <img src={item.images[0]} alt={item.name[lang]} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{item.name[lang]}</h3>
                  <p className="text-sky-600 font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border rounded-lg bg-gray-50">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-200 transition-colors"
                      >-</button>
                      <span className="px-3 py-1 font-medium min-w-[2rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-200 transition-colors"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 font-medium hover:underline"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 border-t space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">{t('subtotal')}</span>
              <span className="text-2xl font-bold text-sky-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
              {t('checkout')}
            </button>
            <button 
              onClick={() => setCartOpen(false)}
              className="w-full text-sky-700 font-bold py-2 hover:underline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default CartDrawer;
