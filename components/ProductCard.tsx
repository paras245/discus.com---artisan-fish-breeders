
import React from 'react';
import { Fish } from '../types';
import { useApp, useTranslation } from '../store';

interface ProductCardProps {
  fish: Fish;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ fish, onClick }) => {
  const { lang, addToCart } = useApp();
  const t = useTranslation();

  return (
    <div className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/40">
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={onClick}>
        <img 
          src={fish.images[0]} 
          alt={fish.name[lang]} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {fish.discountPrice && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-lg">Premium Deal</span>
        )}
        <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
           <button 
             className="bg-white text-sky-900 px-6 py-2.5 rounded-xl font-black text-xs shadow-xl hover:bg-sky-50 transition-all transform scale-90 group-hover:scale-100"
             onClick={(e) => { e.stopPropagation(); onClick(); }}
           >
             DISCOVER FISH
           </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="font-black text-sky-950 group-hover:text-sky-600 transition-colors line-clamp-1 text-base tracking-tight">{fish.name[lang]}</h3>
          <div className="flex items-center gap-1 bg-white/50 px-2 py-0.5 rounded-lg border border-white/50">
            <span className="text-yellow-500 text-xs">★</span>
            <span className="text-[10px] text-sky-900 font-bold">{fish.rating}</span>
          </div>
        </div>
        
        <p className="text-[10px] text-sky-600 mb-4 font-bold uppercase tracking-wider line-clamp-1">{fish.scientificName}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-sky-100/50">
          <div className="flex flex-col">
             {fish.discountPrice ? (
               <>
                 <span className="text-xl font-black text-sky-900 leading-none">${fish.discountPrice.toFixed(0)}</span>
                 <span className="text-[10px] text-sky-400 line-through font-bold">${fish.price.toFixed(0)}</span>
               </>
             ) : (
               <span className="text-xl font-black text-sky-900 leading-none">${fish.price.toFixed(0)}</span>
             )}
          </div>
          <button 
            onClick={() => addToCart(fish, 1)}
            className="p-3 bg-white hover:bg-sky-900 hover:text-white text-sky-900 rounded-xl transition-all duration-300 shadow-sm border border-sky-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
