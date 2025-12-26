import React, { useState } from "react";
import { useTranslation, useApp } from "../store";
import { CATEGORIES, FISH_PRODUCTS } from "../mockData";
import ProductCard from "../components/ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import discusVideo from "../features/images-videos/discusvideo.mp4";

const Home: React.FC = () => {
  const t = useTranslation();
  const { lang } = useApp();
  const [selectedFish, setSelectedFish] = useState<
    (typeof FISH_PRODUCTS)[0] | null
  >(null);

  const featuredFish = FISH_PRODUCTS.filter((f) => f.featured).slice(0, 8);

  return (
    <main className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Using a high-quality ethereal blue underwater shot to match the provided image theme */}
          {
            /* <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Artisan Discus Breeding" 
          /> */
            <div className="absolute inset-0">
              <video
                src={discusVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-sky-100/60 via-sky-200/40 to-transparent" />
            </div>
          }
          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/60 via-sky-200/40 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center text-sky-950">
          {/* <div className="inline-block bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] shadow-lg animate-fade-in-up">
            World Class Breeders
          </div> */}
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter animate-fade-in-up [animation-delay:0.1s]">
            The King of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-indigo-800">
              Aquariums
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl font-medium text-sky-800/80 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Artisan discus breeders and importers since 1996. Delivering the
            world's most vibrant tropical specimens to your doorstep.
          </p>
          <div className="flex gap-4 animate-fade-in-up [animation-delay:0.3s]">
            <button className="bg-sky-950 hover:bg-black text-white font-black py-4 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 tracking-tight">
              COLLECTION 2024
            </button>
            <button className="bg-white/40 hover:bg-white/60 backdrop-blur-md text-sky-950 font-black py-4 px-12 rounded-2xl border border-white/50 transition-all shadow-sm">
              OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col items-center mb-16">
          <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
            Explore our world
          </span>
          <h2 className="text-4xl font-black text-sky-950 mb-4 tracking-tighter">
            Shop By Category
          </h2>
          <div className="h-1.5 w-16 bg-sky-900 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4 shadow-sm border-2 border-white group-hover:shadow-2xl transition-all group-hover:border-sky-200">
                <img
                  src={cat.image}
                  alt={cat.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-sky-900/0 transition-colors" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded-lg text-[9px] font-black text-sky-900 uppercase">
                  {cat.fishCount} Specimen
                </div>
              </div>
              <h3 className="text-center font-black text-sm text-sky-950 group-hover:text-sky-600 transition-colors tracking-tight">
                {cat.name[lang]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                Hand-Selected
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-sky-950 mb-4 tracking-tighter">
                Artisan Showcase
              </h2>
              <p className="text-sky-700 font-medium opacity-70">
                Exotic specimens with high-contrast colors and perfect symmetry,
                ready for competitive display.
              </p>
            </div>
            <button className="hidden md:block bg-white hover:bg-sky-900 hover:text-white px-8 py-3 rounded-xl font-black text-xs border border-sky-100 transition-all shadow-sm">
              VIEW CATALOGUE
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredFish.map((fish) => (
              <ProductCard
                key={fish.id}
                fish={fish}
                onClick={() => setSelectedFish(fish)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="relative bg-sky-950 rounded-[3rem] overflow-hidden p-12 md:p-24 flex flex-col items-center text-center text-white shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-sky-500 rounded-full blur-[120px] opacity-20" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20" />

          <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.4em] mb-6 relative z-10">
            Exclusive Access
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 tracking-tighter max-w-3xl leading-none">
            Join the King of Aquarium Club
          </h2>
          <p className="text-sky-200/80 max-w-xl mb-12 text-lg font-medium relative z-10 leading-relaxed">
            Early access to new imports, rare discus auctions, and professional
            breeding guides delivered weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg relative z-10">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-8 py-5 rounded-2xl text-sky-950 font-bold focus:ring-4 focus:ring-sky-500/50 outline-none shadow-inner"
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-5 rounded-2xl font-black shadow-xl transition-all transform hover:-translate-y-1">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedFish && (
        <ProductDetailModal
          fish={selectedFish}
          onClose={() => setSelectedFish(null)}
        />
      )}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </main>
  );
};

export default Home;
