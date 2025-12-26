
import React from 'react';
import { AppProvider } from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './features/Home';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* We're using a single page Home view for now, usually handled by a router */}
          <Home />
        </main>
        <Footer />
        <CartDrawer />
        <AIAdvisor />
      </div>
    </AppProvider>
  );
};

export default App;
