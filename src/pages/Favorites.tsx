import React from 'react';
import { Heart, ShoppingCart, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../components/data/products';

// For demo purposes, we'll show some of the products as favorites
const favoriteProducts = products.slice(0, 2);

const Favorites = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Your Favorites</h1>
        
        {favoriteProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-gray-600" />
            <h2 className="mt-4 text-xl font-medium text-white">No favorites yet</h2>
            <p className="mt-2 text-gray-400">
              Items you favorite will appear here
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-gray-100"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-900 group-hover:opacity-90 transition-opacity">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-sm text-white group-hover:underline">{product.name}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-white fill-white' : 'text-gray-600'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-400">({product.reviews})</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-white">{product.price}</p>
                    </Link>
                  </div>
                  <button className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;