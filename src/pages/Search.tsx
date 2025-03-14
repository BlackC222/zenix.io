import React, { useState } from 'react';
import { Search as SearchIcon, X, Filter, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../components/data/products';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categories = ['Clothing', 'Accessories', 'Footwear', 'Bags'];
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="block w-full pl-10 pr-10 py-3 border border-gray-700 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
            />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>
            )}
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-xl text-white hover:bg-gray-900"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
        
        {showFilters && (
          <div className="mb-8 p-6 border border-gray-800 rounded-xl bg-gray-900/50">
            <h3 className="text-lg font-medium text-white mb-4">Filter Products</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Price Range</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-white">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <span className="text-white">${priceRange[1]}</span>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="rounded border-gray-700 text-white focus:ring-white/20 bg-gray-800"
                      />
                      <span className="ml-2 text-white">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-white">
            {searchTerm 
              ? `Search results for "${searchTerm}"` 
              : 'All Products'}
          </h2>
          <p className="text-gray-400 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-900">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
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
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <SearchIcon className="mx-auto h-16 w-16 text-gray-600" />
            <h2 className="mt-4 text-xl font-medium text-white">No products found</h2>
            <p className="mt-2 text-gray-400">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;