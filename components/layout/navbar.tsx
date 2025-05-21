'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Skull, Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-black/70 backdrop-blur-sm border-b border-red-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/home" className="flex items-center">
                <Skull className="h-8 w-8 text-red-700 mr-2 flicker" />
                <span className="text-2xl font-horror-title text-red-700 text-glow">DarkMoto</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/home" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200">
              Home
            </Link>
            <Link href="/shop" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200">
              Shop
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200">
              Contact
            </Link>
            
            <div className="ml-4 flex items-center space-x-2">
              <Link href="/cart" className="p-2 rounded-full text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-800 rounded-full">0</span>
              </Link>
              
              <Link href="/" className="p-2 rounded-full text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-colors duration-200">
                <LogOut className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
              Home
            </Link>
            <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
              Shop
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Guest User</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
                Cart
              </Link>
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-900">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}