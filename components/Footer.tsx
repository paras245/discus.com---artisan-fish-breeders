
import React from 'react';
import { useTranslation } from '../store';

const Footer: React.FC = () => {
  const t = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
            <span className="text-xl font-bold tracking-tight">AquaElite</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium aquarium fish sourced from the best breeders worldwide. We provide high-quality health guarantees and safe delivery.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">{t('about')}</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Our History</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Sustainable Breeding</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Shipping Information</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Customer Support</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Track Your Order</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates and exclusive offers.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-sky-500"
            />
            <button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg text-sm font-bold transition-all">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2024 AquaElite Premium Fish Store. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Amex</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
