'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Skull, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  ChevronDown,
  ArrowUpRight,
  Search,
  Plus,
  Filter,
  Edit,
  Trash2,
  X,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Admin navigation items
const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, current: false },
  { name: 'Products', href: '/admin/products', icon: Package, current: true },
  { name: 'Transactions', href: '/admin/transactions', icon: ShoppingCart, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Settings', href: '/admin/settings', icon: Settings, current: false },
];

// Dummy products data
const allProducts = [
  {
    id: '1',
    name: 'Nightmare Engine Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    stock: 15,
    featured: true,
  },
  {
    id: '2',
    name: 'Blood Red Brake Pads',
    price: 35.99,
    image: 'https://images.pexels.com/photos/12041461/pexels-photo-12041461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Brakes',
    stock: 23,
    featured: true,
  },
  {
    id: '3',
    name: 'Phantom Suspension Kit',
    price: 149.99,
    image: 'https://images.pexels.com/photos/14887340/pexels-photo-14887340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Suspension',
    stock: 7,
    featured: true,
  },
  {
    id: '4',
    name: 'Demonic Chain Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Drivetrain',
    stock: 19,
    featured: true,
  },
  {
    id: '5',
    name: 'Haunted Air Filter',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    stock: 36,
    featured: false,
  },
  {
    id: '6',
    name: 'Ghost Rider Exhaust System',
    price: 239.99,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Exhaust',
    stock: 4,
    featured: false,
  },
  {
    id: '7',
    name: 'Cursed Spark Plugs (Set of 4)',
    price: 45.99,
    image: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Electrical',
    stock: 22,
    featured: false,
  },
  {
    id: '8',
    name: 'Reaper\'s Clutch Plates',
    price: 89.99,
    image: 'https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Transmission',
    stock: 11,
    featured: false,
  }
];

// Get unique categories
const categories = Array.from(new Set(allProducts.map(product => product.category)));

export default function AdminProducts() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [showOutOfStock, setShowOutOfStock] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  
  // Filter products based on search, category, featured, and stock
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesFeatured = !showOnlyFeatured || product.featured;
    const matchesStock = !showOutOfStock || product.stock === 0;
    
    return matchesSearch && matchesCategory && matchesFeatured && matchesStock;
  });
  
  const openDeleteModal = (productId: string) => {
    setProductToDelete(productId);
    setIsDeleteModalOpen(true);
  };
  
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };
  
  const handleDeleteProduct = () => {
    // In a real application, this would send a delete request to the API
    console.log(`Deleting product ${productToDelete}`);
    closeDeleteModal();
  };
  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className={`bg-gray-900 border-r border-gray-800 fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-800 px-4">
            <Link href="/admin/dashboard" className="flex items-center">
              <Skull className="h-8 w-8 text-red-700 mr-2" />
              <span className="text-xl font-horror-title text-red-700">DarkMoto</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className={`mr-3 h-6 w-6 ${item.current ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'}`} />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* User Profile */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center">
                  <span className="text-white font-bold">AD</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <Link href="/" className="text-xs font-medium text-gray-400 hover:text-red-600 group flex items-center">
                  <LogOut className="mr-1 h-4 w-4 text-gray-400 group-hover:text-red-600" />
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Top navbar */}
        <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              {sidebarOpen ? (
                <ChevronDown className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <ChevronDown className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
            
            <div className="flex-1 flex justify-center md:justify-start">
              <h1 className="text-xl font-bold text-white md:hidden">Products</h1>
            </div>
            
            {/* Header right */}
            <div className="flex items-center space-x-4">
              <Link href="/home" className="text-sm text-gray-400 hover:text-red-600 flex items-center">
                View Store
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-black">
          <div className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-horror-title text-red-600 mb-1">Products</h1>
                  <p className="text-sm text-gray-400">Manage your product inventory</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Link
                    href="/admin/products/new"
                    className="btn-primary flex items-center"
                  >
                    <Plus className="h-5 w-5 mr-1" />
                    Add Product
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-sm">
                {/* Filters and search */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    {/* Search */}
                    <div className="relative w-full sm:w-80">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="input w-full pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    {/* Mobile filters */}
                    <div className="flex sm:hidden">
                      <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-md text-gray-300"
                      >
                        <Filter className="h-4 w-4" />
                        <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
                      </button>
                    </div>
                    
                    {/* Desktop filters */}
                    <div className="hidden sm:flex items-center space-x-4">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="input py-2"
                      >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      
                      <label className="flex items-center text-gray-300">
                        <input
                          type="checkbox"
                          className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                          checked={showOnlyFeatured}
                          onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                        />
                        Featured Only
                      </label>
                      
                      <label className="flex items-center text-gray-300">
                        <input
                          type="checkbox"
                          className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                          checked={showOutOfStock}
                          onChange={(e) => setShowOutOfStock(e.target.checked)}
                        />
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  
                  {/* Mobile filters expanded */}
                  {showFilters && (
                    <div className="mt-4 sm:hidden space-y-4">
                      <div>
                        <label htmlFor="mobile-category" className="block text-sm font-medium text-gray-300 mb-1">
                          Category
                        </label>
                        <select
                          id="mobile-category"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="input w-full py-2"
                        >
                          <option value="">All Categories</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center text-gray-300">
                          <input
                            type="checkbox"
                            className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                            checked={showOnlyFeatured}
                            onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                          />
                          Featured Only
                        </label>
                        
                        <label className="flex items-center text-gray-300">
                          <input
                            type="checkbox"
                            className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                            checked={showOutOfStock}
                            onChange={(e) => setShowOutOfStock(e.target.checked)}
                          />
                          Out of Stock
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Products table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Stock
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Featured
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-800 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden relative">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-white">{product.name}</div>
                                  <div className="text-sm text-gray-500">ID: {product.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">{product.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">${product.price.toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {product.stock > 0 ? product.stock : 'Out of stock'}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {product.featured ? (
                                  <Check className="h-5 w-5 text-green-500" />
                                ) : (
                                  <X className="h-5 w-5 text-gray-500" />
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <Link
                                  href={`/admin/products/edit/${product.id}`}
                                  className="text-indigo-400 hover:text-indigo-300"
                                >
                                  <Edit className="h-5 w-5" />
                                </Link>
                                <button
                                  onClick={() => openDeleteModal(product.id)}
                                  className="text-red-500 hover:text-red-400"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-10 text-center text-gray-400">
                            <div className="flex flex-col items-center">
                              <Package className="h-10 w-10 mb-2" />
                              <p>No products found matching your criteria.</p>
                              <button
                                onClick={() => {
                                  setSearchTerm('');
                                  setSelectedCategory('');
                                  setShowOnlyFeatured(false);
                                  setShowOutOfStock(false);
                                }}
                                className="mt-2 text-red-600 hover:text-red-500"
                              >
                                Reset Filters
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="btn-ghost py-1 px-3">
                      Previous
                    </button>
                    <button className="btn-ghost py-1 px-3">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">8</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="flex items-center">
                        <button className="btn-ghost py-1 px-2 rounded-md mr-2 text-gray-400">
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button className="px-3 py-1 bg-red-900 text-white rounded-md mr-2">
                          1
                        </button>
                        <button className="btn-ghost py-1 px-2 rounded-md">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Delete confirmation modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-horror-title text-red-600 mb-4">Confirm Deletion</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this product? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeDeleteModal}
                className="btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProduct}
                className="btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}