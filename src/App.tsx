import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import AuthModal from './components/AuthModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openAuth = (type: 'login' | 'register') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };
  
  const closeAuth = () => setIsAuthOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar onCartClick={openCart} onAuthClick={openAuth} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProducts />
              <Categories />
              <Newsletter />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={closeCart} />
        <AuthModal isOpen={isAuthOpen} onClose={closeAuth} type={authType} />
      </div>
    </Router>
  );
}

export default App;