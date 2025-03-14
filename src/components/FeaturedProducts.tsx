import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from './data/products';

const FeaturedProducts = () => {
  const [hoveredProducts, setHoveredProducts] = useState({});

  const handleMouseEnter = (productId, imageIndex) => {
    setHoveredProducts({
      ...hoveredProducts,
      [productId]: imageIndex
    });
  };

  const handleMouseLeave = (productId) => {
    setHoveredProducts({
      ...hoveredProducts,
      [productId]: 0
    });
  };

  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative"
              onMouseEnter={() => setHoveredProducts({...hoveredProducts, [product.id]: 1})}
              onMouseLeave={() => handleMouseLeave(product.id)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-900">
                  <img
                    src={product.images[hoveredProducts[product.id] || 0]}
                    alt={product.name}
                    className="w-full h-80 object-cover object-center group-hover:opacity-75 transition-opacity transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Image thumbnails for hover */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {product.images.map((image, index) => (
                      <button 
                        key={index}
                        className={`w-2 h-2 rounded-full ${hoveredProducts[product.id] === index ? 'bg-white' : 'bg-white/50'}`}
                        onMouseEnter={() => handleMouseEnter(product.id, index)}
                      />
                    ))}
                  </div>
                </div>
              </Link>
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
      </div>
    </div>
  );
};

export default FeaturedProducts;