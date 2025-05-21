'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  ArrowLeft,
  X,
  Upload,
  Save
} from 'lucide-react';

// Admin navigation items
const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, current: false },
  { name: 'Products', href: '/admin/products', icon: Package, current: true },
  { name: 'Transactions', href: '/admin/transactions', icon: ShoppingCart, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Settings', href: '/admin/settings', icon: Settings, current: false },
];

// Available categories
const categories = [
  'Engine',
  'Brakes',
  'Suspension',
  'Drivetrain',
  'Exhaust',
  'Electrical',
  'Transmission',
  'Tires',
  'Accessories',
  'Lighting',
  'Other'
];

export default function NewProduct() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    stock: '',
    featured: false,
    image: null as File | null,
    imagePreview: ''
  });
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setFormData({
      ...formData,
      image: null,
      imagePreview: '',
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // In a real app, you would send this data to your API
    setTimeout(() => {
      setSubmitting(false);
      alert('Product created successfully!');
      // Redirect to products list
      window.location.href = '/admin/products';
    }, 1500);
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
              <h1 className="text-xl font-bold text-white md:hidden">New Product</h1>
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
              <div className="flex items-center mb-6">
                <Link href="/admin/products" className="text-gray-400 hover:text-white mr-2">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl font-horror-title text-red-600">Add New Product</h1>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-sm">
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Product Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input w-full"
                          placeholder="Enter product name"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">
                            Price ($) *
                          </label>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            min="0"
                            step="0.01"
                            className="input w-full"
                            placeholder="0.00"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="stock" className="block text-sm font-medium text-gray-300 mb-1">
                            Stock *
                          </label>
                          <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                            min="0"
                            className="input w-full"
                            placeholder="0"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                          Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        >
                          <option value="">Select a category</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                          Description *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="input w-full"
                          placeholder="Enter product description"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="featured"
                          name="featured"
                          checked={formData.featured}
                          onChange={handleChange}
                          className="rounded border-gray-700 text-red-600 focus:ring-red-600 mr-2"
                        />
                        <label htmlFor="featured" className="text-sm font-medium text-gray-300">
                          Feature this product
                        </label>
                      </div>
                    </div>
                    
                    {/* Right Column - Image Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Product Image
                      </label>
                      
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 h-64 flex flex-col items-center justify-center">
                        {formData.imagePreview ? (
                          <div className="relative w-full h-full">
                            <img
                              src={formData.imagePreview}
                              alt="Product preview"
                              className="w-full h-full object-contain"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 p-1 bg-red-900 rounded-full text-white"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <Upload className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                            <p className="text-gray-400 mb-2">Drag and drop an image here, or click to select a file</p>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              onChange={handleImageChange}
                              accept="image/*"
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={() => document.getElementById('image')?.click()}
                              className="btn-ghost mt-4 text-sm"
                            >
                              Select File
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-300 mb-2">Product Specifications</h3>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-400 text-sm mb-2">
                            Add additional specifications after creating the product.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Form Actions */}
                  <div className="mt-6 border-t border-gray-800 pt-6 flex justify-end space-x-4">
                    <Link href="/admin/products" className="btn-ghost">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary flex items-center"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Save className="h-5 w-5 mr-1" />
                          Create Product
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}