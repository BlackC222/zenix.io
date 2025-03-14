import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';

const popularStores = [
  {
    name: "Fashion Hub",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Luxury Boutique",
    rating: 4.9,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1465199549974-7d82de6e2830?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Trendy Wear",
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Style Studio",
    rating: 4.6,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const popularBrands = [
  {
    name: "Nike",
    rating: 4.9,
    reviews: 3200,
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: 2400
  },
  {
    name: "Adidas",
    rating: 4.7,
    reviews: 2800,
    logo: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: 1800
  },
  {
    name: "Puma",
    rating: 4.6,
    reviews: 1950,
    logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: 1200
  },
  {
    name: "Reebok",
    rating: 4.5,
    reviews: 1650,
    logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: 950
  }
];

const Newsletter = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Stores */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Stores</h2>
            <a href="#" className="text-sm text-white/80 hover:text-white">View All Stores →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularStores.map((store, index) => (
              <div 
                key={index}
                className="bg-black border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-600 transition-all"
              >
                <div className="relative h-48">
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{store.name}</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(store.rating) ? 'text-white fill-white' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-white/90 text-sm">{store.rating}</span>
                      <span className="ml-2 text-white/60 text-sm">({store.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Brands */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Brands</h2>
            <a href="#" className="text-sm text-white/80 hover:text-white">View All Brands →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBrands.map((brand, index) => (
              <div 
                key={index}
                className="bg-black border border-gray-800 rounded-2xl p-6 group hover:border-gray-600 transition-all"
              >
                <div className="relative h-32 mb-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{brand.name}</h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(brand.rating) ? 'text-white fill-white' : 'text-gray-600'}`}
                      />
                    ))}
                    <span className="ml-2 text-white/90 text-sm">{brand.rating}</span>
                    <span className="ml-2 text-white/60 text-sm">({brand.reviews})</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white/60">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-sm">{brand.products.toLocaleString()} Products</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;