'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ProductCard from '@/components/product/product-card';
import { Search, Filter, X } from 'lucide-react';

// Dummy products data
const allProducts = [
  {
    id: '1',
    name: 'Nightmare Engine Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    featured: true,
  },
  {
    id: '2',
    name: 'Blood Red Brake Pads',
    price: 35.99,
    image: 'https://images.pexels.com/photos/12041461/pexels-photo-12041461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Brakes',
    featured: true,
  },
  {
    id: '3',
    name: 'Phantom Suspension Kit',
    price: 149.99,
    image: 'https://images.pexels.com/photos/14887340/pexels-photo-14887340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Suspension',
    featured: true,
  },
  {
    id: '4',
    name: 'Demonic Chain Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Drivetrain',
    featured: true,
  },
  {
    id: '5',
    name: 'Haunted Air Filter',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    featured: false,
  },
  {
    id: '6',
    name: 'Ghost Rider Exhaust System',
    price: 239.99,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Exhaust',
    featured: false,
  },
  {
    id: '7',
    name: 'Cursed Spark Plugs (Set of 4)',
    price: 45.99,
    image: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Electrical',
    featured: false,
  },
  {
    id: '8',
    name: 'Reaper\'s Clutch Plates',
    price: 89.99,
    image: 'https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Transmission',
    featured: false,
  },
  {
    id: '9',
    name: 'Banshee Battery',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Electrical',
    featured: false,
  },
  {
    id: '10',
    name: 'Zombie Grip Tires',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Tires',
    featured: false,
  },
  {
    id: '11',
    name: 'Vampire Fang Handlebars',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Accessories',
    featured: false,
  },
  {
    id: '12',
    name: 'Skull Fog Light Kit',
    price: 69.99,
    image: 'https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Lighting',
    featured: false,
  },
];

// Get unique categories
const categories = Array.from(new Set(allProducts.map(product => product.category)));

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search, category, and price range
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  return (
    <>
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <Navbar />
      
      <main className="min-h-screen bg-background py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-800 pb-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-2">
              Shop of Horrors
            </h1>
            <p className="text-gray-400">
              Browse our collection of nightmarish motorcycle parts
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="text-lg font-horror-title text-red-600 mb-3">
                  Categories
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`block px-2 py-1 w-full text-left rounded hover:bg-gray-800 transition-colors ${
                      selectedCategory === '' ? 'bg-red-900/30 text-white' : 'text-gray-400'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block px-2 py-1 w-full text-left rounded hover:bg-gray-800 transition-colors ${
                        selectedCategory === category ? 'bg-red-900/30 text-white' : 'text-gray-400'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-horror-title text-red-600 mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">${priceRange.min}</span>
                    <span className="text-gray-400">${priceRange.max}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-horror-title text-red-600 mb-3">
                  Availability
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-400">
                    <input
                      type="checkbox"
                      className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                      defaultChecked
                    />
                    In Stock Only
                  </label>
                  <label className="flex items-center text-gray-400">
                    <input
                      type="checkbox"
                      className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                    />
                    Featured Products
                  </label>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-md text-gray-300 mb-4"
              >
                <Filter className="h-4 w-4" />
                <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
              
              {showFilters && (
                <div className="bg-gray-900 p-4 rounded-md mb-4 border border-gray-800">
                  <div className="mb-4">
                    <h3 className="text-lg font-horror-title text-red-600 mb-2">
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory('')}
                        className={`px-2 py-1 rounded ${
                          selectedCategory === '' ? 'bg-red-900 text-white' : 'bg-gray-800 text-gray-300'
                        }`}
                      >
                        All
                      </button>
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-2 py-1 rounded ${
                            selectedCategory === category ? 'bg-red-900 text-white' : 'bg-gray-800 text-gray-300'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-horror-title text-red-600 mb-2">
                      Price Range
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">${priceRange.min}</span>
                        <span className="text-gray-400">${priceRange.max}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="input w-full pl-10 pr-4 py-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                  {searchTerm && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setSearchTerm('')}
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Active filters */}
              {(selectedCategory || searchTerm || priceRange.max < 500) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCategory && (
                    <div className="bg-red-900/30 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory('')} className="ml-2">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {searchTerm && (
                    <div className="bg-red-900/30 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      Search: {searchTerm}
                      <button onClick={() => setSearchTerm('')} className="ml-2">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  {priceRange.max < 500 && (
                    <div className="bg-red-900/30 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      Max Price: ${priceRange.max}
                      <button onClick={() => setPriceRange({ min: 0, max: 500 })} className="ml-2">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Products grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg mb-4">No products found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                      setPriceRange({ min: 0, max: 500 });
                    }}
                    className="btn-ghost"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}