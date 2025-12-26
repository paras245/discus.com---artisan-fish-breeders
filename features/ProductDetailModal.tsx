
import React, { useState } from 'react';
import { Fish } from '../types';
import { useApp, useTranslation } from '../store';
import { X, ShoppingCart } from '../components/Icons';

interface ProductDetailModalProps {
  fish: Fish;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ fish, onClose }) => {
  const { lang, addToCart } = useApp();
  const t = useTranslation();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur rounded-full shadow-md md:hidden">
          <X className="w-6 h-6" />
        </button>

        {/* Gallery */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-slate-50 flex flex-col">
          <div className="flex-1 aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl border-4 border-white">
            <img src={fish.images[activeImg]} alt={fish.name[lang]} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4">
            {fish.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImg === idx ? 'border-sky-500 shadow-md scale-105' : 'border-transparent opacity-70'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
          <div className="hidden md:flex justify-end mb-8">
             <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
               <X className="w-8 h-8 text-gray-400" />
             </button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-2">{fish.name[lang]}</h1>
            <p className="text-gray-400 italic font-medium">{fish.scientificName}</p>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex flex-col">
              {fish.discountPrice ? (
                <>
                  <span className="text-4xl font-black text-orange-500">${fish.discountPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-400 line-through">${fish.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-4xl font-black text-sky-900">${fish.price.toFixed(2)}</span>
              )}
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-xl ${s <= Math.round(fish.rating) ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{fish.reviews} Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mb-1">{t('origin')}</span>
              <span className="font-bold text-sky-800">{fish.specifications.origin}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mb-1">{t('tankSize')}</span>
              <span className="font-bold text-sky-800">{fish.specifications.tankSize}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mb-1">{t('careLevel')}</span>
              <span className="font-bold text-sky-800">{fish.specifications.careLevel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mb-1">{t('temperament')}</span>
              <span className="font-bold text-sky-800">{fish.specifications.temperament}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-10">
            {fish.description[lang]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <div className="flex items-center justify-between border-2 border-gray-100 rounded-2xl p-2 bg-slate-50 min-w-[140px]">
               <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-gray-200 rounded-xl transition-colors">-</button>
               <span className="font-bold text-xl px-4">{qty}</span>
               <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-gray-200 rounded-xl transition-colors">+</button>
             </div>
             <button 
               onClick={() => { addToCart(fish, qty); onClose(); }}
               className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
             >
               <ShoppingCart className="w-6 h-6" />
               {t('addToCart')}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
