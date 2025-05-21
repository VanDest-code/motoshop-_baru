import Link from 'next/link';
import { Skull, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/70 border-t border-red-900/30 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-drip mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/home" className="flex items-center">
                <Skull className="h-8 w-8 text-red-700 mr-2" />
                <span className="text-2xl font-horror-title text-red-700">DarkMoto</span>
              </Link>
              <p className="mt-2 text-sm max-w-md text-gray-400">
                The darkest place for motorcycle spare parts. Quality parts with a horror twist.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-horror-title text-red-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-horror-title text-red-600 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=engine" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Engine Parts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=brakes" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Brake Systems
                </Link>
              </li>
              <li>
                <Link href="/shop?category=suspension" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Suspension
                </Link>
              </li>
              <li>
                <Link href="/shop?category=electrical" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Electrical Components
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-horror-title text-red-600 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-horror-title text-red-600 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-red-700 mr-2" />
                <span className="text-gray-400">666 Shadow Lane, Nightmare City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-700 mr-2" />
                <span className="text-gray-400">(666) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-700 mr-2" />
                <span className="text-gray-400">haunted@darkmoto.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} DarkMoto. All rights reserved. Enter at your own risk.</p>
        </div>
      </div>
    </footer>
  );
}