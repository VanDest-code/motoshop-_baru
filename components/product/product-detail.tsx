'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, Share, CornerDownLeft, Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/product/product-card';
type ProductDetailProps = {
  product: any;
  similarProducts: any[];
};

export default function ProductDetail({ product, similarProducts }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <a href="/home" className="hover:text-red-500">Home</a>
        <span className="mx-2">/</span>
        <a href="/shop" className="hover:text-red-500">Shop</a>
        <span className="mx-2">/</span>
        <a href={`/shop?category=${product.category}`} className="hover:text-red-500">{product.category}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{product.name}</span>
      </div>
      
      {/* Product Detail */}
      <div className="bg-gray-900/70 rounded-lg overflow-hidden border border-gray-800 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-horror-title text-white mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl text-red-600 font-bold">${product.price.toFixed(2)}</span>
              {product.featured && (
                <span className="ml-3 bg-red-900 text-white text-xs px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-4">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-gray-500 text-sm capitalize">{key}</span>
                    <span className="text-gray-300">{String(value)}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-gray-300 mb-4">
                <span className={product.stock > 0 ? 'text-green-500' : 'text-red-500'}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stock > 0 && (
                  <span className="ml-2 text-gray-500">
                    ({product.stock} available)
                  </span>
                )}
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    readOnly
                    className="w-12 px-2 py-2 text-center bg-gray-800 text-gray-300 border-x border-gray-700"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="btn-primary flex items-center justify-center flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 bg-gray-800 rounded-md text-gray-300 hover:text-red-500 hover:bg-gray-700 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-3 bg-gray-800 rounded-md text-gray-300 hover:text-red-500 hover:bg-gray-700 transition-colors">
                  <Share className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Return Policy */}
            <div className="mt-6 text-sm text-gray-500 flex items-start">
              <CornerDownLeft className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <p>30-day return policy. No questions asked if parts arrive damaged or don't fit your motorcycle.</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-t border-gray-800">
          <div className="px-6 py-4">
            <h3 className="text-lg font-horror-title text-red-600 mb-3">
              Additional Information
            </h3>
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="bg-gray-900 divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                    Category
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                    {product.category}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                    SKU
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                    DM-{product.category.substring(0, 3).toUpperCase()}-{product.id}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                    Compatibility
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                    All major motorcycle brands
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                    Warranty
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                    1 Year Limited Warranty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-horror-title text-red-600 mb-6">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}