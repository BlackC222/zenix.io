import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

// Import the products data
import { products } from './data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');

  // Get related products (excluding current product)
  const relatedProducts = products
    .filter(p => p.id !== parseInt(id || '0'))
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-white underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    // In a real Shopify integration, this would call the Shopify API
    console.log('Added to cart:', {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor
    });
    
    // Show a success message
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="flex items-center text-gray-400 hover:text-white">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-900">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-white fill-white' : 'text-gray-600'}`}
                  />
                ))}
                <span className="ml-2 text-white">{product.rating}</span>
                <span className="ml-2 text-gray-400">({product.reviews} reviews)</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-white">{product.price}</p>
            </div>

            <div>
              <p className="text-gray-300">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedSize === size 
                          ? 'bg-white text-black' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedColor === color 
                          ? 'bg-white text-black' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="p-2 rounded-l-md bg-gray-800 text-white hover:bg-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 text-center py-2 bg-gray-800 text-white">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity}
                  className="p-2 rounded-r-md bg-gray-800 text-white hover:bg-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button 
                onClick={addToCart}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-white mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <Link to={`/product/${relatedProduct.id}`} className="block">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-900">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-80 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex justify-between">
                  <div>
                    <Link to={`/product/${relatedProduct.id}`} className="block">
                      <h3 className="text-sm text-white group-hover:underline">{relatedProduct.name}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'text-white fill-white' : 'text-gray-600'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-400">({relatedProduct.reviews})</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-white">{relatedProduct.price}</p>
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
    </div>
  );
};

export default ProductPage;